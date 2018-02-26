angular.module('myApp').controller("Ctrl", 
			['$scope','$rootScope','$http', function($scope, $rootScope, $http) {	
		$scope.error="Error ";
		$scope.desc="";
		$scope.photo="";
		$scope.errormsgg="Nickname already exists, enter a new one and try again";
		$('#alert1').hide();
		$('#alert2').hide();
		$('#alert3').hide();
	    $scope.SubmitFunction = function()
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
	    		request = $.post("http://localhost:8080/BooksForAll/UserRegisterServlet",JSON.stringify(data));
	    		console.log(request);
	    		request.then(function (response, textStatus, jqXHR)
	    		{      console.log("HELLO");
	    	       	window.location = 'http://localhost:8080/BooksForAll/KREbooks/index.html';
	    	    });
	    		request.fail(function() {
	    			//console.log(response);
	    			$scope.error="Error ";
					$scope.errormsgg="Nickname "+$scope.nick+" already exists, enter a new one and try again";
					$('#alert2').show();
					//window.location = 'http://localhost:8080/BooksForAll/KREbooks/index.html';
	    		});
	    		//window.location = 'http://localhost:8080/BooksForAll/KREbooks/index.html';
	    		//$http.post("http://localhost:8080/BooksForAll/UserRegisterServlet",JSON.stringify(data))
	    		//.then(function(response) {
	    			//console.log("HELLO");
	    			//var res = new String(response.responseText);
		    		//if(res.indexOf("Success")==0)
					//{
		    			//window.location = 'http://localhost:8080/BooksForAll/KREbooks/index.html';
					//}//if success
		    		//else
					//{
		    			//console.log(response);
		    			//$scope.error="Error ";
						//$scope.errormsgg="Nickname "+$scope.nick+" already exists, enter a new one and try again";
						//$('#alert2').show();
					//}//if failure


	    		//});
	    		
	    	}//
	    	else
	    	{
	    		$scope.error="Info ";
	    		$scope.errormsgg="The Username or Password are too short";
	    		$('.alert').show();
	    	}
	    };
	}]);
	