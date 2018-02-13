var myModalReadBody;

(function(angular) {
	'use strict';

	var myModalReadBody = document.getElementById('myModalReadBody');

	function buyReadController($rootScope, $http, $scope) {

		var ctrl = this;
		ctrl.curEbook = ctrl.ebook;
		ctrl.userEmail = $rootScope.email;
		ctrl.userPurchases = [];		
		ctrl.usrBoughtCurBook = $rootScope.usrBoughtCurBook;

		ctrl.scrolled = function scrolled() {
			ctrl.scrollPositionOfBook = myModalReadBody.scrollTop;
			console.log("scrolled!");
		}

//		ctrl.updateGlobalCurRead = function() {
//			ctrl.curReadEbook = 'gutenberg/contents/' + bookIdClickedToRead + '.html';
//			var ebookIdDict = "ebook" + bookIdClickedToRead;
//			ctrl.curReadEbookScroll = $rootScope.ebooksDict[ebookIdDict].currentScroll;
//			console.log(ctrl.curReadEbookScroll);
//		};
		
		ctrl.clickedRead = function clickedRead() {
			var bookIdClickedToRead = ctrl.ebook.id;
			console.log("3333" + bookIdClickedToRead);
			ctrl.curReadEbook = 'gutenberg/contents/' + bookIdClickedToRead + '.html';
			var ebookIdDict = "ebook" + bookIdClickedToRead;
			console.log("2222" + ebookIdDict);
			ctrl.curReadEbookScroll = $rootScope.ebooksDict[ebookIdDict].currentScroll;
			console.log(ctrl.curReadEbookScroll);
			console.log("ctrl.curReadEbook " + ctrl.curReadEbook);
			
			//ctrl.ebook = $rootScope.curEbook;
			ctrl.email = $rootScope.email;
//			console.log('$rootScope.curEbook: ' + $rootScope.curEbook.id);
			
			$http.get("http://localhost:8080/ExampleServletv3/purchase/email/"+ctrl.email + "/bookId/" + bookIdClickedToRead)
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
				
				console.log($scope.result);
				console.log('arr length ' + $scope.result.data.length);
				if ($scope.result.data.length != 0) {
					//the size of array must be 1.
					var ebookIdDict = "ebook" + $scope.result.data[0].bookId;
					console.log(ebookIdDict);
					var curEbook = $rootScope.ebooksDict[ebookIdDict];
//					console.log(curEbook);
					ctrl.userPurchases.push(curEbook);
					console.log('!@#@#!' + curEbook);
//					ctrl.ebookContentUrl = ctrl.ebookContentUrl.concat(curEbook.id);					
//					ctrl.contentUrlDic.ebookIdDict = ctrl.ebookContentUrl; 

					console.log("@@@" + $scope.result.data[0].bookId);

					var profilePicSrc = $scope.result.data[0].userImageUrl;
					var name = $scope.result.data[0].userName;
					var email = $scope.result.data[0].email;
					var curScroll = $scope.result.data[0].scroll;
					var purchaseDate = $scope.result.data[0].datePurchased;
					var isLiked = $scope.result.data[0].isLiked;					
				} else {
					$rootScope.usrBoughtCurBook = false;
				}

			});
		};
		
		
		
		
		
		$("#myModalRead").on("hidden.bs.modal", function () {
			// put your default event here
			console.log("read modal colsed");

			var scrolJSON = {
					scroll: ctrl.scrollPositionOfBook,
					bookId: ctrl.ebook.id,
					email: ctrl.userEmail

			}
			$http.post("http://localhost:8080/ExampleServletv3/scroll", JSON.stringify(scrolJSON)) 
			.then(function(response) {
//				$scope.records = response;
//				$scope.result = $scope.records;//this variable will hold the search results
			});


		});

//		TODO: check if need this, currently handled by modal hidden trigger.
//		window.onbeforeunload = function ($scope, $element, $attrs, $http) {
//		var curScroll = myModalReadBody.scrollTop;
//		//TODO: post ajax send scroll with: user email, scroll, bookId
//		}

	};


	angular.module('myApp').component('buyRead', {
		controller: buyReadController,
		templateUrl: 'ebookPage/buyRead/buyRead.html',
		bindings: {
			ebook: '='
		}
	});



})(window.angular);




