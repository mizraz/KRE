
var reviewList;
(function (angular) {
	'use strict';

	function reviewEbookController($scope, $element, $attrs, $http) {
		var ctrl = this;
		ctrl.editMode = false;
		ctrl.clickedOnce = false;
		ctrl.isCollapsed = false;
		ctrl.getAllReviewsOfThisEbook = function(){
			reviewList = document.getElementById('chati');

//			console.log('collapse ' + ctrl.isCollapsed);
			ctrl.isCollapsed = !ctrl.isCollapsed;
//			console.log('collapse ' + ctrl.isCollapsed);

			if (!ctrl.clickedOnce) {
				ctrl.clickedOnce = true;
				$http.get("http://localhost:8080/ExampleServletv3/reviews/bookId/"+ctrl.ebookId) ///name/Alfreds Futterkiste
				.then(function(response) {
					$scope.records = response;
					$scope.result = $scope.records;//this variable will hold the search results
					console.log($scope.result);
					console.log('arr length ' + $scope.result.data.length);
					for (var i = 0; i < $scope.result.data.length; ++i) {

						console.log("@@@" + $scope.result.data[i].bookId);

						var profilePicSrc = $scope.result.data[i].userImageUrl;
						var name = $scope.result.data[i].userName;
						var email = $scope.result.data[i].email;
						var msgText = $scope.result.data[i].description;
						var date = '';
						var msgIdNumberDel = '';
						var msgId = '';
						var dateTime = '';
						var newMessage = '';
						drawReview(email, name, profilePicSrc, msgText, msgIdNumberDel, msgId, dateTime, newMessage, date);
//						console.log(newMessage);
					}

				});
			}

		}

	}

	angular.module('myApp').component('reviewEbook', {
		controller: reviewEbookController,
		templateUrl: 'ebookPage/reviewEbook/reviewEbook.html',
		bindings: {
			userName: '=',
			ebookId: '='
		}
	});


})(window.angular);

drawReview = function(email, name, profilePicSrc, msgText, msgIdNumberDel, msgId, dateTime, newMessage, date) {
	newMessage = document.createElement('li');
	newMessage.classList.add('message');
	newMessage.setAttribute("id", msgId);
	var msgIdNumber = (parseInt(msgId.replace(/[^0-9]*/, '')) + 1) * 2;
	newMessage.setAttribute("tabindex", msgIdNumber);
//	console.log("222222" + reviewList.innerHTML);
	newMessage.innerHTML = " \
		<div class='sidebar-message'> \
		<img alt='' class='img-circle' src=" + profilePicSrc + "> \
		</div> \n <div class='message-body'> \
		<header class='message-header'> \
		<cite class='message-user-name'>" + name + "</cite> \
		<time datetime=" + date + " class='message-time-sent'>" + dateTime + "</time> \
		<div hidden class='email'>" + email + "</div> \
		<div class='container-button-delete-message'> \
		<button tabindex=" + msgIdNumberDel + " aria-label='Delete message id: " + msgId + "' class='button-delete-message' id='approve-review-btn-" + email + msgId +"'> \
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
//	console.log(newMessage);
	reviewList.appendChild(newMessage);	
	
    (function () {
        var localMsgId = email;
        var localBookId = msgId;
        console.log("77777" + localMsgId + localBookId);
        (document.getElementById('approve-review-btn-' + localMsgId+localBookId)).addEventListener('click', function () {

          var curMsgEmail = document.getElementById(localMsgId)
            .getElementsByClassName('email')[0];
          var email = curMsgEmail.innerHTML;
          if (true) {
        	  console.log("approve clicked  " + email);
        	  
        	  
          } else {
            console.log("YOU TRIED DEL MESSAGE NOT YOURS! your email vs message email: " + msgId + " " + Babble.email + " " + email);
          }
        });
      }());
	
	
	
	
//	console.log("33333 " + reviewList.innerHTML);
//	$scope.mmm = newMessage;
};