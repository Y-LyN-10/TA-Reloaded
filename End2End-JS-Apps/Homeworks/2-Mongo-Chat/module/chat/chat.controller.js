'use strict';

var Message = require('mongoose').model('Message');

exports.sendMessage = function(message){
    return Message.create(message);
};

exports.getMessages = function(query){
    var criteria =  {
        $or:[{
            'from': query.with,
            'to': query.and
        }, {
            'from': query.and,
            'to': query.with
        }]
    };

    return Message.find(criteria, '-_id');
};