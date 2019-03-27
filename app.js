'use strict';
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const async = require('async');
const fs = require('fs');
const mongoose = require('mongoose');
const io = require('socket.io');
const port = process.env.PORT;
const passport = require('passport');
const sendgrid = require('@sendgrid/mail');
const server = http.createServer(app).listen(port);
const socket = io.listen(server);
const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URI, { dbName: 'Application', useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
})