package com.lh.comm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.lh.dao.dao_customer;
import com.lh.dao.dao_invoice;
import com.lh.dao.dao_loaddo;
import com.lh.dao.dao_odo;
import com.lh.dao.dao_sysuser;
import com.lh.dao.dao_transport;
import com.lh.daoImp.daoFactory;
import com.lh.define.common_status;
import com.lh.define.inv_status;
import com.lh.define.msgType;
import com.lh.define.operator;
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
	
   
   private static Map<String, messageProcess> msps=new HashMap<String, messageProcess>();
   
   Gson gs=new GsonBuilder().create();
   //验证人物
   private sysuser sys;
   
   
   
   /**
    * 注销服务
    * @param key session标示符
    */
   public static void cancelMsp(String key){
	   msps.remove(key);
   }
   
   /**
    * 
    * @param key 获取session对应的服务
    * @return 消息服务
    */
   public static messageProcess getMsp(String key){
	   messageProcess msp=msps.get(key);
	   if(msp==null){
		   msp=new messageProcess();
		   msps.put(key,msp);
	   }
	   return msp;
   }	
		   
   /**
    * 消息处理主类型
    * @param itype
    * @param jsonData
    * @return
    */
   public String process(String itype,String jsonData){
	   String json=null;
	   if(itype.equals(msgType.login)){
		   
		   return login(jsonData);
	   }else if(sys==null){
		   //TODO  跳转到登陆界面
		   System.out.println("未登录非法消息");
		   return logout();
	   }
       System.out.println("[USER:"+sys.getName()+"]:"+itype);   
	   switch(itype){ 
	      case msgType.SCupdateAll:
	    	  json=SCupdateAll();
	    	  break;
	      case msgType.cusOp:
	    	  json=cusOp(jsonData);
	    	  break;
	      case msgType.invOp:
	    	  json=invOp(jsonData);
	    	  break;
	      case msgType.lodOp:
	    	  json=lodOp(jsonData);
	    	  break;
	      case msgType.odoOp:
	    	  json=odoOp(jsonData);
	    	  break;
	      case msgType.sysOp:
	    	  json=sysOp(jsonData);
	    	  break;
	      case msgType.tpsOp:
	    	  json=tpsOp(jsonData);
	    	  break;
	      default:
	    	  json=onError(itype);
	    	  break;
	   }
	   return json;
   } 
   
   /**
    * 错误处理
    * @param itype 
    */
   public String onError(String itype){
	   alret scmsg=new alret();
	   System.out.println("类型对比错误:"+itype);	   
	   return gs.toJson(scmsg);
   }
   
   /**
    * 
    * @return logoutmsg
    */
   public String logout(){
	   return gs.toJson(new logout());
   }
   
   /**
    *  登陆处理
    * @param json
    * @return suc 返回对应的所有信息
    * 
    */
   private String login(String json){	       
		  CSloginMsg msg=gs.fromJson(json,CSloginMsg.class);
		  sysuser us=daoFactory.getSysuserDao().search(msg.name);
		  if(us==null||!us.getPsd().equals(msg.psd)){
			  alret al=new alret();
			  al.msg="账号或密码错误"; 
			  return gs.toJson(al);			  
		  };
		  sys=us;
		  System.out.println(sys.getName());
		  //回信
		  CSloginMsg scmsg=new CSloginMsg();
		  return gs.toJson(scmsg);
	  }  
      
      /**
       *请求所有数据
       */
      public String SCupdateAll(){
    	  //TODO　根据权限分配
    	  //回信
		  SCupdateAll scmsg=new SCupdateAll();	  
		  scmsg.sysu=this.sys;
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
      
      private void datarefreshall(){
    	  websocketpool.sendAllexcpMe(SCupdateAll());    	  
      }
      
      /**
       * 订单操作
       * @param json
       * @return null
       */
      private String invOp(String json){
    	  if(!sys.isPower_inv())return null;
    	  invOp invop=gs.fromJson(json, invOp.class);
    	  dao_invoice invdao=daoFactory.getInvoiceDao();
    	  //增加
    	  if(invop.op==operator.add){
    	     for(invoice inv:invop.invs){
    	         inv.setUTCTimeStamp(System.currentTimeMillis());
    	         inv.setOpid(sys.getUser_id());
    	         inv.setInv_status(inv_status.chuku);
    	    	 invdao.save(inv);
    	     }  
    	  }else if(invop.op==operator.del){
    		  for(invoice inv:invop.invs){//软删除
    			 invoice orm=invdao.search(inv.getINV_ID());
     	    	 if(orm!=null){
     	    		orm.setCo_status(common_status.DELETE);
     	    	 }
     	    	 
     	     } 
    	  }else if(invop.op==operator.update){
    		  for(invoice inv:invop.invs){
    			 invoice orm=invdao.search(inv.getINV_ID());
      	    	 if(orm!=null){
                    invdao.update(orm);
      	    	 } 
      	    	 
      	      } 
     	  }
    	  invdao.commit();
    	  datarefreshall();	  
    	  return null;
      }
      
       /**
        * 系统用户
        * @param json
        * @return
        */
      private String sysOp(String json){
    	  if(!sys.isPower_inv())return null;
    	  sysOp sysOp=gs.fromJson(json, sysOp.class);
    	  dao_sysuser sysdao=daoFactory.getSysuserDao();
    	  //增加
    	  if(sysOp.op==operator.add){
    	     for(sysuser sys:sysOp.user){
    	   
    	         if(sysdao.search(sys.getUser_id())==null){
    	    	  sysdao.save(sys);
    	    	 }
    	     }  
    	  }else if(sysOp.op==operator.del){
    		  for(sysuser sys:sysOp.user){//软删除
    			 sysuser orm=sysdao.search(sys.getUser_id());
     	    	 if(orm!=null){
     	    		  datarefreshall();	
     	    	 }
     	    	 
     	     } 
    	  }else if(sysOp.op==operator.update){
    		  for(sysuser sys:sysOp.user){
    			 sysuser orm=sysdao.search(sys.getUser_id());
      	    	 if(orm!=null){
                    sysdao.update(orm);
      	    	 } 
      	    	 
      	      } 
     	  }
    	  sysdao.commit();
    	  datarefreshall();		  
    	  return null;
      }
      
      /**
       * 出库单操作
       * @param json
       * @return
       */
      private String  odoOp(String json){
    	  odoOp odop=gs.fromJson(json, odoOp.class);
    	  dao_odo odoDao=daoFactory.getodoDao();
    	  if(odop.op==operator.add){
    		  for(odo od:odop.odos){
    			  odoDao.save(od);    			  
    		  }
    	  }else if(odop.op==operator.del){
    		  
        	  for(odo od:odop.odos){
        			  odoDao.search(od.getOdo_id());
        			  od.setCo_status(common_status.DELETE);        			
        	   }  
    		  
    	  }else if(odop.op==operator.update){
    		  
        		  for(odo od:odop.odos){
        			  odoDao.update(od);       			
        	      }  
    		  
    	  }	
    	  odoDao.commit();
    	  datarefreshall();	
    	  return null;
      }
      
      private String tpsOp(String json){
    	tpsOp tpsop=gs.fromJson(json, tpsOp.class);
    	
    	dao_transport tpsDao=daoFactory.gettransportDao();
    	if(tpsop.op==operator.add){
    		for(transport tps:tpsop.tps){
    		   tps.setUTCTimeStamp(System.currentTimeMillis());
    		   tpsDao.save(tps);
    		}
    	}else  if(tpsop.op==operator.del){
    		for(transport tps:tpsop.tps){
     		   transport obj=tpsDao.search(tps.getTransport_id());
     		   obj.setCo_status(common_status.DELETE);
     		}
     	}else  if(tpsop.op==operator.update){
    		for(transport tps:tpsop.tps){
      		   tpsDao.update(tps);
      		}
      	}
    	
        tpsDao.commit();
        datarefreshall();	
		return null;   	  
      }
      
      private String cusOp(String json){
    	cusOp cop=gs.fromJson(json,cusOp.class); 
    	dao_customer cusDao=daoFactory.getCustomerDao();
    	
    	if(cop.op==operator.add){
    		for(customer cus:cop.cus){
    			cusDao.save(cus);
    		}   		
    	}else  if(cop.op==operator.del){
    		for(customer cus:cop.cus){
    			customer obj=cusDao.search(cus.getCus_id());
    			System.out.print(obj+""+cus.getCus_id());
    			if(obj!=null){
    				System.out.print("@@");
    				obj.setCo_status(common_status.DELETE);
    			}
    		}   		
    	}else if(cop.op==operator.update){
    		for(customer cus:cop.cus){
    			cusDao.update(cus);
    		}   		
    	}
    	cusDao.commit();
    	  datarefreshall();	
		return null;
    	  
      }
      
      private String lodOp(String json){
    	  dao_loaddo loadDao=daoFactory.getloaddoDao();
    	  lodOp lodop=gs.fromJson(json, lodOp.class);
    	  if(lodop.op==operator.add){
    		  for(loaddo ldo:lodop.lds){
    			  ldo.setUTCTimeStamp(System.currentTimeMillis());
    			  loadDao.save(ldo);
    		  }
    	  }else if(lodop.op==operator.del){
    		  for(loaddo ldo:lodop.lds){
    			  loaddo obj=loadDao.search(ldo.getLoaddo_id());
    			  if(obj!=null){
    				  obj.setCo_status(common_status.DELETE);
    			  }
    		  }
    	  }else if(lodop.op==operator.update){
    		  for(loaddo ldo:lodop.lds){
    			  loadDao.update(ldo);
    		  }
    	  }
        loadDao.commit();  
        datarefreshall();	
		return null;   	  
      }
   }




/**
 * 
 * @author Administrator
 * 登陆消息
 */
class CSloginMsg{
	String itype=msgType.login;
	public long name;
	public String psd;
}


/**
 * 
 * @author Administrator
 * 登出消息
 */
class logout{
	String itype=msgType.logout;
}
/**
 * 登陆回复的消息，根据权限分配信息；
 */
class SCupdateAll{
	String itype=msgType.SCupdateAll;
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
	List<odo> odos;
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





