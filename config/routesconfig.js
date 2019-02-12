
const productRoute = require('../routes/products');
const market = require('../routes/market');
const login = require('../routes/auth');

var express = require('express');
var router = express.Router();

// Creating Routes Link
router.use('/products', productRoute);
router.use('/market',market);
router.use('/auth',login);

module.exports = router;