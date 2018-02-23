var myModalReadBody;

(function(angular) {
	'use strict';

	var myModalReadBody = document.getElementById('myModalReadBody');

	function buyReadController($rootScope, $http, $scope) {

		var ctrl = this;

		
		this.$onInit = function() {

			$rootScope.curEbookIdd = '123';

			ctrl.curEbook = ctrl.ebook;
			ctrl.userEmail = $rootScope.email;
			ctrl.userPurchases = [];
			console.log("ctrl.ebook: " + ctrl.ebook.bookId);
			console.log("$rootScope.purchasesDict[ebook+ ctrl.curEbook.bookId] "+ $rootScope.purchasesDict["ebook"+ ctrl.ebook.bookId]);
			if ($rootScope.purchasesDict["ebook"+ ctrl.curEbook.bookId] == undefined) {
				ctrl.usrBoughtCurBook = false;
				ctrl.isLiked = false;
			} else
			{
				ctrl.usrBoughtCurBook = true;
				console.log("$rootScope.purchasesDict[ebook+ ctrl.curEbook.bookId].isLiked" + $rootScope.purchasesDict["ebook"+ ctrl.curEbook.bookId].isLiked);
				if ($rootScope.purchasesDict["ebook"+ ctrl.curEbook.bookId].isLiked == '1' || $rootScope.purchasesDict["ebook"+ ctrl.curEbook.bookId].isLiked == 1) {
					ctrl.isLiked = true;
				}
				else {
					ctrl.isLiked = false;
				}

			}			

			console.log("ctrl.usrBoughtCurBook: " + ctrl.usrBoughtCurBook);		
			console.log("ctrl.isLiked: " + ctrl.isLiked);


		

//			}, 2000);
		};
		
		
		ctrl.clickedBuy = function () {
			
			console.log('clicked buy');
			$rootScope.curPage = 'PaymentForm/payPage.html';
			
		}

//		$scope.$on('$viewContentLoaded', function() {
//			ctrl.isLiked = $rootScope.purchasesDict["ebook"+ ctrl.curEbook.bookId].isLiked;	
//		});


		ctrl.clickedRead = function clickedRead() {
			console.log("clicked Read. ctrl.ebook.bookId " + ctrl.ebook.bookId);
			$rootScope.curEbookIdd = ctrl.ebook.bookId;
			console.log("$rootScope.curEbookIdd " + $rootScope.curEbookIdd);

			
			window.curBookIdToSendScroll = $rootScope.curEbookIdd;
			console.log("ctrl.ebook.bookId " + ctrl.ebook.bookId);
			console.log("window.curBookIdToSendScroll " + window.curBookIdToSendScroll);

			window.curEmailToSendScroll = $rootScope.email;
			
			
			$("#myModalScroll").modal();
		};	
		
		
//		setTimeout(function(){



//		setTimeout(function(){
//			init();
//		}, 1000);

		ctrl.goToLastScroll = function (isToGoToLastScroll) {


			
			$('#myModalScroll').modal('hide');
			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();

//			setTimeout(function(){

//			var myModalReadBody = document.getElementById('myModalReadBody');

			var bookIdClickedToRead = $rootScope.curEbookIdd.bookId;
			console.log("ctrl.ebook.bookId : " + ctrl.ebook.bookId);
			console.log("$rootScope.curEbookIdd : " + $rootScope.curEbookIdd);
			
			ctrl.curReadEbookPath = 'gutenberg/contents/' + $rootScope.curEbookIdd + '.html';
			var ebookIdDict = "ebook" + $rootScope.curEbookIdd;
			console.log("ebookIdDict: " + ebookIdDict);
			ctrl.curReadEbookScroll = $rootScope.ebooksDict[ebookIdDict].currentScroll;
			console.log("ctrl.curReadEbookScroll: " + ctrl.curReadEbookScroll);
			console.log("ctrl.curReadEbookPath: " + ctrl.curReadEbookPath);

			var curScroll = ctrl.curReadEbookScroll;
			
			$rootScope.curPage = ctrl.curReadEbookPath;

//			setTimeout(function(){


			if (isToGoToLastScroll) {
				console.log("scroll : " + curScroll);
				setTimeout(function() {
					
					var bodyId = document.getElementById('bookContent');
					body.scrollTop = curScroll;
					console.log("body.scrollTop : " + body.scrollTop);


					console.log("yes");					
					
				}, 1000);

			}
			else {
				console.log("no");	
			}

//			}, 1000);

			$('body').removeClass('modal-open');
			$('.modal-backdrop').remove();

//			});


//			}, 1000);



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
					bookId: ctrl.ebook.bookId,
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
		
		
		//ctrl.function_to_open_modal_or_page_with_buy_form = function(/* some params if needed (book id etc) if has params, should send them from the html*/) {
			//TODO: implement what happen when user click 'buy' button.
//			possible to open modal: like this '
//			$("#myModalScroll").modal();' and do some other logic
		//};
		
		
		


	};


	angular.module('myApp').component('buyRead', {
		controller: buyReadController,
		templateUrl: 'ebookPage/buyRead/buyRead.html',
		bindings: {
			ebook: '='
		}
	});



})(window.angular);




