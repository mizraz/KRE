

window.onbeforeunload = function () {
	var bookContent = document.getElementById('bookContent');	
	console.log(bookContent);
	if(bookContent != undefined) {
		var scrolJSON = {
				scroll: body.scrollTop,
				bookId: window.curBookIdToSendScroll,
				email: window.curEmailToSendScroll
		}	
		var xmlhttpDelClient = new XMLHttpRequest();
		xmlhttpDelClient.open('POST', 'http://localhost:8080/ExampleServletv3/scroll', false);
		xmlhttpDelClient.onreadystatechange = function () {
			/* NOTHING DONE IN HERE*/
		};
		xmlhttpDelClient.send(JSON.stringify(scrolJSON));			
	}
};


(function(angular) {
	'use strict';  
	var app = angular.module('myApp', [/*'ngRoute'*/]);  
	app.run(function($rootScope) {
		$rootScope.color = 'blue';
	});


	app.controller( 'MainCtrl', function MainCtrl($scope, $rootScope, $http) {
		this.userKind = 'admin';
		this.userPrivel = 1;
		this.userId = 1;
		this.userName = "raz"; //TODO: delete if didnt break anything
		$rootScope.curPage = 'catalog/catalog.html';
		$rootScope.curBookContent = 'gutenberg/contents/blab.html';
		$rootScope.nnn = '123';
		$rootScope.curEbook = '1';
		$rootScope.usrBoughtCurBook = true;
		$rootScope.email = 'bruce.wayne@gotham.com';
		$rootScope.userName = 'bruce Wayne';
		$rootScope.userImageUrl = 
			'https://he.wikipedia.org/wiki/%D7%91%D7%90%D7%98%D7%9E%D7%9F_(%D7%96%D7%99%D7%9B%D7%99%D7%95%D7%9F_%D7%9E%D7%93%D7%99%D7%94)';
		$rootScope.purchasesList = [];
		$rootScope.purchasesDict = {};
		this.isShowEbook = false;
		this.isShowCatalog = true;
//		this.curPage = 'catalog/catalog.html';

//		TODO: update all books objects with properties: isPurcased, lastScrool, isLiked etc.  'ebook1' is an example (contains all propeties - still need to update values according to: user, bookId)
//		TODO: check if everything still works without the 'setTimeout'
		setTimeout(function(){ 

			$http.get("http://localhost:8080/ExampleServletv3/purchases/email/"+$rootScope.email) ///name/Alfreds Futterkiste
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
				$rootScope.purchasesList = $scope.result;
				for (var i = 0; i < $scope.records.data.length; i++) {
					$rootScope.purchasesDict["ebook"+ $scope.records.data[i].bookId] = $scope.records.data[i]; 
					console.log("ebook+ $scope.records.data[i].bookId: " + "ebook"+ $scope.records.data[i].bookId);
					console.log("val " + $rootScope.purchasesDict["ebook"+ $scope.records.data[i].bookId].bookId);
				}
			}, 3000)});

		this.fun = function() {
			console.log($rootScope.color);
			$rootScope.color = 'red';
			console.log($rootScope.color);
		};

		this.openEbookPage = function (ebook) {
			this.isShowCatalog = false;

			this.isShowEbook = true;

			console.log("hii");
			console.log(ebook.id);
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
				id: "1",
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




		this.ebook1 = {
				id: 56254,
				title: 'The flowers and gardens of Japan',
				author: 'Cane, Florence Du',
				category: 'text',
				imageUrl: 'gutenberg/56254.jpg',        
				datePublished: new Date(2017, 12,26),
				price: 1,  description: "bla bla",
				isPurchased: 1,
				isLiked: 0
		};

		this.ebook2 = {
				id: 56255,
				title: 'All But Lost Vol 2 of 3 A Novel',
				author: 'Henty, G. A. (George Alfred)',
				category: 'text',
				imageUrl: 'gutenberg/56255.jpg',
				datePublished: new Date(2017, 12,26),
				price: 1,  description: "bla bla",
				isPurchased: 1,
				isLiked: 0
		};

		this.ebook3 = {
				id: 56256,
				title: 'All But Lost Vol 2 of 3 A Novel',
				author: 'Henty, G. A. (George Alfred)',
				category: 'text',
				imageUrl: 'gutenberg/56256.jpg',                
				datePublished: new Date(2017, 12,26),
				price: 1,  description: "bla bla"
		};

		this.ebook4 = {
				id: 56238,
				title: 'Deerfoot on the Prairies',
				author: '	Ellis, Edward Sylvester',
				category: 'text',
				datePublished: new Date(2017, 12,27),
				imageUrl: 'gutenberg/56238.jpg',                

				price: 1,  description: "bla bla"
		};

		this.ebook5 = {
				id: 56262,
				title: 'When We Were Strolling Players in the East',
				author: 'Miln, Louise Jordan',
				category: 'text',
				imageUrl: 'gutenberg/56262.jpg',                                        
				datePublished: new Date(2017, 12,27),
				price: 1,  description: "bla bla"
		};


		this.ebook6 = {
				id: 56260,
				title: 'Through Spain to the Sahara',
				author: 'Betham-Edwards, Matilda',
				category: 'text',
				datePublished: new Date(2017, 12,27),
				imageUrl: 'gutenberg/56260.jpg',                

				price: 1,  description: "bla bla"
		};

		this.ebook7 = {
				id: 56259,
				title: 'In the Line',
				author: 'Dudley, Albertus T.',
				category: 'text',
				imageUrl: 'gutenberg/56259.jpg',                

				datePublished: new Date(2017, 12,27),
				price: 1,  description: "bla bla"
		};

		this.ebook8 = {
				id: 56257,
				title: 'Geschiedenis van Suriname',
				author: 'Wolbers, J.',
				category: 'text',
				releaseDate: 'Release&nbsp;Date',
				datePublished: new Date(2017, 12,27),
				imageUrl: 'gutenberg/56257.jpg',                

				price: 1,  description: "bla bla"
		};



		$rootScope.ebooksDict = {
				ebook56254: {
					id: 56254,
					title: 'The flowers and gardens of Japan',
					author: 'Cane, Florence Du',
					category: 'text',
					imageUrl: 'gutenberg/56254.jpg',        
					datePublished: new Date(2017, 12,26),
					price: 1,  description: "bla bla",
					isPurchased: 1,
					isLiked: 0 },
					ebook56255: {
						id: 56255,
						title: 'All But Lost Vol 2 of 3 A Novel',
						author: 'Henty, G. A. (George Alfred)',
						category: 'text',
						imageUrl: 'gutenberg/56255.jpg',
						datePublished: new Date(2017, 12,26),
						price: 1,  description: "bla bla"},
						ebook56256: {
							id: 56256,
							title: 'All But Lost Vol 2 of 3 A Novel',
							author: 'Henty, G. A. (George Alfred)',
							category: 'text',
							imageUrl: 'gutenberg/56256.jpg',                
							datePublished: new Date(2017, 12,26),
							price: 1,  description: "bla bla"},
							ebook56238: {
								id: 56238,
								title: 'The flowers and gardens of Japan',
								author: 'Cane, Florence Du',
								category: 'text',
								imageUrl: 'gutenberg/56254.jpg',        
								datePublished: new Date(2017, 12,26),
								price: 1,  description: "bla bla"},
								ebook56262: {
									id: 56262,
									title: 'The flowers and gardens of Japan',
									author: 'Cane, Florence Du',
									category: 'text',
									imageUrl: 'gutenberg/56254.jpg',        
									datePublished: new Date(2017, 12,26),
									price: 1,  description: "bla bla"},
									ebook56257: {
										id: 56257,
										title: 'The flowers and gardens of Japan',
										author: 'Cane, Florence Du',
										category: 'text',
										imageUrl: 'gutenberg/56254.jpg',        
										datePublished: new Date(2017, 12,26),
										price: 1,  description: "bla bla"},
										ebook56260: {
											id: 56260,
											title: 'The flowers and gardens of Japan',
											author: 'Cane, Florence Du',
											category: 'text',
											imageUrl: 'gutenberg/56254.jpg',        
											datePublished: new Date(2017, 12,26),
											price: 1,  description: "bla bla"},
		}
	});
})(window.angular);



