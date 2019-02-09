

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('../routes/index');

const uri = 'mongodb+srv://ameyasalagre:pass12345@cluster0-prqsb.mongodb.net/test';
mongoose.connect(uri);

//Server Configurations
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: false}));   // to support URL-encoded bodies
app.use(routes); // import Routes from Router Folder





module.exports=app;