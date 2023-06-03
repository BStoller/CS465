var express = require('express');
const apiController = require('../controllers/trips');
var router = express.Router();

/* GET home page. */
router.get('/trips', apiController.tripsList).post(apiController.tripsAddTrip);
router.get('/trips/:tripCode', apiController.tripsFindByCode).put(apiController.tripsUpdateTrip);

module.exports = router;
