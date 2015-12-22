(function () {
    'use strict';

    angular
        .module('myApp.services')
        .factory('commits', ['data', commits]);

    function commits(data) {
        var COMMITS_URL = 'api/commits';

        function getPublicCommits() {
            return data.get(COMMITS_URL);
        }

        function getCommitsByProject(projectId){
            return data.get(COMMITS_URL + '/byproject/' + projectId)
        }

        function getCommitDetails(commitId){
            return data.get(COMMITS_URL + '/' + commitId);
        }

        function addCommit(commit){
            return data.post(COMMITS_URL, commit);
        }

        return {
            getPublicCommits: getPublicCommits,
            getCommitsByProject: getCommitsByProject,
            getCommitDetails: getCommitDetails,
            addCommit: addCommit
        }
    }

}());