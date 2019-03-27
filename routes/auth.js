var express = require('express');
var Router = express.Router;

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'login.ejs'));
})

router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'signup.ejs'));
})

module.exports = router;