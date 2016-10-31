package cn.itcast.servlet;

import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

public class MyServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String userName = request.getParameter("userName");
		String words = request.getParameter("words");
		if (userName==""||words=="") {
			response.sendRedirect("/personweb/index.html");
		} else {
			try {
				storage(userName, words);
			} catch (Exception e) {
				
				e.printStackTrace();
			}
			//response.setStatus(303);
			//response.setHeader("location", "/personweb/index.html");
			response.sendRedirect("/personweb/refresh.html");
		}
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}
	/**
	 * 将客户端请求的信息数据写入xml文件
	 * dom4j解析方式进行读写
	 * @param userName
	 * @param words
	 * @throws Exception
	 */
	public void storage(String userName,String words) throws Exception {
		Date d = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		String date = sdf.format(d);
		SAXReader reader = new SAXReader();
		Document document = reader.read("../webapps/personweb/xml/data.xml");
		Element root = document.getRootElement();
		Element user = root.addElement("user");
		Element username = user.addElement("username");
		username.setText(userName);
		Element userwords = user.addElement("userwords");
		userwords.setText(words);
		Element time = user.addElement("time");
		time.setText(date);
		OutputFormat prettyFormat = OutputFormat.createPrettyPrint();
		prettyFormat.setEncoding("UTF-8");
		XMLWriter writer = new XMLWriter(new FileOutputStream("../webapps/personweb/xml/data.xml"), prettyFormat);
		writer.write(document);
		writer.close();
	}

}
