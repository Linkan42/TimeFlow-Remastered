import mongoose from "mongoose";

let meetingProposalSchema = new mongoose.Schema({
	meetingId: Number,      
	location: String,              
	startTime: String,
	endTime: String,
	createrUserId: Number,
	createrName: String,
	agenda: String,
	date: Date,
	day: Number,
	month: Number
});

export default meetingProposalSchema;
