package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
/**
 * 
 * @author Administrator
 * 装车信息单
 */
@Entity
public class loaddo implements Serializable{

   private static final long serialVersionUID = 5931619466996163481L;
   
   private String loaddo_id;
   private int diver_id;
   
   private String autoid;
   private long UTCTimeStamp;
   
   private int loaddo_status;
   private int co_status;
   
@Id   
public String getLoaddo_id() {
	return loaddo_id;
}
public void setLoaddo_id(String loaddo_id) {
	this.loaddo_id = loaddo_id;
}
public int getDiver_id() {
	return diver_id;
}
public void setDiver_id(int diver_id) {
	this.diver_id = diver_id;
}
public String getAutoid() {
	return autoid;
}
public void setAutoid(String autoid) {
	this.autoid = autoid;
}
public long getUTCTimeStamp() {
	return UTCTimeStamp;
}
public void setUTCTimeStamp(long uTCTimeStamp) {
	UTCTimeStamp = uTCTimeStamp;
}
public int getLoaddo_status() {
	return loaddo_status;
}
public void setLoaddo_status(int loaddo_status) {
	this.loaddo_status = loaddo_status;
}
public int getCo_status() {
	return co_status;
}
public void setCo_status(int co_status) {
	this.co_status = co_status;
}
   
   
	
}
