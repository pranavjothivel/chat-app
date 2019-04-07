const dotenv = require('dotenv').config();

const ENV = process.env.NODE_ENV;

const express = require('express');
const app = module.exports = express();

const path = require('path');
const async = require('async');
const fs = require('fs');

const http = require('http');
const https = require('https');

const HTTP_PORT = process.env.HTTP_PORT;
const httpServer = http.createServer(app).listen(HTTP_PORT);

Enable_SSL_Local();

const mongoose = require('mongoose');

const SOCKET_PORT = process.env.SOCKET_PORT;
const io = require('socket.io');
const passport = require('passport');
const sendgrid = require('@sendgrid/mail');
const socket = io.listen(SOCKET_PORT);
const routes = require('./routes');

function Enable_SSL_Local() {
    if(ENV == 'dev' || 'development' && process.env.PRODUCTION_ENV == 'localhost'){
        require('./scripts/ENABLE_SSL_LOCAL');
    }
}

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

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI, {dbName: 'Application', useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});