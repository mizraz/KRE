//window.onload = function() {
//console.log("123554!!!!!!!4" + $rootScope.result.data[1].bookId);

//$http.get("http://localhost:8080/ExampleServletv3/ebooks")
//.then(function(response) {
//$rootScope.records = response;
//$rootScope.result = $rootScope.records;//this variable will hold the search results
////ebook1["bookId"] = $rootScope.result[0].bookId;
//console.log($rootScope.result);
//console.log("123554!!!!!!!4" + $rootScope.result.data[1].bookId);

//});	

//};

//window.onbeforeunload = function () {
//	var bookContent = document.getElementById('bookContent');	
//	console.log(bookContent);
//	if(bookContent != undefined) {
//		var scrolJSON = {
//				scroll: body.scrollTop,
//				bookId: window.curBookIdToSendScroll,
//				email: window.curEmailToSendScroll
//		}	
//		var xmlhttpDelClient = new XMLHttpRequest();
//		xmlhttpDelClient.open('POST', 'http://localhost:8080/ExampleServletv3/scroll', false);
//		xmlhttpDelClient.onreadystatechange = function () {
//			/* NOTHING DONE IN HERE*/
//		};
//		xmlhttpDelClient.send(JSON.stringify(scrolJSON));			
//	}
//};


(function(angular) {
	'use strict';  
	var app = angular.module('myApp', [/*'ngRoute'*/]);  
	app.run(function($rootScope, $http) {
		$rootScope.color = 'blue';

//		$http.get("http://localhost:8080/ExampleServletv3/ebooks")
//		.then(function(response) {
//		$rootScope.records = response;
//		$rootScope.result = $rootScope.records;//this variable will hold the search results
////		ebook1["bookId"] = $rootScope.result[0].bookId;
//		console.log($rootScope.result);
//		console.log("1235545344" + $rootScope.result.data[1].bookId);

//		});



	});


	app.controller( 'MainCtrl', function MainCtrl($scope, $rootScope, $http) {


		var ctrl = this;

		
//		 this.$onInit = function () {

				this.userKind = 'admin';
				this.userPrivel = 1;
				this.userId = 1;
				this.userName = "raz"; //TODO: delete if didnt break anything
				$rootScope.curPage = 'html/catalog.html';
			 
			 
			 $rootScope.listtt = [];
				$rootScope.ebooksDict = {};
				$("#myModalRegisterLogin").modal();
				
				$rootScope.userLogedIn = {
						email: '',
						userNickname: '',
						userName: '',
						userImageUrl: '',
						phoneNumber: '',
						description: '',
						address: ''
				};
				
				
				
				$rootScope.modalCurPath = 'login.html';
				$rootScope.curEbook = '1';
				$rootScope.usrBoughtCurBook = true;
				
				$rootScope.purchasesList = [];
				$rootScope.purchasesDict = {};
				$rootScope.userPurchases = [];				

//			}
		
		
		

		this.isShowEbook = false;
		this.isShowCatalog = true;
//		this.curPage = 'catalog/catalog.html';

//		TODO: update all books objects with properties: isPurcased, lastScrool, isLiked etc.  'ebook1' is an example (contains all propeties - still need to update values according to: user, bookId)
//		TODO: check if everything still works without the 'setTimeout'



//		setTimeout(function(){ 

//		$http.get("http://localhost:8080/ExampleServletv3/purchases/email/"+$rootScope.email) ///name/Alfreds Futterkiste
//		.then(function(response) {
//		$scope.records = response;
//		$scope.result = $scope.records;//this variable will hold the search results
//		$rootScope.purchasesList = $scope.result;
//		for (var i = 0; i < $scope.records.data.length; i++) {
//		$rootScope.purchasesDict["ebook"+ $scope.records.data[i].bookId] = $scope.records.data[i]; 
//		console.log("ebook+ $scope.records.data[i].bookId: " + "ebook"+ $scope.records.data[i].bookId);
//		console.log("val " + $rootScope.purchasesDict["ebook"+ $scope.records.data[i].bookId].bookId);
//		}
//		}, 3000)});

		this.fun = function() {
			console.log($rootScope.color);
			$rootScope.color = 'red';
			console.log($rootScope.color);
		};

		this.openEbookPage = function (ebook) {
			this.isShowCatalog = false;

			this.isShowEbook = true;

			console.log("hii");
			console.log(ebook.bookId);
			console.log("ebook" + $scope.isShowEbook);
			console.log("cat" + $scope.isShowCatalog);
		}

		this.closeEbookPage = function () {
			console.log("hii");


			this.isShowCatalog = true;

			this.isShowEbook = false;
			console.log(" this.isShowEbook " + $scope.isShowEbook);

		}


		/*ebook details: ***********************************************************************************************************/

		this.ebook = {
				bookId: "1",
				title: 'Spawnkl;kjkfldafklajd;dj',
				image: '123',
				price: 5,
				description: " \
					bla bla description bla bla description bla " + " \
					bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
					descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description \
					bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
					descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description "

		};


		console.log("eeeeee");
//		this.ebook1 = {
//		bookId: 56254,
//		title: 'The flowers and gardens of Japan',
//		author: 'Cane, Florence Du',
//		category: 'text',
//		imageUrl: 'resources/gutenberg/56254.jpg',        
//		datePublished: new Date(2017, 12,26),
//		price: 1,  description: "bla bla",
//		isPurchased: 1,
//		isLiked: 0
//		};
//		this.ebook1["bookId"] = $rootScope.result.data[1].bookId;


		
		
		
		

	});
})(window.angular);



