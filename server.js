var express = require('express');
var app = express();
var myData = require('./server-assets/myData.js');
var bodyParser = require('body-parser');
app.use(function(req, res, next){
	res.setHeader('Connection', 'close');
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

app.use(bodyParser());

app.route('/family')
	.get(function(req, res){
		var myFamily = myData.getFamily();
		res.send(myFamily);
	})
	.post(function(req, res){
		myData.addFamily(req.body);
		res.send(myData.getFamily());
	});

app.route('/friends')
	.get(function(req, res){
		var myFriends = myData.getFriends();
		res.send(myFriends);
	})
	.post(function(req, res){
		myData.addFriends(req.body);
		res.send(myData.getFriends());
	});

app.route('/activities')
	.get(function(req, res){
		var myActivities = myData.getActivities();
		res.send(myActivities);
	})
	.post(function(req, res){
		myData.addActivities(req.body);
		res.send(myData.getActivities());
	});

app.route('/me')
	.get(function(req, res){
		var me = myData.getMe();
		res.send(me);
	})
	.post(function(req, res){
		myData.addMe(req.body);
		res.send(myData.getMe());
	});

var server = app.listen(9001, function(){
 	console.log('listening on port %d', server.address().port);
});