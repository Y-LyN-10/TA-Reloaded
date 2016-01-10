'use strict';

var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    user: {
        type: String,
        require: '{PATH} is required',
        unique: true
    },
    hashedPassword: String,
    salt: String
});

userSchema.virtual('pass')
    .set(function(password) {
        this._pass = password;
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() {
        return this._pass;
    });

userSchema.methods = {
    makeSalt: function() {
        return require('crypto').randomBytes(16).toString('base64');
    },
    encryptPassword: function(password) {
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return require('crypto').pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }
};

mongoose.model('User', userSchema);