angular.module('myApp').controller("ebookPageController", 
		['$scope','$rootScope','$http', function($scope, $rootScope, $http) {
			var ctrl = this;
//			ctrl.likesUserList = [
//			"moshe", "shlomi", "gal"];

//			ctrl.usersListString = '';
//			for(x in ctrl.likesUserList) {
//			ctrl.usersListString.append(x+'\n');
//			console.log(x);
//			}

			
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

						if(email == $rootScope.email) {
							$rootScope.ebooksDict["ebook" + ctrl.ebookId].isReviewd = 1;
							$rootScope.isCurEbookReviewed = 1;
						} 

					}

				});
				
			};
			
			

			// {
			//   id: '',
			//   title: '',
			//   price: '',
			//   description: '',
			//   imageUrl: 'gutenberg/56238.jpg'
			// };


			// var urlParams = new URLSearchParams(location.search);   
			// console.log("as" + urlParams); // "?post=1234&action=edit"

//			TODO: implement
			ctrl.isUserPurchased = function() {
				return 1;
			}
//			TODO: implement
			ctrl.isUserliked = function() {
				return 0;
			}

//			console.log("id: " + ctrl.ebook.bookId);


		}]);



