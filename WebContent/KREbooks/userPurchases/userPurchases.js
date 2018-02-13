var reviewList;
window.onload = function () {


};

angular.module('myApp').controller("userPurchasesController", 
		['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
			var ctrl = this;
			// need this instead of adding a field to 'ebook' object, because don't want that every user (that have not bought the ebook will know the url)
//			ctrl.contentUrlDic = {};
			
			
			
			
			console.log($rootScope.nnn);
			ctrl.email = $rootScope.email;
			ctrl.userPurchases = [];
			ctrl.ebookContentUrl = 'gutenberg/contents/';
			// var urlParams = new URLSearchParams(location.search);   
			// console.log("as" + urlParams); // "?post=1234&action=edit"


			$http.get("http://localhost:8080/ExampleServletv3/purchases/email/"+ctrl.email) ///name/Alfreds Futterkiste
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
				
				console.log($scope.result);
				console.log('arr length ' + $scope.result.data.length);
				for (i = 0; i < $scope.result.data.length; ++i) {
					var ebookIdDict = "ebook" + $scope.result.data[i].bookId;
					console.log(ebookIdDict);
					var curEbook = $rootScope.ebooksDict[ebookIdDict];
//					console.log(curEbook);
					ctrl.userPurchases.push(curEbook);
					console.log('!@#@#!' + curEbook);
//					ctrl.ebookContentUrl = ctrl.ebookContentUrl.concat(curEbook.id);					
//					ctrl.contentUrlDic.ebookIdDict = ctrl.ebookContentUrl; 

					console.log("@@@" + $scope.result.data[i].bookId);

					var profilePicSrc = $scope.result.data[i].userImageUrl;
					var name = $scope.result.data[i].userName;
					var email = $scope.result.data[i].email;
					var msgText = $scope.result.data[i].description;
					var date = '';
					var msgIdNumberDel = '';
					var msgId = '';
					var dateTime = '';
					var newMessage = '';
//					ctrl.ebookContentUrl = 'gutenberg/contents/';

				}

			});


			
			
		}]);

