package example.model;

import org.apache.derby.iapi.types.SQLTimestamp;

public class Review {
	
	private String email;
	private String bookId;
	private String description;
	private String isApproved;
	private String userName;
	private String userImageUrl;
	private String dateReview;
	
	public Review () {
		
	}
	
	public Review (String email, String bookId, String description, String isApproved, String userName, String userImageUrl, String dateReview) {
		this.email = email;
		this.bookId = bookId;
		this.description = description;
		this.isApproved = isApproved;
		this.userName = userName;
		this.userImageUrl = userImageUrl;
		this.dateReview = dateReview;
	}
	
	public String getDateReview() {
		return dateReview;
	}

	public String getBookId() {
		return bookId;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getDescription() {
		return description;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public String getUserImageUrl() {
		return userImageUrl;
	}
	
	public String getIsApproved() {
		return isApproved;
	}
	


}
