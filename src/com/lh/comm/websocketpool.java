package com.lh.comm;

import java.util.HashSet;
import java.util.Iterator;
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
  
  
  /**
   * 
   * @param json
   */
  public static void sendAllexcpMe(String json){  //TODO �����԰����Լ�	  
	 Iterator<websocket> it= pool.iterator();
	 while(it.hasNext()){
		 it.next().sendMessage(json);
	 }
  }
}
