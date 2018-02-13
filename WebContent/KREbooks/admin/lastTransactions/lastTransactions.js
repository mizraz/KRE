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


			ctrl.ebook = $rootScope.curEbook;
			ctrl.clickedOnceTran = false;
			ctrl.transactionsList = [];
			
				console.log("last transactions button clicked!");
//				if (!ctrl.clickedOnce) {
					ctrl.clickedOnceTran = true;
					$http.get("http://localhost:8080/ExampleServletv3/transactions")
					.then(function(response) {
						$scope.records = response;
						$scope.result = $scope.records;//this variable will hold the search results
						console.log($scope.result);
						console.log('arr length ' + $scope.result.data.length);
						for (var i = 0; i < $scope.result.data.length; ++i) {

							console.log("@@@" + $scope.result.data[i].bookId);
							console.log("@@@" + $scope.result.data[i].email);
							console.log("@@@" + $scope.result.data[i].datePurchased);
							ctrl.transactionsList.push($scope.result.data[i]);
							
//							console.log(newMessage);
						}
						console.log("!@#  " + ctrl.transactionsList);

					});
//				}
				
				
				
				
				
			
			



		}]);



