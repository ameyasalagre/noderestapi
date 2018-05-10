

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://ameyasalagre:pass12345@cluster0-prqsb.mongodb.net/test';
mongoose.connect(uri);

//body parser
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: false}));   // to support URL-encoded bodies

//intializing route files
const productRoute = require('../routes/products');
const market = require('../routes/market');



app.use('/products', productRoute);
app.use('/market',market);



module.exports=app;