var express = require('express');

var app = express();
app.use(express.json());

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

