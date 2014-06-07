'use strict';

angular
    .module('nodejsinactionfrontendApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/article/new', {
                templateUrl: 'views/article-new.html',
                controller: 'ArticleCtrl'
            })
            .when('/article/show/:articleId', {
                templateUrl: 'views/article-detail.html',
                controller: 'ArticleCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
