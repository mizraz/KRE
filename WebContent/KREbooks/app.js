
(function(angular) {
    'use strict';  
var app = angular.module('myApp', [/*'ngRoute'*/]);  
app.run(function($rootScope) {
    $rootScope.color = 'blue';
});

app.controller( 'MainCtrl', function MainCtrl($scope, $rootScope) {
this.userKind = 'admin';
this.userPrivel = 1;
this.userId = 1;
this.userName = "raz";
$rootScope.curPage = 'catalog/catalog.html'; 
//this.curPage = 'catalog/catalog.html';
 

this.fun = function() {
    console.log($rootScope.color);
    $rootScope.color = 'red';
    console.log($rootScope.color);
    
};

$rootScope.nnn = '123';
$rootScope.curEbook = '1';

$rootScope.email = 'bruceWayne@batman.com';
$rootScope.userName = 'bruce Wayne';
$rootScope.userImageUrl = 
	'https://he.wikipedia.org/wiki/%D7%91%D7%90%D7%98%D7%9E%D7%9F_(%D7%96%D7%99%D7%9B%D7%99%D7%95%D7%9F_%D7%9E%D7%93%D7%99%D7%94)';


    this.isShowEbook = false;
    this.isShowCatalog = true;
    
    this.openEbookPage = function (ebook) {
        this.isShowCatalog = false;
        
        this.isShowEbook = true;
        
        console.log("hii");
        console.log(ebook.id);
        console.log("ebook" + $scope.isShowEbook);
        console.log("cat" + $scope.isShowCatalog);
    }

    this.closeEbookPage = function () {
        console.log("hii");
        
  
        this.isShowCatalog = true;
        
        this.isShowEbook = false;
        console.log(" this.isShowEbook " + $scope.isShowEbook);
  
    }




    this.ebook = {
        id: "1",
        title: 'Spawnkl;kjkfldafklajd;dj',
        image: '123',
        price: 5,
        description: " \
         bla bla description bla bla description bla " + " \
          bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
        descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description \
        bla description bla bla description bla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla \
        descriptionbla bla descriptionbla bla descriptionbla bla descriptionbla bla description "
    
      };

      


      this.ebook1 = {
        id: 56254,
        title: 'The flowers and gardens of Japan',
        author: 'Cane, Florence Du',
        category: 'text',
        imageUrl: 'gutenberg/56254.jpg',        
        datePublished: new Date(2017, 12,26),
        price: 1
        };

        this.ebook2 = {
            id: 56255,
            title: 'All But Lost Vol 2 of 3 A Novel',
            author: 'Henty, G. A. (George Alfred)',
            category: 'text',
            imageUrl: 'gutenberg/56255.jpg',
            datePublished: new Date(2017, 12,26),
            price: 1
            };

            this.ebook3 = {
                id: 56256,
                title: 'All But Lost Vol 2 of 3 A Novel',
                author: 'Henty, G. A. (George Alfred)',
                category: 'text',
                imageUrl: 'gutenberg/56256.jpg',                
                datePublished: new Date(2017, 12,26),
                price: 1
                };

                this.ebook4 = {
                    id: 56238,
                    title: 'Deerfoot on the Prairies',
                    author: '	Ellis, Edward Sylvester',
                    category: 'text',
                    datePublished: new Date(2017, 12,27),
                    imageUrl: 'gutenberg/56238.jpg',                
                    
                    price: 1
                    };

                    this.ebook5 = {
                        id: 56262,
                        title: 'When We Were Strolling Players in the East',
                        author: 'Miln, Louise Jordan',
                        category: 'text',
                        imageUrl: 'gutenberg/56262.jpg',                                        
                        datePublished: new Date(2017, 12,27),
                        price: 1
                        };


                        this.ebook6 = {
                            id: 56260,
                            title: 'Through Spain to the Sahara',
                            author: 'Betham-Edwards, Matilda',
                            category: 'text',
                            datePublished: new Date(2017, 12,27),
                            imageUrl: 'gutenberg/56260.jpg',                
                            
                            price: 1
                            };

                            this.ebook7 = {
                                id: 56259,
                                title: 'In the Line',
                                author: 'Dudley, Albertus T.',
                                category: 'text',
                                imageUrl: 'gutenberg/56259.jpg',                
                                
                                datePublished: new Date(2017, 12,27),
                                price: 1
                                };

                                this.ebook8 = {
                                    id: 56257,
                                    title: 'Geschiedenis van Suriname',
                                    author: 'Wolbers, J.',
                                    category: 'text',
                                    releaseDate: 'Release&nbsp;Date',
                                    datePublished: new Date(2017, 12,27),
                                    imageUrl: 'gutenberg/56257.jpg',                
                                    
                                    price: 1
                                    };


                this.ebooksDict = {
                    ebook11: {
                      id: 56254,
                      title: 'The flowers and gardens of Japan',
                      author: 'Cane, Florence Du',
                      category: 'text',
                      imageUrl: 'gutenberg/56254.jpg',        
                      datePublished: new Date(2017, 12,26),
                      price: 1},
                      ebook22: {
                          id: 56255,
                          title: 'All But Lost Vol 2 of 3 A Novel',
                          author: 'Henty, G. A. (George Alfred)',
                          category: 'text',
                          imageUrl: 'gutenberg/56255.jpg',
                          datePublished: new Date(2017, 12,26),
                          price: 1},
                      ebook33: {
                          id: 56256,
                          title: 'All But Lost Vol 2 of 3 A Novel',
                          author: 'Henty, G. A. (George Alfred)',
                          category: 'text',
                          imageUrl: 'gutenberg/56256.jpg',                
                          datePublished: new Date(2017, 12,26),
                          price: 1},
                }
});
})(window.angular);



