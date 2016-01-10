'use strict';

var User = require('mongoose').model('User');

exports.register = function(user){
    return User.create(user);
};