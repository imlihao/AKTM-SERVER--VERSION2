package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
/**
 * 
 * @author Administrator
 * ÏµÍ³½ÇÉ«
 */
@Entity
public class sysuser implements Serializable{

	private static final long serialVersionUID = 7914000255112201353L;
    
	private int user_id;
	private long phone;
	
	private int roletype;
	private String psd;
	private String name;
	
	private String autoid;
	
	private boolean power_odo; 
	private boolean power_loaddo; 
	private boolean power_user; 
	private boolean power_dispitch;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
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
	
	
}
