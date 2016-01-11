'use strict';

const Hapi = require('hapi');

// Create the server
var config = require('./config.js');
var server = new Hapi.Server();

server.connection(config.server);
server.security = true;

server.register(require('vision'), (err) => {
  if (err) { throw err; }
  
  server.views(config.views);
  require('./routes.js')(server);
});

// Logger plugin
server.register(config.good, (err) => {
  server.start(() => {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});
