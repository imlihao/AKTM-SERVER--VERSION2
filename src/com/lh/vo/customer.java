package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.lh.define.common_status;

/**
 * 
 * @author Administrator
 *
 */

@Entity
public class customer implements Serializable {

	private static final long serialVersionUID = -8729228678394328850L;

	int cus_id;
	int sender_ID;
	String sender_name;
	String sender_phone;
	String company;
	String addr;
	// ±êÖ¾Î»
	int co_status=common_status.NORMAL;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getCus_id() {
		return cus_id;
	}

	public void setCus_id(int cus_id) {
		this.cus_id = cus_id;
	}
	public int getCo_status() {
		return co_status;
	}

	public void setCo_status(int co_status) {
		this.co_status = co_status;
	}
	
	public int getSender_ID() {
		return sender_ID;
	}

	public void setSender_ID(int sender_ID) {
		this.sender_ID = sender_ID;
	}

	public String getSender_name() {
		return sender_name;
	}

	public void setSender_name(String sender_name) {
		this.sender_name = sender_name;
	}

	public String getSender_phone() {
		return sender_phone;
	}

	public void setSender_phone(String sender_phone) {
		this.sender_phone = sender_phone;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

}
