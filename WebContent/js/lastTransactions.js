angular.module('myApp').controller("lastTransactionsController", 
		['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
			var ctrl = this;

			this.$onInit = function() {

				ctrl.ebook = $rootScope.curEbook;
				ctrl.clickedOnceTran = false;
				ctrl.transactionsList = [];
				// ctrl.sumPurchases - the total amount users spent in store in selected period.
				ctrl.sumPurchases = 0;
				// ctrl.countPurchases - the number of purchases  in selected period.
				ctrl.countPurchases = 0;


				console.log("last transactions button clicked!");


//				if (!ctrl.clickedOnce) {
				ctrl.clickedOnceTran = true;
				// get all transactions since 1.1.1970 until now.
				$http.get("http://localhost:8080/ExampleServletv3/transactions")
				.then(function(response) {
					$scope.records = response;
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log('arr length ' + $scope.result.data.length);
					for (var transactionIdx in $scope.result.data) {




						console.log("$scope.result.data[transactionIdx].bookId: " + $scope.result.data[transactionIdx].bookId);
						console.log("$scope.result.data[transactionIdx].email: " + $scope.result.data[transactionIdx].email);
						console.log("$scope.result.data[transactionIdx].datePurchased: " + $scope.result.data[transactionIdx].datePurchased);



						ctrl.transactionsList.push($scope.result.data[transactionIdx]);
						ctrl.countPurchases += 1;
						ctrl.sumPurchases +=  parseFloat($scope.result.data[transactionIdx].price);

					}




					console.log("ctrl.transactionsList:  " + ctrl.transactionsList);

				});
//				}				
			};

			// $scope.dates - dates to select purchases between
			$scope.dates = {
					first: new Date(1970, 1, 01),
					second: Date.now()
			};
			// 	ctrl.getTranscationsBetweenDates() - get transactions made between $scope.dates.first and $scope.dates.second .
			ctrl.getTranscationsBetweenDates = function () {

				console.log("$scope.dates.first: "+ $scope.dates.first);
				console.log("$scope.dates.second: "+ $scope.dates.second);



				ctrl.ebook = $rootScope.curEbook;
				ctrl.clickedOnceTran = false;
				// ctrl.transactionsList - a list to hold all transactions.
				ctrl.transactionsList = [];
				ctrl.sumPurchases = 0;
				ctrl.countPurchases = 0;


				console.log("last transactions button clicked!");
//				if (!ctrl.clickedOnce) {
				ctrl.clickedOnceTran = true;
				// get all transactions between firstDate and secondDate
				$http.get("http://localhost:8080/ExampleServletv3/transactions/firstDate/"+$scope.dates.first.getTime()+'/secondDate/'+$scope.dates.second.getTime())
				.then(function(response) {
					$scope.records = response;
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log('arr length ' + $scope.result.data.length);
					// foreach purchase in period: print it and sum and count it.
					for (var transactionIdx in $scope.result.data) {

						console.log("$scope.result.data[transactionIdx].bookId: " + $scope.result.data[transactionIdx].bookId);
						console.log("$scope.result.data[transactionIdx].email: " + $scope.result.data[transactionIdx].email);
						console.log("$scope.result.data[transactionIdx].datePurchased: " + $scope.result.data[transactionIdx].datePurchased);



						ctrl.transactionsList.push($scope.result.data[transactionIdx]);
						ctrl.countPurchases += 1;
						ctrl.sumPurchases +=  parseFloat($scope.result.data[transactionIdx].price);

					}



					console.log("ctrl.transactionsList:  " + ctrl.transactionsList);




				});



//				}


			}

		}]);