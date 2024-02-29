const mongoose = require("mongoose");

module.exports = {
	userSchema: new mongoose.Schema({
		Email: String,
		Name: String,
		Password: String,
		UserId: Number 
	})};