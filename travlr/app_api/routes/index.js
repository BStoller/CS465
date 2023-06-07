var express = require('express');
const apiController = require('../controllers/trips');
const authController = require('../controllers/authentication');
var router = express.Router();

const jwt = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

/* GET home page. */
router.post('/login', authController.login);
router.post('/register', authController.register);
router.route('/trips').get(apiController.tripsList).post(auth, apiController.tripsAddTrip);
router.route('/trips/:tripCode').get(apiController.tripsFindByCode).put(auth, apiController.tripsUpdateTrip);

module.exports = router;
