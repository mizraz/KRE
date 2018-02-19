package example.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import DB.DBQueries;
import example.AppConstants;
import example.model.User;

/**
 * Servlet implementation class loginServlet
 */
@WebServlet(urlPatterns = { 
		"/loginServlet"
})
public class loginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public loginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		//Cookie[] sessionCookie = null;
		//sessionCookie = request.getCookies();
		//if (sessionCookie == null) //if no session is open
		//{
		//	response.sendRedirect("http://localhost:8080/ExampleServletv3/KREbooks/registerANDlogin/login.html");
		//}
	//	else
		//{
			response.sendRedirect("http://localhost:8080/ExampleServletv3/KREbooks/registerANDlogin/login.html");
		//}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		
		//Cookie sessionCookie = null;
		String data = null;
		StringBuilder buffer = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;
		while ((line = reader.readLine()) != null)
		{
			buffer.append(line);
		}
		data = buffer.toString();
		
		
		Gson gson = new Gson();
		Type type = new TypeToken<User>(){}.getType();
		User users = gson.fromJson(data, type);
	
		
		int checkUser= 0;
		try
		{
			
			Context context = new InitialContext();
			BasicDataSource ds = (BasicDataSource)context.lookup(
					getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
			
			Connection conn = ds.getConnection();
			PreparedStatement pstmt;
			
			pstmt = conn.prepareStatement("SELECT * FROM USER_DETAILS WHERE user_nickname = '"+users.getUserNickname()+"' AND pwd = '"+users.getPwd() +"'");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next())
			{
				checkUser++;
			}
			rs.close();	
		}
		
		catch (SQLException | NamingException e)
		{
			getServletContext().log("Error: Connection to DB or SELECT command are not good", e);
			response.sendError(500);
		}
		System.out.println(checkUser);
		if (checkUser>0)
		{
			
			//sessionCookie = new Cookie("User:",users.getUserNickname());
			//sessionCookie.setMaxAge(60*60*24); //one day
			//response.addCookie(sessionCookie);
			PrintWriter writer = response.getWriter();
			writer.println(users.getEmail());
			writer.close();
		}
		else
			
		{
			
			PrintWriter writer = response.getWriter();
			writer.println("Failure");
			writer.close();
			
		}
	}

}
