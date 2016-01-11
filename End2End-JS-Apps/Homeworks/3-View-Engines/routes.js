module.exports = function(server){
  'use strict';
  
  server.route({ method: 'GET', path: '/',          handler: index,     config: {description: 'Home Page'}});
  server.route({ method: 'GET', path: '/phones',    handler: phones,    config: {description: 'Smart Phones'}});
  server.route({ method: 'GET', path: '/tablets',   handler: tablets,   config: {description: 'Tablets'}});
  server.route({ method: 'GET', path: '/wearables', handler: wearables, config: {description: 'Wearables'}});

  // Generate the navbar dynamically
  var table = server.table();
  var pages = [];

  table[0].table.forEach(t => {
    pages.push({
      title: t.public.settings.description,
      path: t.public.path
    });
  });

  pages.sort((a, b) => {
    if (a.title > b.title) { return  1; }
    if (a.title < b.title) { return -1; }
    return 0;
  });
  
  function index (request, reply) {
    reply.view('home', {pages, greeting: "Welcome!"});
  }

  function phones(request, reply) {
    reply.view('phones', {pages});
  }

  function tablets(request, reply) {
    reply.view('tablets', {pages});
  }

  function wearables(request, reply) {
    reply.view('wearables', {pages});
  }
};

