(function (angular) {
	'use strict';

	function likesListController($scope, $element, $attrs, $http, $rootScope) {
		var ctrl = this;

		this.$onInit = function () {
			console.log("likes list this.$oninit ");
//			TODO: fix ajax for getting all likes of this book
			$http.get("http://localhost:8080/ExampleServletv3/likes/bookId/"+ctrl.ebookId)
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
				console.log($scope.result);
				console.log('arr length ' + $scope.result.data.length);
				ctrl.countLikers = $scope.result.data.length;
				for (var i = 0; i < $scope.result.data.length; ++i) {

//					console.log("@@@ bookId like" + $scope.result.data[i].bookId);
//					console.log("@@@ name like" + $scope.result.data[i].userName);
					var name = $scope.result.data[i].userNickname;

					ctrl.userNamesList.push(name);
//					console.log("userNamesList[0] " + ctrl.userNamesList[0]);
//					ctrl.usersListHtml = ctrl.usersListHtml.concat('\n', name);
					ctrl.usersListHtml = ctrl.usersListHtml + '\n' +  name;
//					console.log("ctrl.usersListHtml: " + ctrl.usersListHtml);
//					console.log(newMessage);
				}
//				console.log("likers: " + ctrl.usersListHtml);

			});  

		};


		ctrl.clickedAName = function (user){
			console.log("$ctrl.clickedAName($user): " + user);
			$rootScope.curPage = 'catalog/catalog.html';
		}

		ctrl.likeListClickedOnce = false;



		ctrl.editMode = false;
		ctrl.userNamesList = [];



		ctrl.getLikesList = function() {
			$("#myModalLikes").modal();


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


						var name = $scope.result.data[i].userNickname;

						ctrl.userNamesList.push(name);
						console.log("in likesList, userNickname: " + name);
//						console.log("userNamesList[0] " + ctrl.userNamesList[0]);
						ctrl.usersListHtml = ctrl.usersListHtml.concat('\\n', name);

//						console.log(newMessage);
					}
//					console.log("likers: " + ctrl.usersListHtml);

				});    	    		
			}

		};


		ctrl.openModalDialog = function() {
			console.log("clicked;");

		};


		ctrl.usersListHtml = "";

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