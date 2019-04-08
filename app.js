const ENV = process.env.NODE_ENV;

const express = require('express');
const app = module.exports = express();

const path = require('path');
const async = require('async');
const fs = require('fs');

const mongoose = require('mongoose');

const SOCKET_PORT = process.env.SOCKET_PORT;
const io = require('socket.io');
const passport = require('passport');
const sendgrid = require('@sendgrid/mail');
const socket = io.listen(SOCKET_PORT);
const routes = require('./routes');

app.use('*', function (req, res, next) {
    if(req.secure){
        next();
    }
    else if(ENV == 'production' && process.env.PRODUCTION_ENV == 'nginx') {
        res.redirect('http://' + req.headers.host + req.url);
    }
    else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

app.set('view engine', 'hbs')
app.use(express.static('public'));
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI, {dbName: 'Application', useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});

module.exports = app;