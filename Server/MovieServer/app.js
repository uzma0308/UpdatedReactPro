var express = require('express');
var bodyParser = require("body-parser");
var multer = require("multer");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE", "OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
  });


console.log(__dirname+'/uploads');

app.use(express.static(__dirname + '/upload'));

app.get('/getAllMovies', function (req, res) {

	MongoClient.connect(url, function(err, db) {

		  if (err) throw err;

		  var dbo = db.db("moviedb");
		  dbo.collection("movie").find({}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    res.send(result);
		    db.close();
		  });
		});
   
})
app.post('/search', function (req, res) {

	console.log("searched");
	MongoClient.connect(url, function(err, db) {

		  if (err) throw err;

		  var re = new RegExp(req.body.data);
		  var dbo = db.db("moviedb");
		  var query = { name: {$regex:re,$options: 'i'}};
		  dbo.collection("movie").find(query).project({_id:0,name:1,id:1}).toArray(function(err, result) {
		    if (err) throw err;
		    res.send(result);
		    db.close();
		  });
		});
   
})

app.post('/searchAll', function (req, res) {

	console.log("search All");
	MongoClient.connect(url, function(err, db) {

		  if (err) throw err;

		  var re = new RegExp(req.body.data);
		  var dbo = db.db("moviedb");
		  var query = { name: {$regex:re,$options: 'i'}};
		  dbo.collection("movie").find(query).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result)
		    res.send(result);
		    db.close();
		  });
		});
   
})

app.post('/viewMore', function (req, res) {
		console.log(req.body.data);
	MongoClient.connect(url, function(err, db) {

		  if (err) throw err;

		  var dbo = db.db("moviedb");
		  dbo.collection("movie").find({id:parseInt(req.body.data)}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    res.send(result);
		    db.close();
		  });
		});
   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server Started");

})