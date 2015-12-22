(function () {
    'use strict';

    angular.module('myApp.controllers').controller('SignUpCtrl', ['$scope', '$location', 'auth', 'notifier', RegisterController]);

    /**
     * Should provide form for registering new user
     * Validate the fields as much as possible on the form
     * Should redirect to the home page after successful registration
     *
     * @todo Validate Forms as much as possible
     * @param $scope
     * @param $location
     * @param auth
     * @param notifier
     * @access Public
     * @constructor
     */
    function RegisterController($scope, $location, auth, notifier) {
        $scope.signup = function (user) {
            auth.signup(user).then(function () {
                notifier.success('Registration successful!');
                $location.path('/');
            }, function (error) {
                notifier.error(error);
            })
        }
    }
}());