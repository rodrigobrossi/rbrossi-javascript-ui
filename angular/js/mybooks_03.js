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