var app = angular.module('myApp');

app.directive('navigation', function() {
	return{
		templateUrl: 'components/nav/nav.html' ,
		restrict: 'E',
		scope: {}
	};	
})