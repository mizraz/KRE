angular.module('myApp').controller("ebookPageController", 
['$scope','$rootScope', function($scope, $rootScope) {
    var ctrl = this;
    ctrl.likesUserList = [
      "moshe", "shlomi", "gal"];
    ctrl.ebook = $rootScope.curEbook;
    // {
    //   id: '',
    //   title: '',
    //   price: '',
    //   description: '',
    //   imageUrl: 'gutenberg/56238.jpg'
    // };
    

    // var urlParams = new URLSearchParams(location.search);   
    // console.log("as" + urlParams); // "?post=1234&action=edit"
    
//TODO: implement
      ctrl.isUserPurchased = function() {
        return 1;
      }
//TODO: implement
      ctrl.isUserliked = function() {
        return 0;
      }

    console.log("id: " + ctrl.ebook.id);


}]);



