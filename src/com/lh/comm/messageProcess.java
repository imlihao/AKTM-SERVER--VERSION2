package com.lh.comm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.Test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.lh.dao.dao_customer;
import com.lh.dao.dao_invoice;
import com.lh.dao.dao_loaddo;
import com.lh.dao.dao_odo;
import com.lh.dao.dao_sysuser;
import com.lh.dao.dao_transport;
import com.lh.daoImp.InvoiceDaoImp;
import com.lh.daoImp.daoFactory;
import com.lh.define.msgType;
import com.lh.vo.customer;
import com.lh.vo.invoice;
import com.lh.vo.loaddo;
import com.lh.vo.odo;
import com.lh.vo.sysuser;
import com.lh.vo.transport;
/**
 * 
 * @author Administrator
 *
 */
public class messageProcess {
	
   
   private static Map<Integer, messageProcess> msps=new HashMap<Integer, messageProcess>();
   
   Gson gs=new GsonBuilder().create();
   //��֤����
   private sysuser sys;
   
   
   /**
    * ע������
    * @param key session��ʾ��
    */
   public static void cancelMsp(int key){
	   msps.remove(key);
   }
   
   /**
    * 
    * @param key ��ȡsession��Ӧ�ķ���
    * @return ��Ϣ����
    */
   public static messageProcess getMsp(int key){
	   messageProcess msp=msps.get(key);
	   if(msp==null){
		   msp=new messageProcess();
		   msps.put(key,msp);
	   }
	   return msp;
   }	
		   
   /**
    * ��Ϣ����������
    * @param itype
    * @param jsonData
    * @return
    */
   public String process(String itype,String jsonData){
	   String json=null;
	   if(itype.equals(msgType.login)){
		   return login(jsonData);
	   }else if(sys==null){
		   return null;
	   }
      	   
	   switch(itype){       	   
	      default:
	    	  json=onError(itype);
	    	  break;
	   }
	   return json;
   } 
   
   /**
    * ������
    * @param itype 
    */
   public String onError(String itype){
	   alret scmsg=new alret();
	   System.out.println("���ͶԱȴ���:"+itype);	   
	   return gs.toJson(scmsg);
   }
   
   
   /**
    *  ��½����
    * @param json
    * @return suc ���ض�Ӧ��������Ϣ
    * 
    */
   private String login(String json){	       
		  CSloginMsg msg=gs.fromJson(json,CSloginMsg.class);
		  sysuser us=daoFactory.getSysuserDao().search(msg.name);
		  if(us==null||!us.getPsd().equals(msg.psd)){
			  alret al=new alret();
			  al.msg="�˺Ż��������"; 
			  return gs.toJson(al);			  
		  };
		  sys=us;
		  //����
		  SCupdateAll scmsg=new SCupdateAll();
		  
		  scmsg.sysu=us;
		  
		  
		  //TODO������Ȩ�޷���
		  dao_invoice invd=daoFactory.getInvoiceDao();
		  scmsg.invs=invd.searchAll();
		  invd.commit();
		  
		  dao_loaddo loadod=daoFactory.getloaddoDao();
		  scmsg.loaddos=loadod.searchAll();
		  loadod.commit();
		  
		  dao_odo odod=daoFactory.getodoDao();
		  scmsg.odos=odod.searchAll();
		  odod.commit();
		  
		  dao_sysuser sysd=daoFactory.getSysuserDao();
		  scmsg.sysusers=sysd.searchAll();
		  sysd.commit();
		  
		  dao_transport tpsd=daoFactory.gettransportDao();
		  scmsg.tps=tpsd.searchAll();
		  tpsd.commit();
		  
		  dao_customer cusd=daoFactory.getCustomerDao();
		  scmsg.cus=cusd.searchAll();
		  cusd.commit();
		  
		  String dat=gs.toJson(scmsg);
		  return dat;
	  }  
   
   }
   

/**
 * 
 * @author Administrator
 * ��½��Ϣ
 */
class CSloginMsg{
	public int name;
	public String psd;
}

/**
 * ��½�ظ�����Ϣ������Ȩ�޷�����Ϣ��
 */
class SCupdateAll{
	public sysuser sysu;
	public List<invoice> invs;
	public List<sysuser> sysusers;
	public List<odo> odos;
	public List<loaddo> loaddos;
	public List<transport> tps;
	public List<customer> cus;
}

class invOp{
	String itype=msgType.invOp;
	int op;
	List<invoice> invs;
}

class sysOp{
	String itype=msgType.sysOp;
	int op;
	List<sysuser> user;
}

class odoOp{
	String itype=msgType.odoOp;
	int op;
	List<odo> user;
}

class tpsOp{
	String itype=msgType.tpsOp;
	int op;
	List<transport> tps;
}

class cusOp{
	String itype=msgType.cusOp;
	int op;
	List<customer> cus;
}

class lodOp{
	String itype=msgType.lodOp;
	int op;
	List<loaddo> lds;
}

class alret{
    String itype=msgType.alret;
	String msg; 
}





