import { Schema, model } from "mongoose";

const userSchema = new Schema({
	Email: String,
	Name: String,
	Password: String,
	UserId: Number 
});

export default model("User", userSchema);
