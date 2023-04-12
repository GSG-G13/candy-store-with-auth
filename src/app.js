const express = require('express');
// const middleware = require('./middleware/appMiddleware');
const compression = require('compression');
const cookieParse = require('cookie-parser');
const { join } = require('path');
const router = require('./routes/router');
require('env2')('.env');

const app = express();


// middleware(app);

app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.disabled('x-powered-by');
  app.use(cookieParse());
  app.use(express.static(join(__dirname,'..','public')));
  app.use(router);

app.set('port', process.env.PORT || 5000);

module.exports = app;