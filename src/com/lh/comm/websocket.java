package com.lh.comm;

import java.io.IOException;

import javax.servlet.http.HttpSession;
import javax.websocket.EndpointConfig;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
/**
 * @author Administrator
 *
 */
@ServerEndpoint(value="/websocket",configurator=getHttpSessionConfig.class)
public class websocket{
	private Session session;
	private HttpSession httpsession;
	
    @OnOpen
	public void onOpen(Session session,EndpointConfig ec){ 	
       	this.session=session;
       	this.httpsession=(HttpSession) ec.getUserProperties().get(HttpSession.class.getName());
       	websocketpool.addsocket(this);
	}
	
    @OnClose
    public void onClose(){
    	websocketpool.delsocket(this);
  	    //注销服务
  	    messageProcess.cancelMsp(httpsession.hashCode());
    }
    
    /**
     * @param message  发送的信息
     * @param session  可选
     */
    @OnMessage
    public void onMessage(String message, Session session){
    	  System.out.println("[server rec]:"+message);
    	  //TODO 消息处理
    }
     
    
    /**
     * 发生错误时调用
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error){
        System.out.println("发生错误");
        error.printStackTrace();
    }
	/**
	 * 
	 * @param msg 要发送的信息
	 */
	public void sendMessage(String msg){
		try {
			System.out.println("[server send]:"+msg);
			this.session.getBasicRemote().sendText(msg);
		} catch (IOException e) {
			e.printStackTrace();
			this.onClose();
		}
	}
	 
}
