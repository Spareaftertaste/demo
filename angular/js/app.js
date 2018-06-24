
var app = angular.module("demo",["ngAnimate","ui.router","ui.bootstrap"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login',{
            url:"/login",
            templateUrl: 'html/login.html',
            controller: 'loginCtrl'
        })
        .state('main',{
            url:"/main",
            templateUrl: 'html/main.html',
            controller: 'mainCtrl'
        })
});