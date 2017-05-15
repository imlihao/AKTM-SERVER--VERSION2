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
  	    //ע������
  	    messageProcess.cancelMsp(httpsession.hashCode());
    }
    
    /**
     * @param message  ���͵���Ϣ
     * @param session  ��ѡ
     */
    @OnMessage
    public void onMessage(String message, Session session){
    	  System.out.println("[server rec]:"+message);
    	  //TODO ��Ϣ����
    }
     
    
    /**
     * ��������ʱ����
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error){
        System.out.println("��������");
        error.printStackTrace();
    }
	/**
	 * 
	 * @param msg Ҫ���͵���Ϣ
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
