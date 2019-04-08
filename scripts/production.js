#!/usr/bin/env node
const app = require('../app');

const http = require('http');

const HTTP_PORT = process.env.HTTP_PORT;
const httpServer = http.createServer(app).listen(HTTP_PORT);