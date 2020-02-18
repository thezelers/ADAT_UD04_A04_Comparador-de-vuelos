// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();



// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 1488; // set our port

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vuelos'); // connect to our database

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
		Vuelo.find({}).toArray(function(err, vuelos) {
			if (err)
				res.send(err);
			res.json(vuelos);
		});
	});

	
	
	app.get("/vuelos/:fecha/:origen/:destino", (req, res)=>{
	    	//var query = { fecha: '${req.params.fecha}' };
	    	  Vuelo.find({ "fecha": 2020-02-02 }).toArray(function(err, result, fields) {
	    	if (err)
				res.send(err);
			res.json(result);
		});
	});
	
	
	
	
	/*// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


*/// REGISTER OUR ROUTES -------------------------------
//app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);