package com.lh.daoImp;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.ObjectNotFoundException;
import org.hibernate.Session;

import com.lh.dao.baseDao;
import com.lh.dbc.hibernateFactory;

public class baseDaoImp<E extends Serializable,PK extends Serializable> implements baseDao<E, PK>{    
	private Class<E> entityClass;
	private Session session=null;
	public baseDaoImp() {
	  	this.entityClass=null;		  
	  	Class c=getClass();
	  	Type t=c.getGenericSuperclass();
	  	if(t instanceof ParameterizedType){
	  		Type[] p=((ParameterizedType)t).getActualTypeArguments();
	  		this.entityClass=(Class<E>)p[0];
	  	}
	  	if(this.session==null){
	  		this.session=hibernateFactory.getSession();
	  		this.session.beginTransaction();
	  	}
	  	if(this.entityClass==null){
	  		System.out.print("WORNING: 泛型E的CLASS没获取到");	  		
	  	}
	}

	@Override
	public List<E> searchAll() {
		session.toString(); 		
		Criteria c=session.createCriteria(entityClass);
		return c.list();
	}

	@Override
	public E search(PK id) {
		//不适用延迟加载
		return session.get(entityClass,id);
	}

	@Override
	public void del(PK id) {
		E e=this.session.load(entityClass, id);
		session.delete(e);
	}

	@Override
	public void save(E obj) {
		session.save(obj);		
	}

	@Override
	@Deprecated
	public void saveorupdate(E obj) {
		session.saveOrUpdate(obj);
		
	}

	@Override
	@Deprecated
	public void update(E obj) {
		session.update(obj);
		
	}

	@Override
	public int HQLUpdate(String HQL) {
		return session.createQuery(HQL).executeUpdate();		
	}

	@Override
	public void flush() {
		session.flush();
		
	}

	@Override
	public void commit() {
		session.getTransaction().commit();
		session.close();
	}
}
