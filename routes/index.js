var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.ejs'));
})

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'login.ejs'));
})

router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'signup.ejs'));
})
