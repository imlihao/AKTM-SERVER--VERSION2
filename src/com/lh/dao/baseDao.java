package com.lh.dao;

import java.io.Serializable;
import java.util.List;
/**
 * 
 * @author Administrator
 *
 * @param <E> bean类型
 * @param <PK> 主键
 */
public interface baseDao<E extends Serializable,PK extends Serializable> {
	   public List<E> searchAll();

	   public E search(PK id);
	   /**
	    * @param uuid
	    * @return 软删除
	    */
	   public void del(PK id);
	   
	   public void save(E obj);
	   
	   /**
	    * 
	    * @param obj
	    */
	   public void saveorupdate(E obj);
	   
	   /**
	    * 
	    * @param obj 
	    */
	   public void update(E obj);
	   
	   /**
	    * HQL
	    * @param HQL
	    * @return 
	    */
	   public int HQLUpdate(String HQL);
	   
	   
	   /**
	    * 强制刷新，更新数据，否则在事务提交后更新
	    */
	   public void flush();
	   
	   /**
	    * 事务提交
	    */
	   public void commit();
}
