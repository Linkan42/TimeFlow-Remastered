import mongoose from "mongoose";

const meetingParticipan = new mongoose.Schema({
	meetingId: Number,  
	UserId: Number
});

export default meetingParticipan;