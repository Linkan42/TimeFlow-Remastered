const mongoose = require("mongoose"),

	userSchema = new mongoose.Schema({
		Email: String,
		Name: String,
		Password: String,
		UserId: Number 
	});

module.exports = mongoose.model("User", userSchema);
