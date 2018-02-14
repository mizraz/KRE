(function (angular) {
	'use strict';

	function reviewFormController ($scope, $element, $attrs, $http, $rootScope) {
		var ctrl = this;
		ctrl.editMode = false;

		ctrl.userName = $rootScope.userName;
		ctrl.submitReview = function() {
			console.log("clicked;");
			console.log(ctrl.userr);
			console.log("$rootScope.userName: " + $rootScope.userName);

			var review =
			{
					email: $rootScope.email,
					bookId: ctrl.ebookId,
					description: $scope.reviewDescription,
					isApproved: "0",
					userName: $rootScope.userName,
					userImageUrl: $rootScope.userImageUrl

			};

			$http.post("http://localhost:8080/ExampleServletv3/newReview", JSON.stringify(review)) 
			.then(function(response) {

			});
		};

		ctrl.submitLike = function() {
			console.log("clicked;");
			console.log(ctrl.userr);
			var like =
			{
					email: $rootScope.email,
					bookId: ctrl.ebookId,
					userName: $rootScope.userName,
			};

			//$http is AngularJS way to do ajax-like communications
			$http.post("http://localhost:8080/ExampleServletv3/newLike", JSON.stringify(like)) 
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
			});
		};


		makeGrowable(document.querySelector('.ta-message-container'));

		function makeGrowable(container) {
			var area = container.querySelector('textarea');
			var clone = container.querySelector('span');
			area.addEventListener('input', function (e) {
				clone.textContent = area.value + '\n';
			});
		}

	};

	angular.module('myApp').component('reviewForm', {
		controller: reviewFormController,
		templateUrl: 'reviewForm/reviewForm.html',
		bindings: {
			userr: '=',
			ebookId: '='
		}
	});
})(window.angular);