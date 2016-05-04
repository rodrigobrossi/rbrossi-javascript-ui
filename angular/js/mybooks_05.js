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

myBook.controller('BookCtrl', ['$scope', 'BookFactory', function($scope, bookFactory){
	
	$scope.books = bookFactory.getBooks();

}]);

myBook.factory("BookFactory", [function() {

	var books = [];
	
	books.push({
		title: 'Game of Thrones',
		author: 'George Martin',
		cover: 'images/got.jpg',
		summary: 'Here is the first volume in George R. R. Martin magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.'
	});
	
	books.push({
		title: 'The Lord of the Rings',
		author: 'J.R.R. Tolkien',
		cover: 'images/lotr.jpg',
		summary: 'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.'
	});
	
	books.push({
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		cover: 'images/hobbit.jpg',
		summary: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar.'
	});
	
	books.push({
		title: 'Storm Of Swords',
		author: 'George Martin',
		cover: 'images/stormofswords.jpg',
		summary: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken.'
	});
	
	return {
		getBooks: function(){
			return books;
		}
	};

}]);