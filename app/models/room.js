var mongoose = require('mongoose');

// define the schema for our user model
var roomSchema = new mongoose.Schema({
	indicator_id : String,
	room_name    : String,
	is_north     : Boolean,
	is_east      : Boolean,
	is_south     : Boolean,
	is_west      : Boolean
});

// methods ======================
module.exports = mongoose.model('Room', roomSchema);