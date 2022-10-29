// import main js
// import { main } from 'main.js';
var express = require('express');
var path = require('path');
// var cron = require('node-cron');
// var nodemailer = require('nodemailer');
require('dotenv').config();
// const Web3 = require('web3');
// let web3 = new Web3('ws://localhost:7545');
// var account = web3.eth.getAccounts().then((res) => {console.log("Web3 Account 1: ",res[0]);return res[0];})

/*-- Routers --*/
var indexRouter = require('./routes/index');
var publicRouter = require('./routes/public');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Smart Contract ABI on Ethereum or Matic or whatever suits your purposes */
// app.use('/abis/ChallengeToken.json', express.static('abis/ChallengeToken.json'));
// app.use('/abis/MaticToken.json', express.static('abis/MaticToken.json'));

// view engine and backend view setup
// app.set('views', path.join(__dirname, 'BackendViews'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/* Backend Routes*/
app.use('/', indexRouter);


/* Frontend Routes*/
app.use('/public/index.html', express.static('public/index.html'));
app.use('/public', publicRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
