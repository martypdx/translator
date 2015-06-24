var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var publicDir = path.join(__dirname, 'public');
var bodyparser = require('body-parser');
var translate = require('./lib/translate');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static( publicDir ));

app.post('/translate', function(request, response){
	var translated = translate(request.body.text);
	response.json({ text: translated });
});

app.listen(port, function(){
	console.log('app running on port ' + port);
});
