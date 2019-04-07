const dotenv = require('dotenv').config();

const ENV = process.env.NODE_ENV;

const express = require('express');
const app = express();

const path = require('path');
const async = require('async');
const fs = require('fs');

const SSL_CERT = fs.readFileSync(process.env.CERTIFICATE);
const SSL_KEY = fs.readFileSync(process.env.CERTIFICATE_KEY);

const SSL_CONFIG = {
    key: SSL_KEY,
    cert: SSL_CERT
};


const https = require('https');
const http = require('http');

const HTTP_PORT = process.env.HTTP_PORT;
const HTTPS_PORT = process.env.HTTPS_PORT;
const SOCKET_PORT = process.env.SOCKET_PORT;

const httpServer = http.createServer(app).listen(HTTP_PORT);
// const httpsServer = https.createServer(SSL_CONFIG, app).listen(HTTPS_PORT);

const mongoose = require('mongoose');

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

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI, {dbName: 'Application', useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});