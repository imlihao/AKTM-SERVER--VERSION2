package com.lh.vo;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.lh.define.common_status;
/**
 * 
 * @author Administrator
 * ���ⵥ
 */
@Entity
public class odo  implements Serializable{
	private static final long serialVersionUID = -2593030526299927301L;
	
	private String odo_id;
	
//	//ȡ����Ϣ
//    int good_num;
//    String good_name;  
//    int good_identifier;
    
    //����Ա
    int operator_id;
    long UTCtimeStamp;
    
    int odo_status;
	int co_status=common_status.NORMAL;
	
	@Id
	public String getOdo_id() {
		return odo_id;
	}
	public void setOdo_id(String odo_id) {
		this.odo_id = odo_id;
	}

	public int getOperator_id() {
		return operator_id;
	}
	public void setOperator_id(int operator_id) {
		this.operator_id = operator_id;
	}
	public long getUTCtimeStamp() {
		return UTCtimeStamp;
	}
	public void setUTCtimeStamp(long uTCtimeStamp) {
		UTCtimeStamp = uTCtimeStamp;
	}
	public int getOdo_status() {
		return odo_status;
	}
	public void setOdo_status(int odo_status) {
		this.odo_status = odo_status;
	}
	public int getCo_status() {
		return co_status;
	}
	public void setCo_status(int co_status) {
		this.co_status = co_status;
	}
	
	
}
