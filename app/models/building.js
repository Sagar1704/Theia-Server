var mongoose = require('mongoose');

// define the schema for our user model
var buildingSchema = new mongoose.Schema({
	_id           : String,
	place_id      : String,
	building_name : String
});

// methods ======================
module.exports = mongoose.model('Building', buildingSchema);