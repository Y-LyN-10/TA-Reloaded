(function () {
    'use strict';

    function formatDate() {
        return function (input) {
            return moment(input).from(new Date());
        }
    }

    angular
        .module('myApp.filters')
        .filter('formattedDate', [formatDate])
}());