'use strict';
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var async = require('async');
var fs = require('fs');
var socketio = require('socket.io');
var port = process.env.PORT || 443;
var passport = require('passport');
var server = http.createServer(app).listen(port);
var socket = socketio.listen(server);

app.use(express.static('public'));