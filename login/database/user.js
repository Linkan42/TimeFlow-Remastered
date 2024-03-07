const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	Email: String,
	Name: String,
	Password: String,
	UserId: Number 
});

module.exports = model("User", userSchema);
