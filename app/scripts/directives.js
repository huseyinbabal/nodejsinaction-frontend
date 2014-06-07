angular.module('nodejsinactionfrontendApp')
    .directive('ngArticle', function() {
        return {
            restrict: 'E',
            scope: {article: '='},
            templateUrl: 'views/article.html'
        }
    })