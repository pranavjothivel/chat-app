#!/usr/bin/env node
require('dotenv').config();

const app = require('../app');

const fs = require('fs');

const http = require('http');
const https = require('https');

const HTTP_PORT = process.env.HTTP_PORT;
const httpServer = http.createServer(app).listen(HTTP_PORT);

const HTTPS_PORT = process.env.HTTPS_PORT;

const SSL_CERT = fs.readFileSync(process.env.CERTIFICATE);
const SSL_KEY = fs.readFileSync(process.env.CERTIFICATE_KEY);

const SSL_CONFIG = {
    key: SSL_KEY,
    cert: SSL_CERT
};
const httpsServer = https.createServer(SSL_CONFIG, app).listen(HTTPS_PORT);
