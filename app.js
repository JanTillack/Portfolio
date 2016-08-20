var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider)  {
	// $stateProvider
	// .state('header' , {
	// 	url: 'components/header.html',
	// 	templateUrl: 'header.html'
	// })
	
});
app.controller('headerController', function($scope) {
	$scope.header = 'header';
});
