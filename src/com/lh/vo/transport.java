package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.lh.define.common_status;

/**
 * 
 * @author Administrator
 * ‘ÀÀÕµ•
 */
@Entity
public class transport implements Serializable{

	private static final long serialVersionUID = 5934802217597116630L;
	
	private String  transport_id;
    private long UTCTimeStamp;
    
	private int diver_id;
	private int diver_name;
    private int auto_id;
	
    private int transport_status;
	private int co_status=common_status.NORMAL;
	
	@Id
	public String getTransport_id() {
		return transport_id;
	}
	public void setTransport_id(String transport_id) {
		this.transport_id = transport_id;
	}
	public long getUTCTimeStamp() {
		return UTCTimeStamp;
	}
	public void setUTCTimeStamp(long uTCTimeStamp) {
		UTCTimeStamp = uTCTimeStamp;
	}
	public int getDiver_id() {
		return diver_id;
	}
	public void setDiver_id(int diver_id) {
		this.diver_id = diver_id;
	}
	public int getDiver_name() {
		return diver_name;
	}
	public void setDiver_name(int diver_name) {
		this.diver_name = diver_name;
	}
	public int getAuto_id() {
		return auto_id;
	}
	public void setAuto_id(int auto_id) {
		this.auto_id = auto_id;
	}
	public int getTransport_status() {
		return transport_status;
	}
	public void setTransport_status(int transport_status) {
		this.transport_status = transport_status;
	}
	public int getCo_status() {
		return co_status;
	}
	public void setCo_status(int co_status) {
		this.co_status = co_status;
	}
}
