package com.lh.comm;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpServletRequest;
/**
 * 
 * @author Administrator
 *
 */
@WebListener
public class reqlistener implements ServletRequestListener {

	@Override
	public void requestDestroyed(ServletRequestEvent arg0) {
		// TODO 
		
	}

	@Override
	public void requestInitialized(ServletRequestEvent arg0) {
		//�����е�req�������session
		((HttpServletRequest)arg0.getServletRequest()).getSession();
	}

}
