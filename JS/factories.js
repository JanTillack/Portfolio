var app = angular.module('myApp');

app.factory('languageFactory', function(gettextCatalog){
	var languages = [
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
	var setActiveLanguage = function(language){
		gettextCatalog.setCurrentLanguage(language);
		document.title = gettextCatalog.getString('My Page - Jan Tillack')
	}

	return{
		languages: languages,
		setActiveLanguage: setActiveLanguage
	}
})