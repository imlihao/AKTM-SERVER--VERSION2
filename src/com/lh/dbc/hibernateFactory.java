package com.lh.dbc;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class hibernateFactory {
	   private static final Configuration cfg;
	     private static final SessionFactory sef;
	     static{
	    	 cfg=new Configuration().configure();
	    	 sef=cfg.buildSessionFactory();
	     }
	     public static Session getSession(){
	    	 
	    	 return sef.openSession();
	     }
	     
}