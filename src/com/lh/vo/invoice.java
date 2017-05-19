package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.lh.define.common_status;

@Entity
public class invoice implements Serializable{
	private static final long serialVersionUID = 6166832924248446682L;
	String INV_ID;
	
	//货物信息
    int good_num;
    String good_name;  
    int good_identifier;
    
    //发送者信息
    String sender_name;
    int sender_ID;
    String sender_phone;
    
	long UTCTimeStamp;
	
	//接受者信息
    String receiver_name;
    String receiver_phone;
    String receiver_addr;
    
    //操作员ID 外键
    long opid;
   
	//花费
    int cost;
    
    int co_status=common_status.NORMAL;
    int inv_status;
    
    public int getCo_status() {
		return co_status;
	}
	public void setCo_status(int co_status) {
		this.co_status = co_status;
	}
	public int getInv_status() {
		return inv_status;
	}
	public void setInv_status(int inv_status) {
		this.inv_status = inv_status;
	}
	
	/**
	 * @GeneratedValue(generator = "uuid")
     * @GenericGenerator(name = "uuid", strategy = "uuid")
	 * */
	
	@Id
	public String  getINV_ID() {
		return INV_ID;
	}
	public void setINV_ID(String iNV_ID) {
		INV_ID = iNV_ID;
	}
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

	public String getSender_name() {
		return sender_name;
	}
	public void setSender_name(String sender_name) {
		this.sender_name = sender_name;
	}
	public int getSender_ID() {
		return sender_ID;
	}
	public void setSender_ID(int sender_ID) {
		this.sender_ID = sender_ID;
	}
	public String getSender_phone() {
		return sender_phone;
	}
	public void setSender_phone(String sender_phone) {
		this.sender_phone = sender_phone;
	}
	public long getUTCTimeStamp() {
		return UTCTimeStamp;
	}
	public void setUTCTimeStamp(long uTCTimeStamp) {
		UTCTimeStamp = uTCTimeStamp;
	}
	public String getReceiver_name() {
		return receiver_name;
	}
	public void setReceiver_name(String receiver_name) {
		this.receiver_name = receiver_name;
	}
	public String getReceiver_phone() {
		return receiver_phone;
	}
	public void setReceiver_phone(String receiver_phone) {
		this.receiver_phone = receiver_phone;
	}
	public String getReceiver_addr() {
		return receiver_addr;
	}
	
	public void setReceiver_addr(String receiver_addr) {
		this.receiver_addr = receiver_addr;
	}
	
	public int getCost() {
		return cost;
	}
	
	public void setCost(int cost) {
		this.cost = cost;
	}
	
    public int getGood_identifier() {
			return good_identifier;
		}
    public void setGood_identifier(int good_identifier) {
			this.good_identifier = good_identifier;
		}
    
    
    public long getOpid() {
		return opid;
	}
	public void setOpid(long opid) {
		this.opid = opid;
	}
}
