const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.use('/', auth);

router.get('/', function (req, res) {
    res.render('index.hbs',{
        title: 'Timetalk',
        metadata: null,
    });
});
router.get('/what-is-timetalk', function (req, res) {
    res.render('what-is-timetalk.hbs', {
        title: "What is Timetalk?",
        metadata: null,
    })
})
router.get('/download', function (req, res) {
    res.render('download.hbs', {
        title: "Download - Timetalk",
        metadata: null,
    })
})
router.get('/support', function (req, res) {
    res.render('support.hbs', {
        title: "Support - Timetalk",
        metadata: null,
    })
})

module.exports = router;