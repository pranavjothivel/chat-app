'use strict';
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const async = require('async');
const fs = require('fs');
const mongoose = require('mongoose');
const io = require('socket.io');
const port = 443;
const passport = require('passport');
const server = http.createServer(app).listen(port);
const socket = io.listen(server);

mongoose.connect(process.env.MONGODB_URL_ChatApp);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})