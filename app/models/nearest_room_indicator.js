var mongoose = require('mongoose');

// define the schema for our user model
var nearestRoomSchema = new mongoose.Schema({
	room_indicator         : String,
	direction              : String,
	nearest_room_indicator : Boolean,
	distance               : double
});

// methods ======================
module.exports = mongoose.model('Nearest_Room_Indicator', nearestRoomSchema);