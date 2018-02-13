(function (angular) {
  'use strict';

  function ebookDetailsController($scope, $element, $attrs, $rootScope) {
    var ctrl = this;
    ctrl.isCatalogPage = false;
    	
    	if($rootScope.curPage == "catalog/catalog.html" || $rootScope.curPage == "topDeals/topDeals.html") {
    		 ctrl.isCatalogPage = true;
    	}
    	
    	

    ctrl.goToEbookPage = function(){
      // console.log(ebookPar.id);
    	console.log("in gotoEbookPage()");
      console.log($rootScope.color);
      $rootScope.color = 'pink';
      $rootScope.curEbook = ctrl.ebook;
      // ctrl.ebook.id = ebookPar.id;
      // ctrl.ebook.title = ebookPar.title;
      
      // console.log($rootScope.color);
      // console.log($rootScope.curPage);
      console.log(ctrl.curPage);
      ctrl.curPage = 'ebookPage/ebookPage.html';
      console.log(ctrl.curPage);
      $rootScope.curPage = 'ebookPage/ebookPage.html';
      
    };
    

  }


  angular.module('myApp').component('ebookDetails', {
    templateUrl: 'ebookDetails/ebookDetails.html',
    controller: ebookDetailsController,
    bindings: {
      ebook: '='
      
    }
  });
})(window.angular);