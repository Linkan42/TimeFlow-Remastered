const mongoose = require("mongoose");
const dotenv   = require("dotenv");
dotenv.config();
const DBCONNECT  = process.env.DBCONNECT;

async function connectToDatabase(){
	try {
		await mongoose.connect(DBCONNECT);
	}
	catch (error) {
		console.log(error);
	}
}

async function disconnectFromDatabase(){
	try {
		await mongoose.disconnect(DBCONNECT);
	}
	catch (error) {
		console.log(error);
	}
}

module.exports.connectToDatabase = connectToDatabase;
module.exports.disconnectFromDatabase = disconnectFromDatabase;

