angular.module('myApp').controller("usersListController", 
		['$scope','$rootScope','$http', function($scope, $rootScope, $http) {
			var ctrl = this;
			ctrl.usersList = [];
			
			$http.get("http://localhost:8080/ExampleServletv3/usersList") ///name/Alfreds Futterkiste
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
				console.log($scope.result);
				console.log('arr length ' + $scope.result.data.length);
				for (i = 0; i < $scope.result.data.length; ++i) {

					ctrl.usersList.push($scope.result.data[i]);
					console.log("$scope.result.data[i] : " + $scope.result.data[i]);
					console.log("ctrl.usersList[i].name : " + ctrl.usersList[i].userName);
//					console.log("@@@" + $scope.result.data[i].bookId);
//
//					var profilePicSrc = $scope.result.data[i].userImageUrl;
//					var name = $scope.result.data[i].userName;
//					var email = $scope.result.data[i].email;
//					var msgText = $scope.result.data[i].description;
//					var date = '';
//					var msgIdNumberDel = '';
//					var dateTime = '';
//					var newMessage = '';
				}

			});


		}]);



