var express = require('express');
var router  = express.Router();

//Models
var Place          = require('./models/place');
var Building       = require('./models/building');
var Level          = require('./models/level');
var Room_Indicator = require('./models/room_indicator');
var Room           = require('./models/room');

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

//Get the place - On a high level like - 
// An University
// A mall etc.
router.post('/getPlace', 
	function(req, res) {
		console.log("In getPlace API");
		var body = req.body;
		console.log("Place:: " + body.place);
		
		var getPlaceQuery = {
			place_name : body.place
		};

		console.log(getPlaceQuery);

		var columns = {
			_id : 1
		}
		
		//Get the place id
		Place.find(getPlaceQuery, columns, function(err, places) {
			if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(places);

            res.json(
            {
            	status : 200,
            	place  : places
            });

		});
	}
);

//Get the building in a particular place
router.post('/getBuilding', 
	function(req, res) {
		console.log("In getBuilding API");
		var body = req.body;
		console.log("Building:: " + body.building);
		
		var getBuildingQuery = {
			place_id      : body.place_id,
			building_name : body.building
		};

		var columns = {
			_id : 1
		};
		
		//Get the building id
		Building.find(getBuildingQuery, columns, function(err, buildings) {
			if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(buildings);

            res.json(
            {
            	status   : 200,
            	building : buildings
            });

		});
	}
);

//Get the level number in a building
router.post('/getLevel', 
	function(req, res) {
		console.log("In getLevel API");
		var body = req.body;
		console.log("Level:: " + body.level);
		
		var getLevelQuery = {
			building_id  : body.building_id,
			level_number : body.level
		};
		
		//Get the building id
		Level.find(getLevelQuery, function(err, levels) {
			if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(levels);

            res.json(
            {
            	status : 200,
            	level  : levels
            });

		});
	}
);

//Get the room indicators
router.post('/getRoomIndicator', 
	function(req, res) {
		console.log("In getRoomIndicator API");
		var body = req.body;
		console.log("RoomIndicator:: " + body.indicator);
		
		var getRoomIndicatorQuery = {
			level_id  : body.level_id,
			indicator : body.indicator
		};
		
		//Get the room indicator id
		Room_Indicator.find(getRoomIndicatorQuery, function(err, indicators) {
			if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(indicators);

            res.json(
            {
            	status    : 200,
            	indicator : indicators
            });

		});
	}
);


module.exports = router;