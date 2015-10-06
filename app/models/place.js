var mongoose = require('mongoose');

// define the schema for our user model
var placeSchema = new mongoose.Schema({
	_id         : String,
	place_name : String
});

// methods ======================
module.exports = mongoose.model('Place', placeSchema);