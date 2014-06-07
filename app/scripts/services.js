angular.module('nodejsinactionfrontendApp')
    .service('blogService', ['$http', function($http) {
        var blogService = {};
        var url = "http://localhost:3000/rest";
        blogService.getArticles = function(cb) {
            $http.get(url + "/articles").then(function(response) {
               cb(response);
            }, function(response) {
                cb(false);
                console.log("Technical Error: " + response);
            });
        };

        blogService.getArticle = function(articleId, cb) {
            $http.get(url + "/article/show/" + articleId).then(function(response) {
                cb(response);
            }, function(response) {
                cb(false);
                console.log("Technical Error: " + response);
            });
        };

        return blogService;
    }])