var mongoose = require('mongoose');

// define the schema for our user model
var roomIndicatorSchema = new mongoose.Schema({
	room_indicator : String,
	hasLeft        : Boolean,
	hasStraight    : Boolean,
	hasRight       : Boolean
});

// methods ======================
module.exports = mongoose.model('Room_Indicator', RoomIndicatorSchema);