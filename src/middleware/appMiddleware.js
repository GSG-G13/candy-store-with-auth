// const express = require('express');
// const compression = require('compression');
// const cookieParse = require('cookie-parser');
// const { join } = require('path');
// const router = require('../routes/router');


// module.exports = (app) => {
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
//   app.use(compression());
//   app.disabled('x-powered-by');
//   app.use(cookieParse());
//   app.use(express.static(join(__dirname,'..','public')));
//   app.use(router);
// };