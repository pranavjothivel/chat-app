const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.use('/', auth);

router.get('/', function (req, res) {
    res.render('index.ejs',{
        title: 'Timetalk',
        metadata: null,
    });
});

module.exports = router;