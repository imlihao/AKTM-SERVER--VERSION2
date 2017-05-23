package com.lh.daoImp;

import com.lh.dao.dao_customer;
import com.lh.dao.dao_invoice;
import com.lh.dao.dao_loaddo;
import com.lh.dao.dao_odo;
import com.lh.dao.dao_pdo;
import com.lh.dao.dao_sysuser;
import com.lh.dao.dao_transport;

public class daoFactory {
   public static dao_customer getCustomerDao(){
	   return new customerDaoImp();
   }
   
   public static dao_sysuser getSysuserDao(){
	   return new sysuserDaoImp();
   }
   public static dao_invoice getInvoiceDao(){
	   return new InvoiceDaoImp();
   }
   public static dao_loaddo getloaddoDao(){
	   return new loaddoDaoImp();
   }
   public static dao_odo getodoDao(){
	   return new odoDaoImp();
   }
   public static dao_transport gettransportDao(){
	   return new transportDaoImp();
   }
   
   public static dao_pdo getpdoDao(){
	   return new pdoDaoImp();
   }
}
