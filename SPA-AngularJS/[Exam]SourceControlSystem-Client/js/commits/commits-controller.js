(function () {
    'use strict';

    function CommitsController(commits, identity) {
        var vm = this;
        vm.identity = identity;
        vm.request = {
            page: 1
        };

        vm.prevPage = function () {
            if (vm.request.page == 1) {
                return;
            }

            vm.request.page--;
            vm.filterCommits();
        };

        vm.nextPage = function () {
            if (!vm.commits || vm.commits.length == 0) {
                return;
            }

            vm.request.page++;
            vm.filterCommits();
        };

        vm.filterCommits = function () {
            commits.filterCommits(vm.request)
                .then(function (filteredCommits) {
                    vm.commits = filteredCommits;
                });
        };

        if(vm.identity.isAuthenticated()){
            vm.commits = vm.filterCommits();
        } else {
            commits.getLatestCommits()
                .then(function (publicCommits) {
                    vm.commits = publicCommits;
                });
        }
    }
    angular.module('myApp.controllers')
        .controller('CommitsController', ['projects', 'identity', CommitsController]);
}());