const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//setting up express app
const app = express();

//log requests to console

app.use(logger('dev'));

//Parse incoming data requests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//default catch-all routes
app.get('*', (req, res) => res.status(200).send({
  message:'Welcome to postIt',
}));

module.exports = app;
