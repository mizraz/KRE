angular.module('myApp').controller("Ctrlogin", 
			['$scope','$rootScope','$http', function($scope, $rootScope, $http) {	
			
				
		var ctrl = this;
		$scope.error="Error ";		
		
		$scope.errormsgg1="";
		$('#alert1').hide();
		
		
		$scope.clickedRegister = function()
		{
			$rootScope.modalCurPath = 'registerANDlogin/reg.html';
			console.log("clickedRegister");
		}
		
	    $scope.SubmitFunction = function()
	    {
	    	$('#alert1').hide();
	    	if($scope.nick.length>2 && $scope.pwd.length>3)
	    	{
	    		var data =
		    	{
	    				userNickname: $scope.nick,
		    			pwd: $scope.pwd
		    		
		    	};
	    		
	    		$http.post('http://localhost:8080/ExampleServletv3/loginServlet', JSON.stringify(data))
	    		.then(function(response) {
	    			
	    			 console.log($rootScope);
	    			 $rootScope.email=response.data[0].email;
	    			 console.log($rootScope);
	    			 $rootScope.test = 'abc';
	    			 console.log($rootScope.test);
	    			 console.log($rootScope.email);
	    		 
	    			 console.log("response.data[0].email: " + response.data[0].email);
				
	    			
	    			//TODO: $rootScope.eamil = email_of_user_just_loged_in_from_the_response; 
//	    			$rootScope.userImageUrl , userName etc... 
	    			$('.alert').hide();
	    			
	    			
	    			var res = new String(response.data);
	    			
	    			
	    			
	    		
	    		if(res.indexOf("Failure")==0)
					{
	    				console.log("HELLO");
	    		   		$scope.error="Info ";
	    				$scope.errormsg1="The username and password you entered did not match our records. Please double-check and try again.";
	    				$('#alert1').show();
					}//if failure
	    		   else
	    		   {
	    			   
	    			  $rootScope.nick=response.data[0].userNickname;
	    			  console.log(response.data[0].userNickname);
	    			  localStorage.setItem('nick', response.data[0].userNickname);
	    			   $rootScope.email=response.data[0].email;
	    			   localStorage.setItem('email', response.data[0].emai);
	    			   $rootScope.address=response.data[0].address;
	    			   localStorage.setItem('address', response.data[0].address);
	    			   $rootScope.name=response.data[0].userName;
	    			   localStorage.setItem('userName', response.data[0].userName);
	    			   $rootScope.password=response.data[0].pwd;
	    			   localStorage.setItem('pwd', response.data[0].pwd);
	    			   $rootScope.description=response.data[0].description;
	    			   localStorage.setItem('description', response.data[0].description);
	    			   $rootScope.phoneNumber=response.data[0].phoneNumber;
	    			   localStorage.setItem('phoneNumber', response.data[0].phoneNumber);
	    			   $rootScope.photo=response.data[0].userImageUrl;
	    			   localStorage.setItem('userImageUrl', response.data[0].userImageUrl);
	    			   console.log($rootScope.nick);
	    			  // $Ctrlogin.curPage='index.html';
	    			   window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
	    		   } 
	    		
	    		});
	    	}
	    	else
	    	{
	    		$scope.error="Info ";
	    		$scope.errormsg="The Username or Password are too short";
	    		$('.alert').show();
	    	}
	    };
	}]);
	

	
	