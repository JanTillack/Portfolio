var app = angular.module('myApp', ['ui.router', 'gettext']);

app.run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('pl_PL');
});
