var express = require('express');
var router  = express.Router();

//Models
var Place          = require('./models/place');
var Building       = require('./models/building');
var Level          = require('./models/level');
var Room_Indicator = require('./models/room_indicator');
var Room           = require('./models/room');

var upsert = {upsert : true};

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
		
		//Get the level id
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

//Get the rooms
router.post('/getRoom', 
	function(req, res) {
		console.log("In getRoom API");
		var body = req.body;
		console.log("Room:: " + body.room_name);
		
		var getRoomQuery = {
			indicator_id : body.indicator_id,
			room_name    : body.room_name
		};
		
		//Get the room indicator id
		Room.find(getRoomQuery, function(err, rooms) {
			if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(rooms);

            res.json(
            {
            	status : 200,
            	room   : rooms
            });

		});
	}
);

//Update places
router.post('/updatePlace', 
	function(req, res) {
		console.log("In updatePlace API");
		var body = req.body;
		console.log("Place:: " + body.place + ", " + body.new_place);
		
		var getPlaceQuery = {
			place_name : body.place
		};

		var setPlaceQuery = {
			$set : {
				place_name : body.new_place
			}
		};

		console.log(getPlaceQuery);
		
		//Update the place name
		Place.update(getPlaceQuery, setPlaceQuery, upsert, function(err, places) {
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

//Update the building in a particular place
router.post('/updateBuilding', 
	function(req, res) {
		console.log("In updateBuilding API");
		var body = req.body;
		console.log("Building:: " + body.building + ", " + body.new_building);
		
		var getBuildingQuery = {
			place_id      : body.place_id,
			building_name : body.building
		};

		var setBuildingQuery = {
			$set : {
				place_id      : body.place_id,
				building_name : body.new_building
			}
		};
		
		//Update building name
		Building.update(getBuildingQuery, setBuildingQuery, upsert, function(err, buildings) {
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

//Update the level number in a building
router.post('/updateLevel', 
	function(req, res) {
		console.log("In updateLevel API");
		var body = req.body;
		console.log("Level:: " + body.level + ", " + body.new_level);
		
		var getLevelQuery = {
			building_id  : body.building_id,
			level_number : body.level
		};

		var setLevelQuery = {
			$set : {
				building_id  : body.building_id,
				level_number : body.new_level
			}
		};		
		
		//Update Building Level
		Level.update(getLevelQuery, setLevelQuery, upsert, function(err, levels) {
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

//Update the room indicators
router.post('/updateRoomIndicator', 
	function(req, res) {
		console.log("In updateRoomIndicator API");
		var body = req.body;
		console.log("RoomIndicator:: " + body.indicator + ", " + body.new_indicator);
		
		var getRoomIndicatorQuery = {
			level_id  : body.level_id,
			indicator : body.indicator
		};
		
		var setRoomIndicatorQuery = {
			$set : {
				level_id  : body.level_id,
				indicator : body.new_indicator,
				has_room  : body.new_has_room,
				nearest_north : {
					north_id : body.new_north_id,
					distance : body.new_north_distance
				},
				nearest_east : {
					east_id  : body.new_east_id,
					distance : body.new_east_distance
				},
				nearest_south : {
					south_id : body.new_south_id,
					distance : body.new_south_distance
				},
				nearest_west : {
					west_id  : body.new_west_id,
					distance : body.new_west_distance
				}
			}
		};

		//Update the room indicator
		Room_Indicator.update(getRoomIndicatorQuery, setRoomIndicatorQuery, upsert, function(err, indicators) {
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

//Update rooms
router.post('/updateRoom', 
	function(req, res) {
		console.log("In updateRoom API");
		var body = req.body;
		console.log("Room:: " + body.room_name + ", " + body.new_room_name);
		
		var getRoomQuery = {
			indicator_id : body.indicator_id,
			room_name    : body.room_name
		};
		
		var setRoomQuery = {
			$set : {
				indicator_id : body.indicator_id,
				room_name    : body.new_room_name
			}
		}

		//Update the room
		Room.update(getRoomQuery, setRoomQuery, upsert, function(err, rooms) {
			if (err) {
                console.log(err);
                res.send(err);
            }
            console.log(rooms);

            res.json(
            {
            	status : 200,
            	room   : rooms
            });

		});
	}
);

module.exports = router;