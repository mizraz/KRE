(function (angular) {
  'use strict';

  function userDetailsController($scope, $element, $attrs, $rootScope) {
    var ctrl = this;
    console.log("in userDetails " + ctrl.user);


    

  }


  angular.module('myApp').component('userDetails', {
    templateUrl: 'admin/userDetails/userDetails.html',
    controller: userDetailsController,
    bindings: {
      user: '='
      
    }
  });
})(window.angular);