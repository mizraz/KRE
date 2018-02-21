
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
	    		request = $.post("http://localhost:8080/ExampleServletv3/UserRegisterServlet",JSON.stringify(data));
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
	