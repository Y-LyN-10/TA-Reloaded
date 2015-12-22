(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .directive('allCommits', [allCommits]);

    function allCommits() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/all-commits-directive.html'
        }
    }

}());