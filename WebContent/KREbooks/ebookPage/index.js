(function(angular) {
  'use strict';
angular.module('heroApp', []).controller('MainCtrl', function MainCtrl() {
  this.ebook = {
    id: "1",
    title: 'Spawnkl;k',
    image: '123',
    price: 5,
    description: " \
     bla bla description bla bla description bla " + " \
      bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
    descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description \
    bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
    descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description "

  };
});
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/