(function () { 
    'use strict';

    angular.module('myApp.controllers')
        .controller('ProjectDetailsController',
        ['$routeParams', 'projects', 'commits', 'identity', ProjectDetailsController]);

    /**
     * Should show information about the project with the provided id
     * Should show project commits (with server side paging and username filter)
     * Should show link to adding new commit
     * The commits should have client side filtering by only current users commit on the currently shown page
     * The commits should have client side sorting options by from and to creation time on the currently shown page
     * Should give link to the add commit route
     * If the current user is collaborator to the project, he/she can add other users by e-mail to be collaborators to the same project
     * Should show all collaborators to the project

     * @param $routeParams
     * @constructor
     */

    function ProjectDetailsController($routeParams, projects, commits, identity) {
        var vm = this;

        vm.id = $routeParams.id; // $routeParams['id']
        var currentUser = identity.getCurrentUser();

        vm.request = {
            Page: 1
        };

        vm.prevPage = function () {
            if (vm.request.page == 1) {
                return;
            }

            vm.request.page--;
            commits.getCommitsByProject(vm.id, vm.request);
        };

        vm.nextPage = function () {
            if (!vm.commits || vm.commits.length == 0) {
                return;
            }

            vm.request.page++;
            commits.getCommitsByProject(vm.id, vm.request);
        };

        projects.getProjectDetails(vm.id)
            .then(function (project) {
                vm.project = project;
            });

        projects.getProjectCollaborators(vm.id)
            .then(function(collaborators){
               vm.collaborators = collaborators;
            });

        vm.addCollaborator = function (username) {
            projects
                .addCollaborator(username, vm.id)
                .then(function (collaborator) {
                    vm.collaborators.push(collaborator);
                });
        };

        vm.addCommit = function (commit) {
            commit.projectid = vm.id;
            commits.addCommit(commit)
                .then(function (response) {
                    commit.UserName = currentUser.userName;
                    commit.Id = response;

                    vm.commits.push(commit);
                    toastr.success('Commit uploaded! Id: ' + response);
                });
        };

        commits.getCommitsByProject(vm.id, vm.request)
            .then(function (commits) {
                vm.commits = commits;
            })
    }

}());