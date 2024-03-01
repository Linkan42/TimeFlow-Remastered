import User from "../database/user.js";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";


dotenv.config();
const KEY = process.env.SECRET_KEY;
const app = express(),
	httpCodeInternalServerError = 500,
	httpCodeNotFound = 404,
	httpCodeOk = 200,
	httpCodeServiceUnavailable = 503;

app.use(bodyParser.json());

app.post("/login/validateLogin", async (req, res) => {
	try{
		const {Email, Password} = req.body;

		console.log("/login/validateLogin");
		console.log("Email:", Email);
		console.log("Password:", Password);
		const person = await User.findOne({ Email: Email, Password: Password });
		console.log("await DB");
		console.log("person:", person);
		if(person.Email === Email && person.Password === Password){
			console.log("DB done");
			/*
			 * Authenticaton was successfull, generate a time-limited token
			 * and return it with the response
			 */
			let token = null;
			try {
				console.log("Try to make token");
				let token = jwt.sign({userId: person.UserId}, KEY, {
					// Token expires in 8 hours
					expiresIn: "8h"
				});
				console.log(token);
				
			} catch (error) {
				console.log("Token fail");
				console.log(error);
				return res.status(httpCodeInternalServerError).send({error: "Failed to generate JWT token."});
			}
			console.log("Token successful");
			return res.status(httpCodeOk).send({message: "Authentication successful.", token});
		}
		console.log("User do not exist");
		return res.status(httpCodeNotFound).json({ error: "User does not exist."});

	}
	catch(error){
		console.log(error);
		return res.status(httpCodeServiceUnavailable).json({ error: "Log in failed."});
	}
});

//#region Database
const PORT = process.env.PORT,
	URL = process.env.DBCONNECT;

app.listen(PORT, () => {
	console.log(`login microservice on ${ PORT }`);
}); 

async function connect(){
	try {
		await mongoose.connect(URL);
		console.error("Connected");
	}
	catch (error) {
		console.error(error);
	}
	console.log(KEY);
}
connect();
//#endregion