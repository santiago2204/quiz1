const express = require('express');
const personaRoute = require('./personas.routes');

/* Router() permite acceder a: POST, PUT, DELETE, GET, GET{:id} */
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/personas', personaRoute);
}

module.exports = routerApi;
