package example.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import DB.DBQueries;
import DB.DBConsts;
import example.model.User;
import example.AppConstants;



/**
 * Servlet implementation class UserEntranceServlet
 */
@WebServlet("/UserRegisterServlet")
public class UserRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 //final ServletContext sc = getServletContext();
	        //sc.getRequestDispatcher("/welcome.html").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	
		
		final String name = request.getParameter("name");
		final String surname = request.getParameter("surname");
		final String password = request.getParameter("password");
		final String nickname = request.getParameter("nickname");
		final String desc = request.getParameter("description");
        final String address = request.getParameter("addr");
        final String phoneNumber = request.getParameter("phone");
        final String email = request.getParameter("email");
        final String photo = request.getParameter("photo");
        if (email != null && name != null &&
                !email.isEmpty() && !name.isEmpty() ) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        }
	try
		{
			
		Context context = new InitialContext();
	//	BasicDataSource ds = (BasicDataSource)context.lookup(
		//		getServletContext().getInitParameter(AppConstants.DB_DATASOURCE));
		BasicDataSource ds1 = (BasicDataSource)context.lookup(
				getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
		Connection conn = ds1.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(DBQueries.INSERT_USER_DETAILS);
			pstmt.setString(1,email);
			pstmt.setString(2,name);
			pstmt.setString(3,address);
			pstmt.setString(4,phoneNumber);
			pstmt.setString(5,password);
			pstmt.setString(6,nickname);
			pstmt.setString(7,desc);
			pstmt.setString(8,photo);
			
			pstmt.executeUpdate();
			System.out.println("SUCCESS");
		}
		catch ( SQLException | NamingException e)
		{
			System.out.println("FAILED");
			//log error 
			//cntx.log("Error during database initialization",e);
			e.printStackTrace();
		}
		
        // just to illustrate the use of Json in Servlets, we return the input to the client
        /*final JSONObject jsonObject = new JSONObject();
        try {
	        jsonObject.put("nickname", nickname);
	        jsonObject.put("password", password);
	        jsonObject.put("name", name);
	        jsonObject.put("surname", surname);
	        jsonObject.put("addr", address);
	        jsonObject.put("phone", phoneNumber);
	        jsonObject.put("email", email);
        }
        catch (Exception e) {
        	e.printStackTrace();
        }*/


        response.setContentType("application/json");
        // Get the printwriter object from response to write the required json object to the output stream
        final PrintWriter out = response.getWriter();
        // Assuming your json object is **jsonObject**, perform the following, it will return your json object
      //  out.print(jsonObject.toString());
    }
	}






