

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('../config/routesconfig');

const uri = 'mongodb+srv://ameyasalagre:pass12345@cluster0-prqsb.mongodb.net/test';
mongoose.connect(uri);

//Server Configurations
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   // to support URL-encoded bodies
app.use(routes); // import Routes from Router Folder
app.use(require('../config/dbconfig').initPool());

module.exports=app;