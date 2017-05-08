package com.lh.test;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.junit.Test;








import com.lh.dao.baseDao;
import com.lh.daoImp.InvoiceDaoImp;
import com.lh.daoImp.baseDaoImp;
import com.lh.dbc.hibernateFactory;
import com.lh.vo.invoice;
import com.lh.vo.odo;

public class testDao {
   public void testd(){
	Session s=hibernateFactory.getSession();
	s.beginTransaction();
	invoice inv=new invoice();
	inv.setGood_name("´óÉùËµ°®°¡Äã");
	
	odo od=new odo();
	od.setOdo_id("bbcabe4d5bdc11e0015bdc11e2ba0000");
	s.save(od);
	s.getTransaction().commit();
	s.close();
   }
	
	public void testS(){
	  Session s=hibernateFactory.getSession();
	  s.beginTransaction();
	  invoice inv=new invoice();
      inv.setINV_ID("bbcabe4d5bdc11e0015bdc11e2ba0000");
	  Criteria c=s.createCriteria(invoice.class);
	  c.add(Restrictions.eqOrIsNull("INV_ID", inv.getINV_ID()));	  
	  List<invoice> list=c.list();
	  
	  for( invoice inv1:list){
		  System.out.print(inv1.getINV_ID()+":"+inv1.getGood_name());
		  
	  }
	  s.close();
	}
	
	public invoice getInvice(){
		   invoice inv=new invoice();
	       inv.setGood_name("´óÉùËµ°®°¡Äã");
	       return inv;
		
	}

	public void BaseDaoImpTest() {
       baseDao b=new baseDaoImp<invoice, String>();
       b.save(getInvice());
       b.commit();
	}
	
	@Test
	public void BaseDaoImpTest2() {
	   InvoiceDaoImp b=new InvoiceDaoImp();
       List<invoice> l=b.searchAll();
       for(invoice inv:l){    	   
    	   System.out.println(inv.getINV_ID());
       }       
       invoice inv2=b.search("bbcabe4d5be71f12015be71f15c10000");
       inv2.setCost(2);
       b.commit();      
	}
	
}
