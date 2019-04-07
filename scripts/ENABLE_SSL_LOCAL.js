const fs = require('fs');
const https = require('https');

const app = require('../app');

const HTTPS_PORT = process.env.HTTPS_PORT;

const SSL_CERT = fs.readFileSync(process.env.CERTIFICATE);
const SSL_KEY = fs.readFileSync(process.env.CERTIFICATE_KEY);

const SSL_CONFIG = {
    key: SSL_KEY,
    cert: SSL_CERT
};
const httpsServer = https.createServer(SSL_CONFIG, app).listen(HTTPS_PORT);