/* Our main application module is defined here using a single controller which will initiate its scope
and define some behavior.
This module further depends on an helper module 'txtHighlight'.
*/
angular.module('inTableSearchApp',['txtHighlight'])
	.controller('inTableSearchController', ['$scope','$http', 'highlightText', function($scope,$http,highlightText) {
	
    $scope.query = "";//this variable will hold the user's query
	
	//obtain some dataset online
	//$http is AngularJS way to do ajax-like communications
//	$http.get("http://localhost:8080/ExampleServletv3/customers") ///name/Alfreds Futterkiste
//			.success(function(response) {
//			   $scope.records = response;
//			   $scope.result = $scope.records;//this variable will hold the search results
//			});
//	
//	$http.get("http://localhost:8080/ExampleServletv3/reviews/bookId/1") ///name/Alfreds Futterkiste
//	.success(function(response) {
//	   $scope.records = response;
//	   $scope.result = $scope.records;//this variable will hold the search results
//	   console.log($scope.result);
//	});

	
	$http.get("http://localhost:8080/ExampleServletv3/allReviewsNotApproved") ///name/Alfreds Futterkiste
	.success(function(response) {
	   $scope.records = response;
	   $scope.result = $scope.records;//this variable will hold the search results
	   console.log($scope.result);
	   console.log($scope.result[3].description);
	   
	      var profilePicSrc = $scope.result[3].userImageUrl;
	      var name = $scope.result[3].userName;
	      var email = $scope.result[3].email;
	      msgText = $scope.result[3].description;
	      var date = '';
	      var msgIdNumberDel = '';
	      var msgId = '';
	      var dateTime = '';
	    var newMessage = document.createElement('reviewItem');
	    var reviewList = document.createElement('listOfReviews');

	    newMessage.innerHTML = " \
	        <div class='sidebar-message'> \
	        <img alt='' class='img-circle' src=" + profilePicSrc + "> \
	       </div> \n <div class='message-body'> \
	       <header class='message-header'> \
	         <cite class='message-user-name'>" + name + "</cite> \
	         <time datetime=" + date + " class='message-time-sent'>" + dateTime + "</time> \
	         <div hidden class='email'>" + email + "</div> \
	         <div class='container-button-delete-message'> \
	           <button tabindex=" + msgIdNumberDel + " aria-label='Delete message id: " + msgId + "' class='button-delete-message' id='del-msg-btn-" + msgId + "'> \
	             <img src='client/images/delete-btn.png' alt='delete message'> \
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
	    reviewList.appendChild(newMessage);
	   
	});
	
	
	
	var review = {
			email: 'mizraz@gmail.com',
			bookId: '1',
			description: 'good movie',
			isApproved: '0' };
	

	
//	//$http is AngularJS way to do ajax-like communications
//	$http.post("http://localhost:8080/ExampleServletv3/newReview", JSON.stringify(review)) 
//			.success(function(response) {
//			   $scope.records = response;
//			   $scope.result = $scope.records;//this variable will hold the search results
//			});
			
	//this method will be called upon change in the text typed by the user in the searchbox
	$scope.search = function(){
	    if (!$scope.query || $scope.query.length == 0){
		    //initially we show all table data
			$scope.result = $scope.records;
		}else{
		    var qstr = $scope.query.toLowerCase();
			$scope.result = [];
			for (x in $scope.records){
				//check for a match (up to a lowercasing difference)
				if ($scope.records[x].Name.toLowerCase().match(qstr) ||
					$scope.records[x].City.toLowerCase().match(qstr) ||
					$scope.records[x].Country.toLowerCase().match(qstr))
				{
					$scope.result.push($scope.records[x]); //add record to search result
				}
			}
	   }
	};
	
	//delegate the text highlighting task to an external helper service 
	$scope.hlight = function(text, qstr){
		return highlightText.highlight(text, qstr);
	};
	
}]);

