var myModalReadBody;

(function(angular) {
	'use strict';

	var myModalReadBody = document.getElementById('myModalReadBody');

	function buyReadController($rootScope, $http) {

		var ctrl = this;
		ctrl.curEbook = $rootScope.curEbook;
		ctrl.userEmail = $rootScope.email;

		ctrl.scrolled = function scrolled() {
			ctrl.scrollPositionOfBook = myModalReadBody.scrollTop;
			console.log("scrolled!");
		}


		$("#myModalRead").on("hidden.bs.modal", function () {
			// put your default event here
			console.log("read modal colsed");

			var scrolJSON = {
					scroll: ctrl.scrollPositionOfBook,
					bookId: ctrl.curEbook.id,
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
		bindings: { }
	});



})(window.angular);




