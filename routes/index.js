
const productRoute = require('../routes/products');
const market = require('../routes/market');
const login = require('../routes/login');

var express = require('express');
var router = express.Router();

// Creating Routes Link
router.use('/products', productRoute);
router.use('/market',market);
router.use('/login',login);



module.exports = router;