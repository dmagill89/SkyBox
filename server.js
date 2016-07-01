var express = require('express');
var server = express();

server.use(express.static(__dirname));
server.use('/bower_components', express.static(__dirname + '/bower_components'));

server.listen(3000);
