import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
	Email: String,
	Name: String,
	Password: String,
	UserId: Number 
});

export default userSchema;
