import mongoose from "mongoose";

let meetingParticipan = new mongoose.Schema({
	meetingId: Number,  
	UserId: Number
});

export default meetingParticipan;