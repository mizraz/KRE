var reviewList;
window.onload = function () {
};

angular.module('myApp').controller("reviewsListAllController", 
		['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
			var ctrl = this;

			ctrl.reviewsPendingList = {}; // a list of all pending approval reviews
			console.log($rootScope.nnn);
			// var urlParams = new URLSearchParams(location.search);   
			// console.log("as" + urlParams); // "?post=1234&action=edit"

			reviewList = document.getElementById('chati');

			$http.get("http://localhost:8080/ExampleServletv3/allReviewsNotApproved") ///name/Alfreds Futterkiste
			.then(function(response) {
				$scope.records = response;
				$scope.result = $scope.records;//this variable will hold the search results
				console.log($scope.result);
				console.log('arr length ' + $scope.result.data.length);
				for (i = 0; i < $scope.result.data.length; ++i) {

					console.log("@@@" + $scope.result.data[i].bookId);

					var profilePicSrc = $scope.result.data[i].userImageUrl;
					var nickname = $scope.result.data[i].userNickname;
					var email = $scope.result.data[i].email;
					var msgText = $scope.result.data[i].description;
					var date = '';
					var msgIdNumberDel = '';
					var bookId = $scope.result.data[i].bookId;
					console.log("543454" + bookId);
					var dateTime = '';
					var newMessage = '';
					drawReview(email, nickname, profilePicSrc, msgText, msgIdNumberDel, bookId, dateTime, newMessage, date);
				}

			});

//			ctrl.approveReview = function() {
//				console.log("review approved!");
//			}

			drawReview = function(email, nickname, profilePicSrc, msgText, msgIdNumberDel, msgId, dateTime, newMessage, date) {
				newMessage = document.createElement('li');
				newMessage.classList.add('message');
				newMessage.setAttribute("id", msgId);
				var msgIdNumber = (parseInt(msgId.replace(/[^0-9]*/, '')) + 1) * 2;
				newMessage.setAttribute("tabindex", msgIdNumber);
//				console.log("222222" + reviewList.innerHTML);
				newMessage.innerHTML = " \
					<div class='sidebar-message'> \
					<img alt='' class='img-circle' src=" + profilePicSrc + "> \
					</div> \n <div class='message-body'> \
					<header class='message-header'> \
					<cite class='message-user-name'>" + nickname + "</cite> \
					<time datetime=" + date + " class='message-time-sent'>" + dateTime + "</time> \
					<div hidden class='email' id='review-email'>" + email + "</div> \
					<div hidden class='email' id='review-book-id'>" + msgId + "</div> \
					<div class='container-button-delete-message'> \
					<button tabindex=" + msgIdNumberDel + " aria-label='Delete message id: " + msgId + "' class='button-delete-message' id='approve-review-btn-" + email + "" + msgId + "'> \
					approve \
					</button> \
					<div class='empty-div-del-btn'> </div> \
					</div> \
					<div class='container-button-delete-message'> \
					<button tabindex=" + msgIdNumberDel + " aria-label='Delete message id: " + msgId + "' class='button-delete-message' id='del-msg-btn-" + msgId + "'> \
					x \
					</button> \
					<div class='empty-div-del-btn'> </div> \
					</div> \
					</header> \
					<article class='message-content'> \
					" + msgText + " \
					</article> \
					</div> \
					<!-- end message -->  \
					";
//				console.log(newMessage);
				reviewList.appendChild(newMessage);

				(function () {
					var localMsgId = email;
					var localBookId = msgId;
					console.log("77777" + localMsgId + localBookId);
					(document.getElementById('approve-review-btn-' + localMsgId+localBookId)).addEventListener('click', function () {
						console.log("!21312213 " + localMsgId);

						var curMsgEmail = email;
						var curBookId = localBookId;

						if (true) {
							console.log("approve clicked email: " + curMsgEmail + " bookId: " + curBookId);


							var reviewApproval =
							{
									email: curMsgEmail,
									bookId: curBookId
							};

							//$http is AngularJS way to do ajax-like communications
							$http.post("http://localhost:8080/ExampleServletv3/reviewApprove", JSON.stringify(reviewApproval)) 
							.then(function(response) {
								$scope.records = response;
								$scope.result = $scope.records;//this variable will hold the search results
							});



						} else {
							console.log("YOU TRIED DEL MESSAGE NOT YOURS! your email vs message email: " + msgId + " " + Babble.email + " " + email);
						}
					});
				}());

			};
		}]);

