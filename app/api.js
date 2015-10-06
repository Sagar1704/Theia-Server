var express = require('express');
var router  = express.Router();

//Models
var Room_Indicator         = require('./models/room_indicator');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('REST APIs are being used');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working
// (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
	console.log('All routes API call');
    res.json({ message: 'hooray! welcome to our api!' });
});

//Get the room indicators
router.post('/getPlace', 
	function(req, res) {
		console.log("In getPlace API");
		var getPlaceQuery = {
			place_name : "The University of Texas at Dallas"
		};
	}
);
module.exports = router;