var myBook = angular.module('MyBook', ['ngRoute']);

myBook.config(function($routeProvider){

	$routeProvider.when('/', {
		controller : 'BookListCtrl',
		templateUrl : 'booklist.html'
	}).when('/add', {
		controller : 'BookAddCtrl',
		templateUrl : 'bookadd.html'
	}).otherwise({
		redirectTo : '/'
	});

});

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


myBook.controller('BookListCtrl', ['$scope', '$location', 'BookFactory', function($scope, $location, bookFactory){

	$scope.books = bookFactory.getBooks();

	$scope.addBook = function() {
		$location.path('/add');
	};

}]);

myBook.controller('BookAddCtrl', ['$scope', '$location', 'BookFactory', function($scope, $location, bookFactory){

	$scope.addBook = function() {
		bookFactory.addBook($scope.book);
		$location.path('/');
	};

	$scope.cancelAddBook = function() {
		$location.path('/');
	};

}]);

myBook.service("BookFactory", [function() {

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

		addBook: function(book){
			books.push(book);
		},

		getBooks: function(){
			return books;
		}
	};

}]);
