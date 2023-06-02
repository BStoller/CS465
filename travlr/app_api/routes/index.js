var express = require('express');
const apiController = require('../controllers/trips');
var router = express.Router();

/* GET home page. */
router.get('/trips', apiController.tripsList);
router.get('/trips/:tripCode', apiController.tripsFindByCode);

module.exports = router;
