var app = angular.module('testApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider)  {
	$stateProvider
	.state('omnie' , {
		url: 'omnie',
		templateUrl: 'views/omnie.html'
	})
	.state('test2' , {
		url: 'test2',
		template: '<div>A teraz juz w test 2</div>'
	})
});
app.controller('testController', function($scope) {
	$scope.test = 'test';
});
