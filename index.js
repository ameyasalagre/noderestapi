'use strict';

var http = require('http');

var PORT = process.env.PORT || 80;


const app = require('../noderestapi/apps/app');

var server = http.createServer(app);


server.listen(PORT);

console.log('server running on '+PORT+'....');