angular.module('myApp').controller("Ctrlogin", 
			['$scope','$rootScope','$http', function($scope, $rootScope, $http) {	
			
				var chars1=/[A-Z]/;
				var chars2=/[a-z]/;
				var chars3=/[0-9]/;		
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
	    			   
	    			   if($scope.nick == 'admin') {
	    				   $rootScope.userPrivel = 1;
	    			   } else {
	    				   $rootScope.userPrivel = 0;
	    			   }
	    			   
	    			   
	    				
	    				$rootScope.userLogedIn = {
	    						email: response.data[0].email,
	    						userNickname: response.data[0].userNickname,
	    						userName: response.data[0].userName,
	    						userImageUrl: response.data[0].userImageUrl,
	    						phoneNumber: response.data[0].phoneNumber,
	    						description: response.data[0].description,
	    						address: response.data[0].address
	    				};

	    					
	    				ctrl.getEbooksAndPurchases();
	    			   
	    			   
	    			   
	    			   
	    			   
//	    			  $rootScope.nick=response.data[0].userNickname;
//	    			  console.log(response.data[0].userNickname);
//	    			  localStorage.setItem('nick', response.data[0].userNickname);
//	    			   $rootScope.email=response.data[0].email;
//	    			   localStorage.setItem('email', response.data[0].emai);
//	    			   $rootScope.address=response.data[0].address;
//	    			   localStorage.setItem('address', response.data[0].address);
//	    			   $rootScope.name=response.data[0].userName;
//	    			   localStorage.setItem('userName', response.data[0].userName);
//	    			   $rootScope.password=response.data[0].pwd;
//	    			   localStorage.setItem('pwd', response.data[0].pwd);
//	    			   $rootScope.description=response.data[0].description;
//	    			   localStorage.setItem('description', response.data[0].description);
//	    			   $rootScope.phoneNumber=response.data[0].phoneNumber;
//	    			   localStorage.setItem('phoneNumber', response.data[0].phoneNumber);
//	    			   $rootScope.photo=response.data[0].userImageUrl;
//	    			   localStorage.setItem('userImageUrl', response.data[0].userImageUrl);
//	    			   console.log($rootScope.nick);
	    			  // $Ctrlogin.curPage='index.html';
//	    			   window.location = 'http://localhost:8080/ExampleServletv3/KREbooks/index.html';

	    				
	    				
	    				
	    				
	    				$("#myModalRegisterLogin").modal('hide');

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
	    
	    
	    ctrl.getEbooksAndPurchases = function() {
	    	
	    	
	    	console.log("ctrl.getEbooksAndPurchases");
	    	
	    	
			$http.get("http://localhost:8080/ExampleServletv3/ebooks")
			.then(function(response) {
				$rootScope.records = response;
				$rootScope.result = $rootScope.records;//this variable will hold the search results

//				console.log("1234343$$$$$  "  + $rootScope.result.data);
//				ctrl.ebook1["bookId"] = $rootScope.result.data[0].bookId;
//				console.log($rootScope.result);
//				console.log("1235545344" + $rootScope.result.data[1].bookId);
//				console.log("ebook1 bookId: " + ctrl.ebook1.bookId);

				var i = 0;

				for (var ebook in $rootScope.result.data) {
					$rootScope.result.data[i]["isPurchased"] = 0; //TODO: this line is example how to add properties to ebook. need to do this for like etc with real data from ajax.
					$rootScope.result.data[i]["isLiked"] = 0; //TODO: this line is example how to add properties to ebook. need to do this for like etc with real data from ajax.
					$rootScope.result.data[i]["currentScroll"] = 0;
					$rootScope.listtt.push($rootScope.result.data[i]);
					$rootScope.ebooksDict["ebook" + $rootScope.result.data[i].bookId] = $rootScope.result.data[i];
					i++;
				}


				$http.get("http://localhost:8080/ExampleServletv3/purchases/email/"+$rootScope.userLogedIn.email) ///name/Alfreds Futterkiste
				.then(function(response) {
					$rootScope.records = response;
					$rootScope.resultPur = $rootScope.records;//this variable will hold the search results

					console.log($rootScope.resultPur);
					console.log($rootScope.userLogedIn.email);
					console.log('arr length ' + $rootScope.resultPur.data.length);
					for (i = 0; i < $rootScope.resultPur.data.length; ++i) {
						var ebookIdDict = "ebook" + $rootScope.resultPur.data[i].bookId;
						console.log(ebookIdDict);
						var curEbook = $rootScope.ebooksDict[ebookIdDict];
						$rootScope.userPurchases.push(curEbook);
						$rootScope.purchasesDict["ebook"+ $rootScope.records.data[i].bookId] = $rootScope.records.data[i]; 

						console.log('curEbook: ' + curEbook);

						console.log("$rootScope.resultPur.data[i].bookId: " + $rootScope.resultPur.data[i].bookId);

					}

					i = 0;
					if ( $rootScope.resultPur.data.length > 0) {
					console.log("$rootScope.resultPur.data: " + $rootScope.resultPur.data[0].bookId);
					for (var pur in $rootScope.resultPur.data) {
						console.log("pur.bookId: "+ $rootScope.resultPur.data[pur].bookId);
						$rootScope.ebooksDict["ebook" + $rootScope.resultPur.data[pur].bookId].isPurchased = 1 ; //TODO: this line is example how to add properties to ebook. need to do this for like etc with real data from ajax.
						$rootScope.ebooksDict["ebook" + $rootScope.resultPur.data[pur].bookId].isliked = $rootScope.resultPur.data[pur].isLiked; //TODO: this line is example how to add properties to ebook. need to do this for like etc with real data from ajax.
						$rootScope.ebooksDict["ebook" + $rootScope.resultPur.data[pur].bookId].currentScroll = $rootScope.resultPur.data[pur].currentScroll;
						
						console.log("1: " + $rootScope.ebooksDict["ebook" + $rootScope.resultPur.data[pur].bookId].isPurchased);
						console.log("2: " + $rootScope.ebooksDict["ebook" + $rootScope.resultPur.data[pur].bookId].isliked);
						console.log("3: " + $rootScope.ebooksDict["ebook" + $rootScope.resultPur.data[pur].bookId].currentScroll);



//						$rootScope.listtt.push($rootScope.result.data[1]);
						i++;
					}
					}
					else {
						console.log("purchases list of: " + $rootScope.userLogedIn.email + " is empty!");
					}




				});


			});
	    	
	    };
	    
	    
	}]);
	

	
	