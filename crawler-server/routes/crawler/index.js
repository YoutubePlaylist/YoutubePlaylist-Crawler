const express = require('express');
const router = express.Router();
const crawlerController = require('../../controller/crawlerController');


router.get('/:search', crawlerController.test);
module.exports = router;
