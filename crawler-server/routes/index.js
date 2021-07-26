var express = require('express');
var router = express.Router();


router.use('/crawler', require('./crawler'));

module.exports = router;
