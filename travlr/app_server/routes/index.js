var express = require('express');
const ctrlMain = require('../controllers/main');
var router = express.Router();

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
