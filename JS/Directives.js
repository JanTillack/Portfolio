var app = angular.module('myApp');

app.directive('changeLanguage', function(){
	return {
		templateUrl: 'components/languagechange/changelanguage.html',
		restrict: 'E',
		scope: {},
		controller: function ($scope, gettextCatalog) {
			$scope.changeLanguage = function(language){
				gettextCatalog.setCurrentLanguage(language);
			}

			$scope.languageList = [
			{
				code: 'en_150',
				label: 'English'
			},
			{
				code: 'pl_PL',
				label: 'Polski'
			},
			{
				code: 'hr_HR',
				label: 'Hrovatka'
			}
			];
		}
	};
})

app.directive('navigation', function() {
	return{
		templateUrl: 'components/nav/nav.html' ,
		restrict: 'E',
		scope: {}
	};	
})

app.directive('myInfo', function(){
	return{
		templateUrl: 'components/aboutme/aboutme.html',
		restrict: 'E',
		scope: {}
	};
})
app.directive('contactInfo', function(){
	return{
		templateUrl: 'components/contact/contact.html',
		restrict: 'E',
		scope: {}
	};
})
app.directive('myExperience', function(){
	return{
		templateUrl: 'components/experience/experience.html',
		restrict: 'E',
		scope: {}
	};
})
app.directive('pageHeader', function(){
	return{
		templateUrl: 'components/header/header.html',
		restrict: 'E',
		scope: {}
	};
})
app.directive('myInterests', function(){
	return{
		templateUrl: 'components/interests/interests.html',
		restrict: 'E',
		scope: {}
	};
})
app.directive('myPlans', function(){
	return{
		templateUrl: 'components/plans/plans.html',
		restrict: 'E',
		scope: {}
	};
})
app.directive('myPortfolio', function(){
	return{
		templateUrl: 'components/portfolio/portfolio.html',
		restrict: 'E',
		scope: {}
	}
})
app.directive('mySkills', function(){
	return{
		templateUrl: 'components/skills/skills.html',
		restrict: 'E',
		scope: {}
	};
})









