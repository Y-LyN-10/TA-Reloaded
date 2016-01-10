require('./module/config/mongoose')();

var chat = require('./module/chat/chat.controller');
var user = require('./module/user/user.controller');

/***
 * Slightly modified code from the homework's example for better separation
 ***/

//inserts a new user records into the DB
user.register({
    user: 'DonchoMinkov',
    pass: '123456q'
}).then(function (user) {
    console.log('User successfully registered!');
}, function (err) {
    // Probably - already existing user in the database
    console.log(err.message);
});

//inserts a new message record into the DB
//the message has two references to users (from and to)
chat.sendMessage({
    from: 'DonchoMinkov',
    to: 'NikolayKostov',
    text: 'Hey, Niki!'
}).then(function (data) {
    console.log(`Succesfully saved message from ${data.from}`);
});

//returns an array with all messages between two users
chat.getMessages({
    with: 'DonchoMinkov',
    and: 'NikolayKostov'
}).then(function (messages) {
    console.log(`${messages.length} messages found`);
});