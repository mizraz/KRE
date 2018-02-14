package example.model;

public class Like {

	private String email;
	private String bookId;
	private String userName;
	private String isLiked;

	
	public String getIsLiked() {
		return isLiked;
	}

	public Like() {
		
	}
	
	public Like (String email, String bookId, String userName, String isLiked) {
		this.email = email;
		this.bookId = bookId;
		this.userName = userName;
		this.isLiked = isLiked;

	}
	
	public String getBookId() {
		return bookId;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getUserName() {
		return userName;
	}
	

	
	
}
