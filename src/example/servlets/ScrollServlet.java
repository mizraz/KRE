package example.servlets;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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
import DB.DBQueries;
import example.AppConstants;
import example.Utils;
import example.model.ScrollObj;

/**
 * Servlet implementation class ScrollServlet
 */
@WebServlet(
		description = "Servlet to SCroll", 
		urlPatterns = { 
				"/scroll",
				"/scroll/bookId/*"
		})
public class ScrollServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ScrollServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {

			//obtain CustomerDB data source from Tomcat's context
			Context context = new InitialContext();
			BasicDataSource ds = (BasicDataSource)context.lookup(
					getServletContext().getInitParameter(AppConstants.DB_DATASOURCE) + AppConstants.OPEN);
			Connection conn = ds.getConnection();
			String data = Utils.getPostBody(request);
			    			System.out.println("!!!!!!!!!!!! " + data);
			Gson gson = new Gson();
			ScrollObj scroll = gson.fromJson(data, ScrollObj.class);
			    			System.out.println("!!!!!!!!!!!! " + scroll.getBookId());

			try {
				
    			

				PreparedStatement pstmt = conn.prepareStatement(DBQueries.SET_SCROLL);
				pstmt.setString(1, scroll.getScroll());
				pstmt.setString(2, scroll.getEmail());
				pstmt.setString(3, scroll.getBookId());
				pstmt.executeUpdate();
				System.out.println("email: " + scroll.getEmail() +"bookId: "+ scroll.getBookId() +" scroll: "+ scroll.getScroll());

				

			} catch (SQLException e) {
				getServletContext().log("Error while querying for customers", e);
				response.sendError(500);//internal server error
			}
			conn.close();

		} catch (SQLException | NamingException e) {
			getServletContext().log("Error while closing connection", e);
			response.sendError(500);//internal server error
		}
	}

}
