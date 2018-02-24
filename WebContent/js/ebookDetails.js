(function (angular) {
	'use strict';

	function ebookDetailsController($scope, $rootScope) {


		var ctrl = this;
		console.log("ebookDetailsController");
		this.$onInit = function() {
			console.log("ebookDetailsController onINIT");

			ctrl.isCatalogPage = false;

			if($rootScope.curPage == "html/catalog.html" || $rootScope.curPage == "html/topDeals.html") {
				ctrl.isCatalogPage = true;
			}

			ctrl.goToEbookPage = function(){
				console.log("in gotoEbookPage()");
				console.log("$rootScope.color" + $rootScope.color);
				$rootScope.color = 'pink';
				$rootScope.curEbook = ctrl.ebook;
				$rootScope.isLikeddd = true;

				console.log("ctrl.ebook.bookId: " + ctrl.ebook.bookId);

				if($rootScope.curPage != "html/userPurchases.html") {

					console.log("ctrl.curPage " + ctrl.curPage);
					ctrl.curPage = 'html/ebookPage.html';
					console.log("ctrl.curPage " + ctrl.curPage);
					$rootScope.curPage = 'html/ebookPage.html';
				}

			};    	

		};


	}


	angular.module('myApp').component('ebookDetails', {
		templateUrl: 'html/ebookDetails.html',
		controller: ebookDetailsController,
		bindings: {
			ebook: '='

		}
	});
})(window.angular);