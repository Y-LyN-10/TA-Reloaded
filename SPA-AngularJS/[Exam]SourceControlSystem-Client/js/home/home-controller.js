(function () {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller('HomeController', ['statistics', 'projects', 'commits', HomeController]);

    /**
     * Shows the home page
     * Shows latest 10 public software projects
     * Shows latest 10 public source code commits
     * Shows statistics for the projects, commits and users (you should cache these statistics on the client until next refresh of the application)
     * Shows register and login (or logged user, if any)
     * Shows links to projects and commits pages (links can be in any manner)

     * @param statistics
     * @param projects
     * @param commits
     * @access Public
     * @constructor
     */

    function HomeController(statistics, projects, commits) {
        var vm = this;

        statistics.getStats()
            .then(function (stats) {
                vm.stats = stats;
            });

        projects.getLatestProjects()
            .then(function (publicProjects) {
                vm.projects = publicProjects;
            });

        commits.getPublicCommits()
            .then(function (publicCommits) {
                vm.commits = publicCommits;
            });
    }

}());