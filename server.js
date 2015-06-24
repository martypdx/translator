var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var publicDir = path.join(__dirname, 'public');

app.use( express.static( publicDir ) );



app.listen(port, function(){
	console.log('app running on port ' + port);
});
