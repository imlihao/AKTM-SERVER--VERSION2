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

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
/**
 * @author Administrator
 *
 */
@ServerEndpoint(value="/websocket",configurator=getHttpSessionConfig.class)
public class websocket{
	private Session session;
	private HttpSession httpsession;
	
	public String getsessionid() {
		return httpsession.getId();
	}
    @OnOpen
	public void onOpen(Session session,EndpointConfig ec){ 	
       	this.session=session;
       	this.httpsession=(HttpSession) ec.getUserProperties().get(HttpSession.class.getName());
       	websocketpool.addsocket(this);
	}
	
    @OnClose
    public void onClose(){
    	websocketpool.delsocket(this);
  	    //TODO ע������,��ͦsession
  	   // messageProcess.cancelMsp(httpsession.getId());
    }
    
    /**
     * @param message  ���͵���Ϣ
     * @param session  ��ѡ
     */
    @OnMessage
    public void onMessage(String message){
    	//System.out.println("[session ws id]:"+this.httpsession.getId());
    	System.out.println("[ws rec]:"+message);
        msgBase mb=gs.fromJson(message, msgBase.class);
    	String returnMsg=messageProcess.getMsp(this.httpsession.getId()).process(mb.itype, mb.data);
    	if(returnMsg!=null){
    		this.sendMessage(returnMsg);
    	}
    }
    private Gson gs=new GsonBuilder().create();
    
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

class msgBase{
  String itype;
  String data;	
}

