var mongoose = require('mongoose');

// define the schema for our user model
var levelSchema = new mongoose.Schema({
	_id          : String,
	building_id  : String,
	level_number : Number
});

// methods ======================
module.exports = mongoose.model('Level', levelSchema);