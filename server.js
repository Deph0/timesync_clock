var express = require('express');
var timesyncServer = require('timesync/server');

var app = express();
app.listen(3000);
console.log('Server listening on http://localhost:3000');

app.get('/', express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));
app.use('/timesync', timesyncServer.requestHandler);
