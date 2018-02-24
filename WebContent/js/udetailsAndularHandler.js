
	angular.module('myApp').controller("CtrlDetail", 
			['$scope','$rootScope','$http', function($scope, $rootScope, $http) {
		$scope.error="Error ";
		$scope.desc="";
		$scope.photo="";
		$scope.errormsgg="Nickname already exists, enter a new one and try again";
		$('#alert1').hide();
		$('#alert2').hide();
		$('#alert3').hide();
	
	    		if ($scope.photo.length==0)
	    			$scope.photo="https://vignette.wikia.nocookie.net/simpsons/images/1/11/Homersimpson.jpg/revision/latest?cb=20121229201104";
    			 console.log($rootScope);
	    		var data =
	    		{
	    			
	    			email : $rootScope.userLogedIn.email,
	    			

	    		}
	    		//console.log($rootScope.userLogedIn.email);
				//$http({url:"http://localhost:8080/ExampleServletv3/returnUserDetails",method:"GET", params:{email: 'goofy@disney.com'}}) //
	    		request = $.get("http://localhost:8080/ExampleServletv3/returnUserDetails");
				request.then(function(response) {
					$scope.records = response;
					console.log(response);
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log('arr length ' + $scope.result.data.length);
					
						$scope.name = response.data[0].userName;
						$scope.email = response.data[0].email;
						$scope.nick = response.data[0].userNickname;
						$scope.desc = response.data[0].description;
						$scope.pwd = response.data[0].pwd;
						$scope.phone = response.data[0].phoneNumber;
						$scope.photo = response.data[0].userImageUrl;
						console.log(response.data[0].address.split(",")[0]);
						console.log(response.data[0].address.split(",")[1]);
						if(response.data[0].address.split(",")[0] != null)
						$scope.country = response.data[0].address.split(",")[0];
						if(response.data[0].address.split(",")[1] != null)
							$scope.city = response.data[0].address.split(",")[1];
						if(response.data[0].address.split(",")[2] != null)
							$scope.street = response.data[0].address.split(",")[2];
						if(response.data[0].address.split(",")[3] != null)
							$scope.hnumb = response.data[0].address.split(",")[3];
						if(response.data[0].address.split(",")[4] != null)
							$scope.zip = response.data[0].address.split(",")[4];
						
				});//then
				request.fail(function() {
					      console.log("Failed");
				});//fail


						
						
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
			    	}//if
			    	console.log($scope.name);
			    	if(checkAll==1)
			    	{
			    		if ($scope.photo.length==0)
			    			$scope.photo="https://vignette.wikia.nocookie.net/simpsons/images/1/11/Homersimpson.jpg/revision/latest?cb=20121229201104";
			    		var data =
			    		{
			    			userName: $scope.userLogedIn.userName,
			    			email: $scope.userLogedIn.email,
			    			userNickname : $scope.userLogedIn.userNickname,
			    			pwd: $scope.userLogedIn.pwd,
			    			address:$scope.userLogedIn.country +"," + $scope.userLogedIn.city +","+ $scope.userLogedIn.street + ","+ $scope.userLogedIn.hnumb +","+ $scope.userLogedIn.zip,
			    			phoneNumber: $scope.userLogedIn.phoneNumber,
			    			description: $scope.userLogedIn.description,
			    			userImageUrl: $scope.userLogedIn.userImageUrl	
			    		}//data
			    		request = $.post("http://localhost:8080/ExampleServletv3/updateUserDetails",JSON.stringify(data));
			    		request.done(function (response, textStatus, jqXHR)
			    		{
			    	        	//window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
			    	    });//then
			    		request.fail(function() {
			    			$scope.error="Error ";
							$scope.errormsgg="Nickname "+$scope.nick+" already exists, enter a new one and try again";
							$('#alert2').show();
			    		});//fail
			    		
			    	}//if
			    };//update
	}]);//myAPP
	