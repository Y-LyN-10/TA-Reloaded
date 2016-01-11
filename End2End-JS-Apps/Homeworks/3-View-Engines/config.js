'use strict';

const Good = require('good'); // Hapi process monitor

module.exports = {
  server: {
    port: process.argv[2] || process.env.PORT || 3000
  },
  
  views: {
    engines: { jade: require('jade') },
    path: __dirname + '/views/pages/',
    compileOptions: { pretty: true }
  },

  // monitoring plugin
  good: {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: { response: '*', log: '*' }
      }]
    }
  }
}
