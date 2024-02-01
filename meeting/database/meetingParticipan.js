const mongoose = require("mongoose"),

	meetingParticipan = new mongoose.Schema({
		meetingId: Number,  
		UserId: Number
	});

module.exports = mongoose.model("meetingParticipan", meetingParticipan);