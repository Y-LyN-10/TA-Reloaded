'use strict';

var mongoose = require('mongoose');
var messageSchema = mongoose.Schema({
    from: String,
    to: String,
    text: String
});

//var Message = module.exports.Message =
mongoose.model('Message', messageSchema);