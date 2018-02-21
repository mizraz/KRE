
	var app = angular.module('RegLogic', []);
	app.controller('Ctrl', function($scope,$http,$rootScope)
	{
		$scope.error="Error ";
		$scope.desc="";
		$scope.photo="";
		$scope.errormsgg="Nickname already exists, enter a new one and try again";
		$('#alert1').hide();
		$('#alert2').hide();
		$('#alert3').hide();
	  //  $scope.Update = function()
	  //  {
	    	//var checkAll=1;
	    	//$('#alert1').hide();
	    	//$('#alert2').hide();
	    	//$('#alert3').hide();
	    	//if($scope.pwd.length<3)
	    //	{
	    	//	checkAll=0;
	    	//	$scope.error="Error ";
	    	//	$scope.errormsg3="Your passwords to short (min chars 3)";
	    	//	$('#alert3').show();
	    	//}
	    	//console.log($scope.name);
	    	//if(checkAll==1)
	    	//{
	    		if ($scope.photo.length==0)
	    			$scope.photo="https://vignette.wikia.nocookie.net/simpsons/images/1/11/Homersimpson.jpg/revision/latest?cb=20121229201104";
	    		//$scope.email_enter = $rootScope.email;
	    		//console.log($scope.email_enter);
	    		// $rootScope.test = 'abc';
    			 console.log($rootScope.test);
    			 console.log($rootScope);
	    		var data =
	    		{
	    			
	    			email : $rootScope.email,
	    			userNickname :"goofy"

	    		}
	    		
				//$http({url:"http://localhost:8080/ExampleServletv3/returnUserDetails",method:"GET", params:{email: 'goofy@disney.com'}}) //
	    		$http.get("http://localhost:8080/ExampleServletv3/returnUserDetails/"+data.email)
				.then(function(response) {
					$scope.records = response;
					console.log(response);
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log('arr length ' + $scope.result.data.length);
					//for (var i = 0; i < $scope.result.data.length; ++i) {
                        
						console.log(response.data[0].userName);
						$scope.name = response.data[0].userName;
						$scope.email = response.data[0].email;
						$scope.nick = response.data[0].userNickname;
						$scope.desc = response.data[0].description;
						$scope.pwd = response.data[0].pwd;
						$scope.phone = response.data[0].phoneNumber;
						$scope.photo = response.data[0].userImageUrl;
						if(response.data[0].address.split(",")[0] != null)
						$scope.country = response.data[0].address.split(",")[0];
						if(response.data[0].address.split(",")[1] != null)
							$scope.country = response.data[0].address.split(",")[1];
						if(response.data[0].address.split(",")[2] != null)
							$scope.street = response.data[0].address.split(",")[2];
						if(response.data[0].address.split(",")[3] != null)
							$scope.hnumb = response.data[0].address.split(",")[3];
						if(response.data[0].address.split(",")[4] != null)
							$scope.zip = response.data[0].address.split(",")[4];
						


						//drawReview(email, name, profilePicSrc, msgText, msgIdNumberDel, msgId, dateTime, newMessage, date);
//						console.log(newMessage);
					//}
						
				$scope.Update = function()
			    {
			    	var checkAll=1;
			    	$('#alert1').hide();
			    	$('#alert2').hide();
			    	$('#alert3').hide();
			    	if($scope.pwd.length<3)
			    	{
			    		checkAll=0;
			    		$scope.error="Error ";
			    		$scope.errormsg3="Your passwords to short (min chars 3)";
			    		$('#alert3').show();
			    	}
			    	console.log($scope.name);
			    	if(checkAll==1)
			    	{
			    		if ($scope.photo.length==0)
			    			$scope.photo="https://vignette.wikia.nocookie.net/simpsons/images/1/11/Homersimpson.jpg/revision/latest?cb=20121229201104";
			    		var data =
			    		{
			    			userName: $scope.name,
			    			email: $scope.email,
			    			userNickname : $scope.nick,
			    			pwd: $scope.pwd,
			    			address:$scope.country +"," + $scope.city +","+ $scope.street + ","+ $scope.hnumb +","+ $scope.zip,
			    			phoneNumber: $scope.phone,
			    			description: $scope.desc,
			    			userImageUrl: $scope.photo	
			    		}
			    		request = $.post("http://localhost:8080/ExampleServletv3/updateUserDetails",JSON.stringify(data));
			    		request.done(function (response, textStatus, jqXHR)
			    		{
			    	        	window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
			    	    });
			    		request.fail(function() {
			    			$scope.error="Error ";
							$scope.errormsgg="Nickname "+$scope.nick+" already exists, enter a new one and try again";
							$('#alert2').show();
			    		});
			    		
			    	}
			    };
						 	

				});
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		

	    		
	   // 	}
	 //   };
	});
	