package example.model;

public class User {
	
	public String getUserName() {
		return userName;
	}
	public String getEmail() {
		return email;
	}
	public String getUserNickname() {
		return userNickname;
	}
	public String getAddress() {
		return address;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public String getDescription() {
		return description;
	}
	public String getPwd() {
		return pwd;
	}
	public String getImageUrl() {
		return userImageUrl;
	}
	
	public void printUser() {
		System.out.println("userName: "+ userName + "img: "+ userImageUrl);
	}
	
	private String userName;
	private String email;
	private String userNickname;
	private String address;
	private String phoneNumber;
	private String description;
	private String pwd;
	private String userImageUrl;
	

}
