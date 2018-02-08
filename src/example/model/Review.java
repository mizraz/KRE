package example.model;

public class Review {
	
	private String email;
	private String bookId;
	private String description;
	private String isApproved;
	private String userName;
	private String userImageUrl;
	
	public Review () {
		
	}
	
	public Review (String email, String bookId, String description, String isApproved, String userName, String userImageUrl) {
		this.email = email;
		this.bookId = bookId;
		this.description = description;
		this.isApproved = isApproved;
		this.userName = userName;
		this.userImageUrl = userImageUrl;
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
