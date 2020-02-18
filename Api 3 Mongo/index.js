// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();



// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1488; // set our port

// DATABASE SETUP
var mongoose = require('mongoose');
// 27017
mongoose.connect('mongodb://localhost:12345/vuelos'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

// Bear models lives here
var Vuelo = require('../Api 3 Mongo/models/vuelo');

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	app.get("/vuelos", (req, res)=>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var myResult;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("vuelos");
      var query = { };
      dbo.collection("vuelos").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        myResult = result;
        db.close();
      });
    });
    res.json(myResult);
});

	app.get("/vuelos/:fecha/:origen/:destino", (req, res)=>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var myResult;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("vuelos");
      var query = { fecha: req.params.fecha, origen: req.params.origen, destino: req.params.destino };
      dbo.collection("vuelos").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        myResult = result;
        db.close();
      });
    });
    res.json(myResult);
	});

  app.get("/vuelos/:fecha/:origen", (req, res)=>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var myResult;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("vuelos");
      var query = { fecha: req.params.fecha, origen: req.params.origen };
      dbo.collection("vuelos").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        myResult = result;
        db.close();
      });
    });
    res.json(myResult);
	});

  app.get("/vuelos/:idVuelo", (req, res)=>{
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var disp = 0;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("vuelos");
      var query = { id: parseInt(req.params.idVuelo) };
      dbo.collection("vuelos").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(parseInt(result[0].disponibles)-1);
        disp = parseInt(result[0].disponibles) - 1;
        db.close();
      });
    });

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("vuelos");
      var myquery = { id: req.params.idVuelo };
      var newvalues = { $set: { disponibles:  disp } };
      dbo.collection("vuelos").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
  });

app.listen(port);
console.log('Port ' + port);
