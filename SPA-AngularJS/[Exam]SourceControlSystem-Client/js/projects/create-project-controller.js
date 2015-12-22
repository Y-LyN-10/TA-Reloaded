(function () {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller('CreateProjectController',
        ['$location', 'projects', 'licenses', 'identity', CreateProjectController]);

    /**
     * Available only for registered users
     * Should have form with validation for adding new project
     * Should redirect to the projects page after successful creation
     * Use drop-down lists where possible
     * Use appropriate UI controls
     *
     * @param $location
     * @param projects
     * @param licenses
     * @constructor
     */

    function CreateProjectController($location, projects, licenses, identity) {
        var vm = this;
        var currentUser = identity.getCurrentUser();
        vm.collaborator = {};

        if(!identity.isAuthenticated()){
            $location.path('/unauthorized');
        }

        licenses.getAll()
            .then(function (allLicenses) {
                vm.licenses = allLicenses;
            });

        vm.createProject = function (newProject) {
            newProject.licenseid = parseInt(newProject.licenseid);
            newProject.isPrivate = newProject.isPrivate || false;

            projects.createProject(newProject)
                .then(function (projectId) {
                    $location.path('/projects/' + projectId);
                    toastr.success('Project added');
                }).then(function () {
                    //projects.addCollaborator(currentUser.userName)
                    //    .then(function () {
                    //    })
                });


        };
    }

}());