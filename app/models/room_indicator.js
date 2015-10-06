var mongoose = require('mongoose');

// define the schema for our user model
var roomIndicatorSchema = new mongoose.Schema({
	_id           : String,
	level_id      : String,
	indicator     : String,
	has_room      : Boolean,
	nearest_north : {north_id : String, distance : Number},
	nearest_east  : {east_id : String, distance : Number},
	nearest_south : {south_id : String, distance : Number},
	nearest_west  : {west_id : String, distance : Number}
});

// methods ======================
module.exports = mongoose.model('Room_Indicator', roomIndicatorSchema);