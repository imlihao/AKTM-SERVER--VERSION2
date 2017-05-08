package com.lh.dao;

import java.io.Serializable;
import java.util.List;
/**
 * 
 * @author Administrator
 *
 * @param <E> bean����
 * @param <PK> ����
 */
public interface baseDao<E extends Serializable,PK extends Serializable> {
	   public List<E> searchAll();

	   public E search(PK id);
	   /**
	    * @param uuid
	    * @return ��ɾ��
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
	    * ǿ��ˢ�£��������ݣ������������ύ�����
	    */
	   public void flush();
	   
	   /**
	    * �����ύ
	    */
	   public void commit();
}
