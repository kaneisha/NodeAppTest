var express = require('express');
var app = express();
var port = process.env.PORT || 8888;

app.get('/', function (req,res){
	res.send('Hello World, this git app works!');
});

var server = app.listen(port, function (){
	console.log('Server is running');
})