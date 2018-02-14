var myModalReadBody;

(function(angular) {
	'use strict';

	var myModalReadBody = document.getElementById('myModalReadBody');

	function buyReadController($rootScope, $http, $scope) {


		$scope.$on('$viewContentLoaded', function() {
			ctrl.isLiked = $rootScope.purchasesDict["ebook"+ ctrl.curEbook.id].isLiked;	
			});
		
		
		var ctrl = this;

		setTimeout(function(){
			ctrl.curEbook = ctrl.ebook;
			ctrl.userEmail = $rootScope.email;
			ctrl.userPurchases = [];
			console.log("ctrl.ebook: " + ctrl.ebook.id);
			console.log("$rootScope.purchasesDict[ebook+ ctrl.curEbook.id] "+ $rootScope.purchasesDict["ebook"+ ctrl.curEbook.id].bookId);
			if ($rootScope.purchasesDict["ebook"+ ctrl.curEbook.id].bookId == undefined) {
				ctrl.usrBoughtCurBook = false;
				ctrl.isLiked = false;
			} else
			{
				ctrl.usrBoughtCurBook = true;
				console.log("$rootScope.purchasesDict[ebook+ ctrl.curEbook.id].isLiked" + $rootScope.purchasesDict["ebook"+ ctrl.curEbook.id].isLiked);
				if ($rootScope.purchasesDict["ebook"+ ctrl.curEbook.id].isLiked == '1' || $rootScope.purchasesDict["ebook"+ ctrl.curEbook.id].isLiked == 1) {
					ctrl.isLiked = true;
				}
				else {
					ctrl.isLiked = false;
				}

			}			

			console.log("lka " + ctrl.usrBoughtCurBook);		
			console.log("lka liked  " + ctrl.isLiked);


		}, 1000);



		ctrl.scrolled = function scrolled() {
			ctrl.scrollPositionOfBook = myModalReadBody.scrollTop;
			console.log("scrolled!");
		}


		ctrl.clickedRead = function clickedRead() {
			$("#myModalScroll").modal();
		};

		ctrl.goToLastScroll = function (isToGoToLastScroll) {

			$('#myModalScroll').modal('hide');
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();

			setTimeout(function(){

				var myModalReadBody = document.getElementById('myModalReadBody');

				$rootScope.curPage = ctrl.curReadEbook;
				ctrl.clickedRead();

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
//				console.log('$rootScope.curEbook: ' + $rootScope.curEbook.id);


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
						ctrl.userPurchases.push(curEbook);

						console.log('!@#@#!' + curEbook);
						console.log("@@@" + $scope.result.data[0].bookId);

//						console.log(curEbook);
//						ctrl.ebookContentUrl = ctrl.ebookContentUrl.concat(curEbook.id);					
//						ctrl.contentUrlDic.ebookIdDict = ctrl.ebookContentUrl; 


						var profilePicSrc = $scope.result.data[0].userImageUrl;
						var name = $scope.result.data[0].userName;
						var email = $scope.result.data[0].email;
						var curScroll = $scope.result.data[0].currentScroll;
						var purchaseDate = $scope.result.data[0].datePurchased;
						var isLiked = $scope.result.data[0].isLiked;					
					} else {
						$rootScope.usrBoughtCurBook = false;
					}
					$rootScope.curPage = ctrl.curReadEbook;
					console.log("12345:  " + curScroll);


					setTimeout(function(){

						var bodyId = document.getElementById('body');

						if (isToGoToLastScroll) {
							console.log("scroll : " + curScroll);
							body.scrollTop = curScroll;
							window.curBookIdToSendScroll = ctrl.ebook.id;
							window.curEmailToSendScroll = $rootScope.email;
//							var bookContentBody = document.getElementById('bookContentBody');
//							bookContentBody.addEventListener("unload", function() {
//							console.log("bye bye");
//							});	
							console.log("yes");
						}
						else {
							console.log("no");	
						}

					}, 1000);

					$('body').removeClass('modal-open');
					$('.modal-backdrop').remove();

				});


			}, 1000);



//			myModalReadBody.scrollTop = 1700;

		};


		ctrl.submitLike = function() {
			console.log("clicked like;");
			
			if(ctrl.ebook.isLiked == 1) {
				ctrl.ebook.isLiked = 0;
			} else {
				ctrl.ebook.isLiked = 1;
			}
			
			
			console.log(ctrl.userr);
			console.log(ctrl.ebook.isLiked);

			var like =
			{
					email: $rootScope.email,
					bookId: ctrl.ebook.id,
					userName: $rootScope.userName,
					isLiked: ctrl.ebook.isLiked
			};
			console.log(like.isLiked);


			//$http is AngularJS way to do ajax-like communications
			$http.post("http://localhost:8080/ExampleServletv3/newLike", JSON.stringify(like)) 
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
			});
		};


		//TODO: fix this. save last scroll
//		$("#myModalRead").on("hidden.bs.modal", function () {
//		// put your default event here
//		console.log("read modal colsed");

//		var scrolJSON = {
//		scroll: ctrl.scrollPositionOfBook,
//		bookId: ctrl.ebook.id,
//		email: ctrl.userEmail

//		}
//		$http.post("http://localhost:8080/ExampleServletv3/scroll", JSON.stringify(scrolJSON)) 
//		.then(function(response) {
////		$scope.records = response;
////		$scope.result = $scope.records;//this variable will hold the search results
//		});


//		});

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




