'use strict';

var http = require('http');

// setting port 
var PORT = process.env.PORT || 80;
// importing app module.
const app = require('../noderestapi/app');
var server = http.createServer(app);


server.listen(PORT);

console.log('server running on '+PORT+'....');