package com.lh.comm;

import javax.servlet.http.HttpSession;
import javax.websocket.HandshakeResponse;
import javax.websocket.server.HandshakeRequest;
import javax.websocket.server.ServerEndpointConfig;
import javax.websocket.server.ServerEndpointConfig.Configurator;

public class getHttpSessionConfig  extends Configurator{
	
    @Override
	public void modifyHandshake(ServerEndpointConfig sec,
            HandshakeRequest request, HandshakeResponse response){
    	if(request.getHttpSession()==null){
    	   System.out.println("WORNING:cant get httpsession by handshake");
    	   return;
    	}
    	HttpSession hs=(HttpSession)request.getHttpSession();
    	sec.getUserProperties().put(HttpSession.class.getName(), hs);   	
    }
}
