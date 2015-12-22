(function () {
    'use strict';

    function config($routeProvider) {

        var PARTIALS_PREFIX = 'views/partials/';
        var VIEW_MODEL_AS = 'vm'; // using John Papa's Design Patterns

        $routeProvider
            .when('/', {
                // Shows the home page
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: VIEW_MODEL_AS
            })
            .when('/unauthorized', {
                // This page should be used in case of unauthorized access to a part of the application
                template: '<h1 class="text-center">YOU ARE NOT AUTHORIZED!</h1>'
            })
            .when('/register', {
                // Should provide form for registering new user
                templateUrl: PARTIALS_PREFIX + 'identity/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/projects', {
                // Show all projects page
                templateUrl: PARTIALS_PREFIX + 'projects/all-projects.html',
                controller: 'ProjectsController',
                controllerAs: VIEW_MODEL_AS
            })
            .when('/projects/add', {
                // TODO: Private
                templateUrl: PARTIALS_PREFIX + 'projects/create-project.html',
                controller: 'CreateProjectController',
                controllerAs: VIEW_MODEL_AS
            })
            .when('/projects/:id/', {
                // TODO: restrict the controller
                // Should show information about the project with the provided id and it's commits
                templateUrl: PARTIALS_PREFIX + 'projects/project-details.html',
                controller: 'ProjectDetailsController',
                controllerAs: VIEW_MODEL_AS
                //access: !!this.getCurrentUser()
            })
            .when('/projects/:id/commits', {
                // TODO: restrict the controller
                // Should have form for adding new commit to the project with the id from the route
                templateUrl: PARTIALS_PREFIX + 'projects/add-commit.html',
                controller: 'AddCommitController',
                controllerAs: VIEW_MODEL_AS
            })
            .when('/commits/:id/', {
                // TODO: restrict the controller
                // Should show information about the commit with the provided id
                templateUrl: PARTIALS_PREFIX + 'commits/commit-details.html',
                controller: 'CommitDetailsController',
                controllerAs: VIEW_MODEL_AS
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.filters', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'kendo.directives', 'myApp.controllers', 'myApp.directives', 'myApp.filters', 'angularMoment']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .value('moment', moment)
        .constant('baseServiceUrl', 'http://spa.bgcoder.com');
}());