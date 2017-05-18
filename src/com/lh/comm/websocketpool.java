package com.lh.comm;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class websocketpool {
  private static Set<websocket> pool=new HashSet<websocket>();
  
  public static void addsocket(websocket ws){	  
	  pool.add(ws);
	  System.out.println("新用户加入,在线人数为："+onlinenum());
  }
  
  public static void delsocket(websocket ws){
	  pool.remove(ws);
	  System.out.println("用户退出,在线人数为："+onlinenum());
  }
  
  public static int onlinenum(){
	  return pool.size();
  }
  
  
  /**
   * 
   * @param json
   */
  public static void sendAllexcpMe(String json){  //TODO 现在仍包括自己	  
	 Iterator<websocket> it= pool.iterator();
	 while(it.hasNext()){
		 it.next().sendMessage(json);
	 }
  }
}
