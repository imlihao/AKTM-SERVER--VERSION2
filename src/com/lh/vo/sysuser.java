package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.lh.define.common_status;
/**
 * 
 * @author Administrator
 * 系统角色
 */
@Entity
public class sysuser implements Serializable{

	private static final long serialVersionUID = 7914000255112201353L;
    
	private long user_id;
	private String phone;
	
	private int roletype;
	private String psd;
	private String name;
	
	private String autoid;
	
	
	private int co_status=common_status.NORMAL;
	
	private boolean power_inv=false;
	private boolean power_odo=false; 
	private boolean power_loaddo=false; 
	private boolean power_user=false; 
	private boolean power_dispitch=false;
	
	@Id
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public int getCo_status() {
		return co_status;
	}
	public void setCo_status(int co_status) {
		this.co_status = co_status;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getRoletype() {
		return roletype;
	}
	public void setRoletype(int roletype) {
		this.roletype = roletype;
	}
	public String getPsd() {
		return psd;
	}
	public void setPsd(String psd) {
		this.psd = psd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAutoid() {
		return autoid;
	}
	public void setAutoid(String autoid) {
		this.autoid = autoid;
	}
	public boolean isPower_odo() {
		return power_odo;
	}
	public void setPower_odo(boolean power_odo) {
		this.power_odo = power_odo;
	}
	public boolean isPower_loaddo() {
		return power_loaddo;
	}
	public void setPower_loaddo(boolean power_loaddo) {
		this.power_loaddo = power_loaddo;
	}
	public boolean isPower_user() {
		return power_user;
	}
	public void setPower_user(boolean power_user) {
		this.power_user = power_user;
	}
	public boolean isPower_dispitch() {
		return power_dispitch;
	}
	public void setPower_dispitch(boolean power_dispitch) {
		this.power_dispitch = power_dispitch;
	}
	
	/**
	 * 订单权限
	 */
	public boolean isPower_inv() {
		return power_inv;
	}
	/**
	 * 订单权限
	 * @param power_inv
	 */
	public void setPower_inv(boolean power_inv) {
		this.power_inv = power_inv;
	}
	
}
