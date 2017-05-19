package com.lh.test;

import java.util.List;
import java.util.UUID;

import com.google.gson.GsonBuilder;
import com.lh.define.msgType;
import com.lh.vo.customer;

public class testn {
    private static String str="{itype"+":"+"cusOp"+","+"data"+":"+"{\"itype\":\"cusOp\",\"op\":4}";
	public static void main(String[] args) {
	System.out.print(UUID.randomUUID());
	}

}

class msgBase{
  String itype;
  String data;	
}
class cusOp{
	String itype=msgType.cusOp;
	int op;
	List<customer> cus;
}