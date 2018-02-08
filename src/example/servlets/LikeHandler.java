package example.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

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

import example.AppConstants;
import example.model.Like;
import example.model.Review;

/**
 * Servlet implementation class LikeHandler
 */
@WebServlet("/LikeHandler")
public class LikeHandler extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LikeHandler() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	try {
        	//obtain CustomerDB data source from Tomcat's context
    		Context context = new InitialContext();
    		BasicDataSource ds = (BasicDataSource)context.lookup(
    				getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
    		Connection conn = ds.getConnection();

    		Collection<Like> likeResult = new ArrayList<Like>(); 
    		String uri = request.getRequestURI();
    			String bookId = uri.substring(uri.indexOf(AppConstants.BOOK_ID) + AppConstants.BOOK_ID.length() + 1);
    			PreparedStatement stmt;
    			try {
    				stmt = conn.prepareStatement(AppConstants.SELECT_REVIEWS_OF_BOOK_ID);
    				stmt.setString(1, bookId);
    				ResultSet rs = stmt.executeQuery();
    				while (rs.next()){
    					likeResult.add(new Like(rs.getString(1),rs.getString(2)));
    				}
    				rs.close();
    				stmt.close();
    			} catch (SQLException e) {
    				getServletContext().log("Error while querying for likes", e);
    	    		response.sendError(500);//internal server error
    			}
			for (Iterator iterator = likeResult.iterator(); iterator.hasNext();) {
				Review review = (Review) iterator.next();
				System.out.println("bookId: "+ review.getBookId() + "description "+ review.getDescription());
				
			}

    		
    		
    		conn.close();
    		
    		Gson gson = new Gson();
        	//convert from customers collection to json
        	String reviewJsonResult = gson.toJson(likeResult, AppConstants.REVIEW_COLLECTION);
        	response.addHeader("Content-Type", "application/json");
        	PrintWriter writer = response.getWriter();
        	writer.println(reviewJsonResult);
        	writer.close();
    	} catch (SQLException | NamingException e) {
    		getServletContext().log("Error while closing connection", e);
    		response.sendError(500);//internal server error
    	}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
