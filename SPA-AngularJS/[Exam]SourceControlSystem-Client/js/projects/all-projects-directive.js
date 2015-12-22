(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .directive('allProjects', [allProjects]);

    function allProjects() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/all-projects-directive.html'
        }
    }

}());