var express = require('express');
var router = express.Router();
const auth = require('../middlewares/auth')

router.use('/proudct', require('./user'));
router.use('/admin', require('./admin'));

module.exports = router;
