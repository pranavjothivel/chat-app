const express = require('express');
const router = express.Router();

router.get('/login', function (req, res) {
    res.render('login.ejs',{
        title: 'Login - Timetalk',
        metadata: null,
    });
});

router.get('/signup', function (req, res) {
    res.render('signup.ejs',{
        title: "Signup - Timetalk",
        metadata: null,
    });
});

module.exports = router;