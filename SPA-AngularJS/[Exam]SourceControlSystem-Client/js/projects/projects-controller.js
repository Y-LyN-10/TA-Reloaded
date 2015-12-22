(function () {
    'use strict';

    /**
     * @access Public:
     * Should show last 10 added projects
     *
     * @access Private:
     * Should show pages of projects (10 per page) and all filters the API exposes
     * Should give link to the create project route
     * Visualize pictures for the License field
     * Use dropdown lists where possible
     * Visualize dates in human-readable format
     *
     * @param projects
     * @param identity
     * @constructor
     */

    function ProjectsController(projects, identity) {
        var vm = this;
        vm.identity = identity;

        //<!--"Page" (starts from 1),-->
        //<!--"PageSize" (default is 10),-->
        //<!--"Filter" (searches in name and description),-->
        //<!--"OrderBy" ("date", "collaborators" or "name"),-->
        //<!--"OrderType" ("asc" or "desc"),-->
        //<!--"ByUser" (user e-mail),-->
        //<!--"OnlyPublic" (true or false)-->

        vm.request = {
            Page: 1
        };

        vm.prevPage = function () {
            if (vm.request.page == 1) {
                return;
            }

            vm.request.page--;
            vm.filterProjects();
        };

        vm.nextPage = function () {
            if (!vm.projects || vm.projects.length == 0) {
                return;
            }

            vm.request.page++;
            vm.filterProjects();
        };

        vm.filterProjects = function () {
            projects.filterProjects(vm.request)
                .then(function (filteredProjects) {
                    vm.projects = filteredProjects;
                });
        };

        if(vm.identity.isAuthenticated()){
            vm.projects = vm.filterProjects();
        } else {
            projects.getLatestProjects()
                .then(function (publicProjects) {
                    vm.projects = publicProjects;
                });
        }
    }
    angular.module('myApp.controllers')
        .controller('ProjectsController', ['projects', 'identity', ProjectsController]);
}());