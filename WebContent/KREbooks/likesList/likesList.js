(function (angular) {
	'use strict';

	function likesListController($scope, $element, $attrs, $http) {
		var ctrl = this;
		ctrl.likeListClickedOnce = false;

		ctrl.editMode = false;
		ctrl.userNamesList = [];
		ctrl.getLikesList = function() {
			if (!ctrl.likeListClickedOnce) {
				ctrl.likeListClickedOnce = true;
//				TODO: fix ajax for getting all likes of this book
				$http.get("http://localhost:8080/ExampleServletv3/likes/bookId/"+ctrl.ebookId)
				.then(function(response) {
					$scope.records = response;
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log('arr length ' + $scope.result.data.length);
					for (var i = 0; i < $scope.result.data.length; ++i) {

//						console.log("@@@ bookId like" + $scope.result.data[i].bookId);
//						console.log("@@@ name like" + $scope.result.data[i].userName);
						var name = $scope.result.data[i].userName;

						ctrl.userNamesList.push(name);
//						console.log("userNamesList[0] " + ctrl.userNamesList[0]);
						ctrl.usersListHtml = ctrl.usersListHtml.concat(ctrl.usersListHtml, '\n', name);

//						console.log(newMessage);
					}
//					console.log("likers: " + ctrl.usersListHtml);

				});    	    		
			}

		};


		ctrl.openModalDialog = function() {
			console.log("clicked;");

		};
//		ctrl.usersListHtml ='';
//		for(x in ctrl.usersList) {
//		ctrl.usersListHtml.concat(x);
//		ctrl.usersListHtml.concat('\n');
//		console.log(x);
//		}

		console.log(ctrl.usersListHtml);

		ctrl.usersListHtml = "raz \n ssmoshe \n roni";

		//TODO: check this solution. currently doesn't work because ebookId = undefined
//		var init = function () {

////		TODO: fix ajax for getting all likes of this book
//		$http.get("http://localhost:8080/ExampleServletv3/likes/bookId/"+ctrl.ebookId)
//		.then(function(response) {
//		$scope.records = response;
//		$scope.result = $scope.records;//this variable will hold the search results
//		console.log($scope.result);
//		console.log('arr length ' + $scope.result.data.length);
//		for (var i = 0; i < $scope.result.data.length; ++i) {

//		console.log("@@@ bookId like" + $scope.result.data[i].bookId);
//		console.log("@@@ name like" + $scope.result.data[i].userName);
//		var name = $scope.result.data[i].userName;

//		ctrl.userNamesList.push(name);
//		console.log("userNamesList[0] " + ctrl.userNamesList[0]);
//		ctrl.usersListHtml = ctrl.usersListHtml.concat(ctrl.usersListHtml, '\n', name);

////		console.log(newMessage);
//		}
//		console.log("likers: " + ctrl.usersListHtml);

//		});  


//		};
//		// and fire it after definition
//		init();


	}

	angular.module('myApp').component('likesList', {
		controller: likesListController,
		templateUrl: 'likesList/likesList.html',
		bindings: {
//			usersList: '=',
			ebookId: '=',
			isUserliked: '=',
			isUserPurchased: '=',
			usersListString: '='
		}


	});



})(window.angular);