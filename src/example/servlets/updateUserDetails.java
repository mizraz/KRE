package example.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.http.Cookie;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
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
 * Servlet implementation class UserRegisterServlet
 */
@WebServlet(urlPatterns = { 
		"/updateUserDetails"
})
public class updateUserDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	public updateUserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Context context;
		try {
			context = new InitialContext();
			BasicDataSource ds = (BasicDataSource)context.lookup(
					getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
			Connection conn = ds.getConnection();
			
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
    		getServletContext().log("Error while closing connection", e);
    		response.sendError(500);//internal server error
    	}
		
		
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		StringBuffer jb = new StringBuffer();
		String line = null;
		try
		{
			BufferedReader reader = request.getReader();
			while ((line = reader.readLine()) != null)
			jb.append(line);
		}
		catch (Exception e)
		{
		/*report an error*/
		}
		String data = jb.toString();
		Gson gson = new Gson();
		Type type = new TypeToken<User>(){}.getType();
		User user = gson.fromJson(data, type);
		Cookie[] sessionCookie = null;
		sessionCookie = request.getCookies();
		
		if( (UsernameExist(user.getUserNickname(),response)) && (user.getEmail() != sessionCookie[0].getValue()))
		{
			 response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			//PrintWriter writer = response.getWriter();
			//writer.println("Failure");
			//writer.close();
			return;
		}
	else {	
		final String name = user.getUserName();
		final String password =user.getPwd();
		final String nickname = user.getUserNickname();
		final String desc = user.getDescription();
        final String address = user.getAddress();
        final String phoneNumber = user.getPhoneNumber();
        final String email = user.getEmail();
        final String photo = user.getImageUrl();
        if (email != null && name != null &&
                !email.isEmpty() && !name.isEmpty() ) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        }
	
      try
		{
		
		Context context = new InitialContext();
	
		BasicDataSource ds = (BasicDataSource)context.lookup(
				getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
		Connection conn = ds.getConnection();
		    
			PreparedStatement pstmt = conn.prepareStatement(DBQueries.UPDATE_USER_DETAILS);
			pstmt.setString(1,email);
			pstmt.setString(2,name);
			pstmt.setString(3,address);
			pstmt.setString(4,phoneNumber);
			pstmt.setString(5,password);
			pstmt.setString(6,nickname);
			pstmt.setString(7,desc);
			pstmt.setString(8,photo);
			pstmt.setString(9, email);
			System.out.println(pstmt);
			pstmt.executeUpdate();
			
		}
		catch ( SQLException | NamingException e)
		{
		
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


       // response.setContentType("application/json");
        // Get the printwriter object from response to write the required json object to the output stream
        ///final PrintWriter out = response.getWriter();
        // Assuming your json object is **jsonObject**, perform the following, it will return your json object
      //  out.print(jsonObject.toString());
	}
	return;
    }
	
	protected Boolean UsernameExist(String username, HttpServletResponse response) throws ServletException, IOException
	{
		int check = 0;
		try
		{
			Context context = new InitialContext();
			BasicDataSource ds = (BasicDataSource)context.lookup(
					getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
			Connection conn = ds.getConnection();
			PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM USER_DETAILS WHERE user_nickname ='"+username.toString()+"'");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next())
			{
				check++;
	 		}
		 	rs.close();
		 	pstmt.close();
		 	conn.close();
		 	context.close();
		}
		catch(SQLException | NamingException e)
		{
			getServletContext().log("Error: Connection to DB or SELECT command are not good", e);
			response.sendError(500);
		}
		if (check > 0)
			return true;
		else
			return false;
	}

}
