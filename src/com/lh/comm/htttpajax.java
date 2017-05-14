package com.lh.comm;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

/**
 * Servlet implementation class htttpajax
 */
@WebServlet("/htttpajax")
public class htttpajax extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public htttpajax() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    
		System.out.println( request.getParameter("itype"));
		System.out.println( request.getParameter("data"));
		response.setHeader("Access-Control-Allow-Origin", "*");
		
		String msgBack=messageProcess.getMsp(request.getSession().hashCode()).process(request.getParameter("itype"),  request.getParameter("data"));
		
		if(msgBack==null){
			return;
		}
		//TODO 消息处理
		response.getWriter().write(msgBack);
		response.getWriter().flush();
	}
	
	/**
	 * 解析数据为json
	 * @param request
	 * @return json 
	 */
	private String readJSONString(HttpServletRequest request){
		StringBuffer json = new StringBuffer();
		String line = null;
		BufferedReader reader;
		try {
			reader = request.getReader();
			while((line = reader.readLine()) != null) {
				json.append(line);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	
        return json.toString();
	}
}
