package example;

import java.lang.reflect.Type;
import java.util.Collection;

import com.google.gson.reflect.TypeToken;

import example.model.Customer;
import example.model.Review;

/**
 * A simple place to hold global application constants
 */
public interface AppConstants {

	public final String CUSTOMERS = "customers";
	public final String CUSTOMERS_FILE = CUSTOMERS + ".json";
	public final String NAME = "name";
	public final String BOOK_ID = "bookId";

	public final Type CUSTOMER_COLLECTION = new TypeToken<Collection<Customer>>() {}.getType();
	public final Type REVIEW_COLLECTION = new TypeToken<Collection<Review>>() {}.getType();
	//derby constants
	public final String DB_NAME = "DB_NAME";
	public final String DB_DATASOURCE = "DB_DATASOURCE";
	public final String PROTOCOL = "jdbc:derby:"; 
	public final String OPEN = "Open";
	public final String SHUTDOWN = "Shutdown";
	
	//sql statements
	public final String CREATE_CUSTOMERS_TABLE = "CREATE TABLE CUSTOMER(Name varchar(100),"
			+ "City varchar(100),"
			+ "Country varchar(100))";
	public final String INSERT_CUSTOMER_STMT = "INSERT INTO CUSTOMER VALUES(?,?,?)";
	public final String SELECT_ALL_CUSTOMERS_STMT = "SELECT * FROM CUSTOMER";
	public final String SELECT_CUSTOMER_BY_NAME_STMT = 
			"SELECT * FROM CUSTOMER "
			+ "WHERE Name=?";
	
	
	public final String CREATE_READ_BOOKS_TABLE =
			"CREATE TABEL READ_BOOKS (" +
			"email varchar(100), "+
			"book_id int, " +
			"last_scrool int" +			
			")";
	
	public final String CREATE_USER_PURCHASES_TABLE =
			"CREATE TABLE USER_PURCHASES (" +
			"email varchar(100), "+
			"book_id int, " +
			"is_liked int" +			
			")";
	
	public final String CREATE_ALL_REVIEWS_TABLE =
			"CREATE TABLE ALL_REVIEWS (" +
			"email varchar(100), "+
			"book_id varchar(255), " +
			"review_description varchar(5000)," +
			"is_review_approved varchar(1)" +			
			")";
	
	public final String CREATE_USER_DETAILS_TABLE =
			"CREATE TABLE USER_DETAILS (" +
			"email varchar(100), "+
			"user_name varchar(100), "+
			"address varchar(100), "+
			"phone_number varchar(100), "+
			"pwd varchar(100), "+
			"user_nickname varchar(100), "+
			"description varchar(5000), "+
			"image_url varchar(100) "+
			")";
	
	
	public final String INSERT_USER_DETAILS =
			"INSERT INTO USER_DETAILS (" +
			"email, "+
			"user_name, "+
			"address, "+
			"phone_number, "+
			"pwd , "+
			"user_nickname, "+
			"description, "+
			"image_url "+
			")" +
			" VALUES(?,?,?,?,?,?,?,?)";
	
	public final String CREATE_BOOK_READ_TABLE =
			"CREATE TABLE BOOK_READ (" +
			"email varchar(100), "+
			"book_id varchar(255), " +
			"like varchar(1)" +			
			")";
	
	public final String DROP_ALL_REVIEWS_TABLE = 
			"DROP TABLE ALL_REVIEWS ";
	
//	public final String SELECT_ALL_REVIEWS_NOT_APPROVED =
//			"SELECT * " +
//			" FROM ALL_REVIEWS " +
//			" WHERE is_review_approved = '0'";
	
	public final String SELECT_ALL_REVIEWS_NOT_APPROVED = 
			" SELECT " +
			" ALL_REVIEWS.email," +
			" ALL_REVIEWS.book_id, " +
			" ALL_REVIEWS.review_description," +
			" ALL_REVIEWS.is_review_approved, " +
			" USER_DETAILS.user_name, " +
			" USER_DETAILS.image_url " +
			" FROM ALL_REVIEWS " +
			" INNER JOIN USER_DETAILS ON USER_DETAILS.email = ALL_REVIEWS.email " + 
			" WHERE is_review_approved = '0' ";
	
	
	public final String SELECT_REVIEWS_OF_BOOK_ID = 
			" SELECT " +
			" ALL_REVIEWS.email," +
			" ALL_REVIEWS.book_id, " +
			" ALL_REVIEWS.review_description," +
			" ALL_REVIEWS.is_review_approved, " +
			" USER_DETAILS.user_name, " +
			" USER_DETAILS.image_url " +
			" FROM ALL_REVIEWS " +
			" INNER JOIN USER_DETAILS ON USER_DETAILS.email = ALL_REVIEWS.email " + 
			" WHERE ALL_REVIEWS.book_id = ? ";//TODO: need to add to where : ' and ALL_REVIEWS.is_review_approved = 1'
	
	public final String INSERT_REVIEW =
			" INSERT INTO ALL_REVIEWS  (" +
			 " email," +
			 " book_id," +
			 " review_description," +
			 " is_review_approved)" +
			 " VALUES (?,?,?,?)";
	
	
	public final String SELECT_LIKES_OF_BOOK_ID = 
			" SELECT email " +
			" FROM BOOK_READ " +
			" WHERE book_id = ? and like = 1 ";
	
	public final String UPDATE_USER_LIKE_BOOK = 
			" UPDATE BOOK_READ " +
			" SET like = ? " +
			" WHERE email = ?";

	
	
	
}
