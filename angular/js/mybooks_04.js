var myBook = angular.module('MyBook', []);

myBook.directive('book', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
    	  title: '@',
    	  author: '@',
    	  cover: '@'
      },
      replace: true,
      templateUrl: 'bookTemplate.html'
    };
});

myBook.controller('BookCtrl', ['$scope', function($scope){
	
	$scope.gotBook = {
			title: 'Game of Thrones',
			author: 'Martin',
			cover: 'images/got.jpg',
			summary: 'Here is the first volume in George R. R. Martin magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.'
		};

	$scope.lotrBook = {
		title: 'The Lord of the Rings',
		author: 'Tolkien',
		cover: 'images/lotr.jpg',
		summary: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.'
	};
	
}]);