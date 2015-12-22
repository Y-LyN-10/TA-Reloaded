(function () {
    'use strict';

    angular
        .module('myApp.services')
        .factory('licenses', ['data', licenses]);

    function licenses(data) {
        var COMMITS_URL = 'api/licenses';

        function getAll() {
            return data.get(COMMITS_URL);
        }

        return {
            getAll: getAll
        }
    }
}());