const express = require('express');
const router = express.Router();



router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.ejs'));
})

module.exports = router;