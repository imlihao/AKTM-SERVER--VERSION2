package com.lh.test;

import org.junit.Test;

import com.lh.dao.dao_sysuser;
import com.lh.daoImp.daoFactory;
import com.lh.define.roletype;
import com.lh.vo.sysuser;

public class testdatainsert {
	@Test
    public void insertSysuser(){
    	dao_sysuser dao=daoFactory.getSysuserDao();
    	
       	sysuser op2=new sysuser();
    	op2.setUser_id(2013020102);
    	op2.setName("仓库管理员1");
    	op2.setPhone("13619155070");
    	op2.setRoletype(roletype.operator_Warehouse);
    	
    	op2.setPower_inv(true);
    	op2.setPower_user(true);
    	
    	op2.setPsd("123456");
    	dao.save(op2);
    	
    	sysuser su=new sysuser();
    	su.setUser_id(2013020103);
    	su.setName("李豪");
    	su.setPhone("13619155070");
    	su.setRoletype(roletype.sys);
    	su.setPower_dispitch(true);
    	su.setPower_loaddo(true);
    	su.setPower_user(true);
    	su.setPsd("123456");
    	dao.save(su);
    	
    	sysuser diver=new sysuser();
    	diver.setUser_id(2013020100);
    	diver.setName("潘子");
    	diver.setPhone("13619155070");
    	diver.setRoletype(roletype.diver);
    	diver.setPower_dispitch(true);
    	diver.setPower_loaddo(true);
    	diver.setPsd("123456");
    	diver.setAutoid("陕A46d75");
    	dao.save(diver);
    	
    	sysuser op=new sysuser();
    	op.setUser_id(2013020101);
    	op.setName("订单管理员1");
    	op.setPhone("13619155070");
    	op.setRoletype(roletype.operator_normal);
    	
    	op.setPower_inv(true);
    	op.setPower_user(true);
    	
    	op.setPsd("123456");
    	dao.save(op);
    	
 
    	dao.commit();    	
    }
    
    
}
