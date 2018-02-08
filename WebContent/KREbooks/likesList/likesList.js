(function (angular) {
  'use strict';
  
  function likesListController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.editMode = false;
  
    ctrl.openModalDialog = function() {
        console.log("clicked;");
    };
  
    
    ctrl.usersListHtml = "raz &#010;&#009;-Item 2&#013;&#009; ssmoshe \n roni";

  }

  angular.module('myApp').component('likesList', {
    controller: likesListController,
    templateUrl: 'likesList/likesList.html',
    bindings: {
      usersList: '=',
      isUserliked: '=',
      isUserPurchased: '='
      }

    
  });

  

})(window.angular);