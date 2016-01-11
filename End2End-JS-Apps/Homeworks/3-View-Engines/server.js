'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 3000 });

var rootHandler = function (request, reply) {
  reply.view('index', {
    title: 'Index',
    message: 'Index - Hello World!'
  });
};

var aboutHandler = function (request, reply) {
  reply.view('about', {
    title: 'About',
    message: 'About - Hello World!'
  });
};

server.register(require('vision'), function (err) {
  if (err) { throw err; }

  server.views({
    engines: { jade: require('jade') },
    path: __dirname + '/views/pages/',
    compileOptions: {
      pretty: true
    }
  });

  server.route({ method: 'GET', path: '/', handler: rootHandler });
  server.route({ method: 'GET', path: '/about', handler: aboutHandler });
});

// Start the server
server.start(function (){
  console.log(`Server running at: ${server.info.uri}`);
});
