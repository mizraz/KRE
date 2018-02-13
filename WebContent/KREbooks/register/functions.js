function openSignIn() {
	// $('#div_SignIn') = find element by id(id)
	// $('#div_SignIn').css("display","block"); 
	var modal = document.getElementById("div_SignIn");
	modal.style.display = "block";
	window.onclick = function(event) {
		if (event.target == modal){
			modal.style.display = "none";
		}
	}	
		
}
function openSignUp() {
	// $('#div_SignIn') = find element by id(id)
	// $('#div_SignIn').css("display","block"); 
	var modal = document.getElementById("div_SignUp");
	modal.style.display = "block";
	window.onclick = function(event) {
		if (event.target == modal){
			modal.style.display = "none";
		}
	}	
		
}
function SubmitFunction() {
	var name = $("#name").val();
	var surname = $("#surname").val();
	var nickname = $("#nickname").val();
	var password = $("#password").val();
	
	
	var addr = $("#addr").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	$.ajax(
		{
			type:"POST",
			url: "http://localhost:8080/KRE/userReg",
			data: { 
				    nickname:nickname,
					password:password,
					name:name,
					surname:surname,
					description:description,
					addr:addr,
					phone:phone,
					email:email,
					photo:photo
				}//data
		}//ajax	
	).done(function(msg) {
		alert("data sent "+ msg);
	});
}

function focusPassword()
{
	var chars1=/[A-Z]/;
	var chars2=/[a-z]/;
	var chars3=/[0-9]/;
	var theInput = document.getElementsByTagName("input")[2];
	var theOutput = document.getElementById("out");
	var pass = document.forms[0].pass.value;
	//theInput.style.borderWidth = "2px 2px 4px 1px";
	if(pass.length<4)
	{
		theInput.style.borderColor="red";
		theOutput.innerHTML = "Weak Password";
		theOutput.style.color="red";
	}
	else
	{
		if(((pass.match(chars1))||(pass.match(chars2)))&&(pass.match(chars3)))
		{
			theInput.style.borderColor="green";
			theOutput.innerHTML = "Strong Password";
			theOutput.style.color="green";
		}
		else
		{
			theInput.style.borderColor="yellow";
			theOutput.innerHTML = "Moderate Password";
			theOutput.style.color="yellow";
		}
	}
}

function focusPasswordCom()
{
	var theInputPass = document.getElementsByTagName("input")[2];
	var theInput = document.getElementsByTagName("input")[3];
	if(theInputPass.value.length>0)
	{
		if(theInputPass.value.localeCompare(theInput.value) == 0)
		{
			theInput.style.borderColor="#555";
		}
		else
		{
			theInput.style.borderColor="red";
		}
	}
		
}