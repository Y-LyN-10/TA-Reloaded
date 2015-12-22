(function () {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller('CommitDetailsController',
        ['$routeParams', 'commits', CommitDetailsController]);

    /**
     * Should show information about the commit with the provided id
     *
     * @access Private
     * @param $routeParams
     * @constructor
     */

    function CommitDetailsController($routeParams, commits) {
        var vm = this;
        vm.id = $routeParams.id; // $routeParams['id']

        commits.getCommitDetails(vm.id)
            .then(function (commit) {
                vm.commit = commit;
            });

    }

}());