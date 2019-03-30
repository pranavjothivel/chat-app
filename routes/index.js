const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.get('/', function (req, res) {
    res.render('index.ejs', {
        title: "Talktime",
        metadata: null,
    });
});

module.exports = router;