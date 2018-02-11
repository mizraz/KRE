package example.model;

public class Like {

	private String email;
	private String bookId;
	private String userName;

	
	public Like() {
		
	}
	
	public Like (String email, String bookId, String userName) {
		this.email = email;
		this.bookId = bookId;
		this.userName = userName;

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
