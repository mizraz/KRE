(function(angular) {
  'use strict';


function navbarFixedController($scope, $element, $attrs, $rootScope) {
var ctrl = this;

ctrl.funn = function(par){
  console.log($rootScope.color);
  $rootScope.color = 'pink';
  console.log($rootScope.curPage);
  $scope.curPage = 'topDeals/topDeals.html';
  $rootScope.curPage = par;
  console.log($rootScope.color);
  console.log('!!!' + $scope.curPage);
  ctrl.curPage = par;
  
  
  
};



};


angular.module('myApp').component('navbarCompFixed', {
	
  templateUrl: 'navbarCompFixed/navbarCompFixed.html',
  controller: navbarFixedController,
  bindings: {
    userId: '=',
    userPrivel: '=',
    isShowCatalog: '=',
    isShowEbook: '=',
    curPage: '='

  }//,
  // closeEbookPage: function () {
  //   console.log("hii");
    
  
  //   ctrl.isShowCatalog = true;
    
  //   ctrl.isShowEbook = false;
  //   console.log(" this.isShowEbook " + $scope.isShowEbook);
  
  // }



});





})(window.angular);

