angular.module('myApp').controller("ebookPageController", 
		['$scope','$rootScope','$http', function($scope, $rootScope, $http) {
			var ctrl = this;
			ctrl.ebook = $rootScope.curEbook;

			this.$onInit = function() {
				$rootScope.isCurEbookReviewed = 0;

				$http.get("http://localhost:8080/ExampleServletv3/reviews/bookId/"+ctrl.ebookId) ///name/Alfreds Futterkiste
				.then(function(response) {
					$scope.records = response;
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log("ebookPage.oninit  " );
					console.log('arr length ' + $scope.result.data.length);
					for (var i = 0; i < $scope.result.data.length; ++i) {
						console.log("ebookPage.oninit  " );
						var email = $scope.result.data[i].email;

						if(email == $rootScope.userLogedIn.email) {
							$rootScope.ebooksDict["ebook" + ctrl.ebookId].isReviewd = 1;
							$rootScope.isCurEbookReviewed = 1;
						} 

					}

				});

			};


		}]);



