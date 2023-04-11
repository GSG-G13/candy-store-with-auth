const express = require('express');
const { join } = require('path');
const router = require('./routes/router');
const {PORT} = require('dotenv');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(join(__dirname,'..','public')));

app.set('port',PORT || 5000);
app.use(router);

// app.get("/", (req, res)=>{
//     console.log(ttt);
// });

module.exports = app;