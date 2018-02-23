angular.module('myApp').controller("lastTransactionsController", 
		['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
			var ctrl = this;
//			ctrl.likesUserList = [
//			"moshe", "shlomi", "gal"];

//			ctrl.usersListString = '';
//			for(x in ctrl.likesUserList) {
//			ctrl.usersListString.append(x+'\n');
//			console.log(x);
//			}


			this.$onInit = function() {
				
				ctrl.ebook = $rootScope.curEbook;
				ctrl.clickedOnceTran = false;
				ctrl.transactionsList = [];
				
				ctrl.sumPurchases = 0;
				ctrl.countPurchases = 0;
				
				
					console.log("last transactions button clicked!");
//					if (!ctrl.clickedOnce) {
						ctrl.clickedOnceTran = true;
						$http.get("http://localhost:8080/ExampleServletv3/transactions")
						.then(function(response) {
							$scope.records = response;
							$scope.result = $scope.records;//this variable will hold the search results
							console.log($scope.result);
							console.log('arr length ' + $scope.result.data.length);
							for (var i = 0; i < $scope.result.data.length; ++i) {

								console.log("$scope.result.data[i].bookId: " + $scope.result.data[i].bookId);
								console.log("$scope.result.data[i].email: " + $scope.result.data[i].email);
								console.log("$scope.result.data[i].datePurchased: " + $scope.result.data[i].datePurchased);
								ctrl.transactionsList.push($scope.result.data[i]);
								
								
								ctrl.countPurchases += 1;
								ctrl.sumPurchases +=  parseFloat($scope.result.data[i].price);
								
//								console.log(newMessage);
							}
							console.log("ctrl.transactionsList:  " + ctrl.transactionsList);

						});
//					}				
			};
			
			
		       $scope.dates = {
		    	         first: new Date(1970, 1, 01),
		    	         second: Date.now()
		    	       };
		       
		       ctrl.getTranscationsBetweenDates = function () {
		    	   console.log("$scope.dates.first: "+ $scope.dates.first);
		    	   console.log("$scope.dates.second: "+ $scope.dates.second);
		    	   
		    	   
		    	   
					ctrl.ebook = $rootScope.curEbook;
					ctrl.clickedOnceTran = false;
					ctrl.transactionsList = [];
					
					ctrl.sumPurchases = 0;
					ctrl.countPurchases = 0;
					
					
						console.log("last transactions button clicked!");
//						if (!ctrl.clickedOnce) {
							ctrl.clickedOnceTran = true;
							$http.get("http://localhost:8080/ExampleServletv3/transactions/firstDate/"+$scope.dates.first.getTime()+'/secondDate/'+$scope.dates.second.getTime())
							.then(function(response) {
								$scope.records = response;
								$scope.result = $scope.records;//this variable will hold the search results
								console.log($scope.result);
								console.log('arr length ' + $scope.result.data.length);
								for (var i = 0; i < $scope.result.data.length; ++i) {

									console.log("$scope.result.data[i].bookId: " + $scope.result.data[i].bookId);
									console.log("$scope.result.data[i].email: " + $scope.result.data[i].email);
									console.log("$scope.result.data[i].datePurchased: " + $scope.result.data[i].datePurchased);
									ctrl.transactionsList.push($scope.result.data[i]);
									
									
									ctrl.countPurchases += 1;
									ctrl.sumPurchases +=  parseFloat($scope.result.data[i].price);
									
//									console.log(newMessage);
								}
								console.log("ctrl.transactionsList:  " + ctrl.transactionsList);

							});
//						}
		    	   
		    	   
		    	   
		    	   
		    	   
		    	   
		    	   
		    	   
		    	   
		       }
			
			

				
				
				
				
				
			
			



		}]);



