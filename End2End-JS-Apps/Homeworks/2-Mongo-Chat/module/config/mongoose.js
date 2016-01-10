'use strict';

var mongoose = require('mongoose');
var config = require('./config.json');

function init() {
    mongoose.connect(config.mongoConnectionUrl);
    var db = mongoose.connection;

    db.once('open', function(err) {
        if (err) {
            console.log('MongoDB connection error' + err);
            process.exit(0);
        }

        console.log('[LOG] - Successfully connected to the database');
    });

    db.on('error', function(err){
        console.log('Database error: ' + err);
    });

    require('./../user/user.model.js');
    require('./../chat/chat.model');
}

module.exports = init;