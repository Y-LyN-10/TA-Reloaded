(function(){
    'use strict';

    function projects(data) {
        var PROJECTS_URL = 'api/projects';

        function getLatestProjects() {
            return data.get(PROJECTS_URL);
        }

        function filterProjects(filters) {
            return data.get(PROJECTS_URL + '/all', filters);
        }

        function createProject(project) {
            return data.post(PROJECTS_URL, project);
        }

        function getProjectCollaborators(projectId, request){
            return data.get(PROJECTS_URL + '/collaborators/' + projectId, request);
        }

        function getProjectDetails(projectId){
            return data.get(PROJECTS_URL + '/' + projectId)
        }

        function addCollaborator(collaborator, projectId){
            return data.put(PROJECTS_URL + '/' + projectId, collaborator)
        }

        return {
            getLatestProjects: getLatestProjects,
            createProject: createProject,
            filterProjects: filterProjects,
            getProjectCollaborators: getProjectCollaborators,
            getProjectDetails: getProjectDetails,
            addCollaborator:addCollaborator
        }
    }

    angular.module('myApp.services')
        .factory('projects', ['data', projects])
}());