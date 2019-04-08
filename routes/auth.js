const express = require('express');
const router = express.Router();

router.get('/login', function (req, res) {
    res.render('login.hbs',{
        title: 'Login - Timetalk',
        metadata: null,
    });
});
router.post('/login', function (req, res, next) {

})

router.get('/signup', function (req, res) {
    res.render('signup.hbs',{
        title: "Signup - Timetalk",
        metadata: null,
        TOKEN: "sample",
    });
});
router.post('/signup', function (req, res, next) {
    
})

module.exports = router;