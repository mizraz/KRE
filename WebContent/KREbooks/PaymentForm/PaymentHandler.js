	angular.module('myApp').controller("CtrlBuy", 
			['$scope','$rootScope','$http', function($scope, $rootScope, $http) {
	

		$scope.error="Error ";
		$scope.desc="";
		$scope.photo="";
		$scope.errormsgg="";
		$scope.errormsgg1="";
		$scope.errormsgg2="";
		$scope.errormsgg3="";
		$('#alert1').hide();
		$('#alert2').hide();
		$('#alert3').hide();
	    $scope.BuyNow = function()
	    {
	    	var checkAll=1;
	    	$('#alert1').hide();
	    	$('#alert2').hide();
	    	$('#alert3').hide();
	    	console.log($scope.myCard);
	    	if(($scope.myCard == 'visa') && (($scope.ccn.length<16 ||$scope.ccn.length>16) || $scope.ccn.indexOf("4")!=0 ))
	    	{
	    		checkAll=0;
	    		//$scope.error="Error ";
	    		$scope.errormsgg2="The valid number of digits of leumi card is 16 and it starts with 4";
	    		$('#alert2').show();
	    	}
	         if($scope.myCard == 'isra' && ($scope.ccn.length>9 || $scope.ccn.length<9))
	    	{
	    		checkAll=0;
	    		$scope.error="Error ";
	    		$scope.errormsgg2="The valid number of digits of VISA card is 9";
	    		$('#alert2').show();
	    	}
	    	var today = new Date();
	    	var usersInputDate = new Date($scope.date);
	    	console.log(usersInputDate.getDate() );
	    	console.log(today.getDate());
	    	if((usersInputDate.getDate() != today.getDate()) && (usersInputDate.getMonth() != today.getMonth()+1) && (usersInputDate.getFullYear() != today.getFullYear()))
	    		{
	    			checkAll=0;
	    			$scope.error="Error ";
	    			$scope.errormsgg1="The date is incorrect";
	    			$('#alert1').show();
	    		}
	    	console.log(today.getMonth() + 1);
	    	console.log(today.getFullYear());
	    	if(($scope.validityMonth <= today.getMonth()+1) && ($scope.validityYear == today.getFullYear()) || ($scope.validityYear < today.getFullYear()))
    		{
    			checkAll=0;
    			$scope.error="Error ";
    			$scope.errormsgg3="Your credit card seems to be invalid";
    			$('#alert3').show();
    		}
	    	if(checkAll==1)
	    	{
	    		
	    		
	    		
	    		//TODO: send ajax post request with bookId, payment info, user email etc
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		
	    		//if ($scope.photo.length==0)
	    			//$scope.photo="https://vignette.wikia.nocookie.net/simpsons/images/1/11/Homersimpson.jpg/revision/latest?cb=20121229201104";
	    		//var data =
	    		//{
	    			//userName: $scope.name,
	    			//email: $scope.email,
	    			//userNickname : $scope.nick,
	    			//pwd: $scope.pwd,
	    			//address:$scope.country +"," + $scope.city +","+ $scope.street + ","+ $scope.hnumb +","+ $scope.zip,
	    			//phoneNumber: $scope.phone,
	    			//description: $scope.desc,
	    		//	userImageUrl: $scope.photo	
	    		//}
	    		//request = $.post("http://localhost:8080/ExampleServletv3/PurchasesServlet",JSON.stringify(data));
	    		//console.log(request);
	    		//request.then(function (response, textStatus, jqXHR)
	    		//{      console.log("HELLO");
	    	      // 	window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
	    	    ///});
	    		//request.fail(function() {
	    			//console.log(response);
	    			//$scope.error="Error ";
					//$scope.errormsgg="Nickname "+$scope.nick+" already exists, enter a new one and try again";
					//$('#alert2').show();
					//window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
	    		//});
	    		//window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
	    		//$http.post("http://localhost:8080/ExampleServletv3/UserRegisterServlet",JSON.stringify(data))
	    		//.then(function(response) {
	    			//console.log("HELLO");
	    			//var res = new String(response.responseText);
		    		//if(res.indexOf("Success")==0)
					//{
		    			//window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';
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
	    	//else
	    	//{
	    		//$scope.error="Info ";
	    		//$scope.errormsgg="The Username or Password are too short";
	    		//$('.alert').show();
	    	//}
	    };
	}]);
	