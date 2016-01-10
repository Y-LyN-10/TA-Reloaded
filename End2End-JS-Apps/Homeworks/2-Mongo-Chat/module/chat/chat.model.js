'use strict';

var mongoose = require('mongoose');
var messageSchema = mongoose.Schema({
    from: String,
    to: String,
    text: String
});

mongoose.model('Message', messageSchema);
