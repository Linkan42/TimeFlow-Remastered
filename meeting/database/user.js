import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	Email: String,
	Name: String,
	Password: String,
	UserId: Number 
});

export default userSchema;
