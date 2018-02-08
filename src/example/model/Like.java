package example.model;

public class Like {

	private String email;
	private String bookId;
	
	public Like() {
		
	}
	
	public Like (String email, String bookId) {
		this.email = email;
		this.bookId = bookId;

	}
	
	public String getBookId() {
		return bookId;
	}
	
	public String getEmail() {
		return email;
	}
	

	
	
}
