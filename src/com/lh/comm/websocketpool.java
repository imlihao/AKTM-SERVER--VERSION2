package com.lh.comm;

import java.util.HashSet;
import java.util.Set;

public class websocketpool {
  private static Set<websocket> pool=new HashSet<websocket>();
  
  public static void addsocket(websocket ws){	  
	  pool.add(ws);
	  System.out.println("���û�����,��������Ϊ��"+onlinenum());
  }
  
  public static void delsocket(websocket ws){
	  pool.remove(ws);
	  System.out.println("�û��˳�,��������Ϊ��"+onlinenum());
  }
  
  public static int onlinenum(){
	  return pool.size();
  }
  
  public static void sendAll(){
	  //TODO 
	  
  }
}
