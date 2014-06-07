'use strict';

angular.module('nodejsinactionfrontendApp')
    .controller('MainCtrl', ['$scope', 'blogService', function ($scope, blogService) {
        blogService.getArticles(function(response) {
            $scope.articles = response.data;
        })
    }]);
