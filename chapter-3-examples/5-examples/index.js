var express = require('express');
//var wagner = require('wagner-core');

require('./models')();

var app = express();

app.use('/api/v1', require('./api')());

app.listen(3000);
console.log('Listening on port 3000!');
