'use strict';

angular.module('nodejsinactionfrontendApp')
    .controller('ArticleCtrl', ['$scope', '$http', '$routeParams', 'blogService', function ($scope, $http, $routeParams, blogService) {
        var restUrl = "http://localhost:3000/rest";

        $scope.submitNewArticle = function() {
            $http.post(restUrl + "/article/create", {title: $scope.articleForm.title, content: $scope.articleForm.content})
                .success(function(response) {
                    alert(response.data.data);
                })
        }
    }]);
