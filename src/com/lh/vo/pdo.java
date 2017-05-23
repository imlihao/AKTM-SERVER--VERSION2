package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.lh.define.common_status;

@Entity
public class pdo implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -6359062348689149176L;
	private String pdo_id;	
    //²Ù×÷Ô±
	long operator_id;
    long UTCtimeStamp;
    
    int pdo_status;
	int co_status=common_status.NORMAL;
	
    int good_num;
    String good_name;
	
	public int getGood_num() {
		return good_num;
	}
	public void setGood_num(int good_num) {
		this.good_num = good_num;
	}
	public String getGood_name() {
		return good_name;
	}
	public void setGood_name(String good_name) {
		this.good_name = good_name;
	}
	@Id
	public String getPdo_id() {
		return pdo_id;
	}
	public void setPdo_id(String pdo_id) {
		this.pdo_id = pdo_id;
	}
	public long getOperator_id() {
		return operator_id;
	}
	public void setOperator_id(long operator_id) {
		this.operator_id = operator_id;
	}
	public long getUTCtimeStamp() {
		return UTCtimeStamp;
	}
	public void setUTCtimeStamp(long uTCtimeStamp) {
		UTCtimeStamp = uTCtimeStamp;
	}
	public int getPdo_status() {
		return pdo_status;
	}
	public void setPdo_status(int pdo_status) {
		this.pdo_status = pdo_status;
	}
	public int getCo_status() {
		return co_status;
	}
	public void setCo_status(int co_status) {
		this.co_status = co_status;
	}
	
}
