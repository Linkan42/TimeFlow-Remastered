import User from "../database/user.js";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express(),
	httpCodeInternalServerError = 500,
	httpCodeNotFound = 404,
	httpCodeOk = 200,
	httpCodeServiceUnavailable = 503;


app.post("/login/validateLogin", async (req, res) => {
	const {Email} = req.body,
		{Password} = req.body;
	console.log("/login/validateLogin");
	console.log("Email:", Email);
	console.log("Password:", Password);
	try{
		const person  = await User.findOne({Email, Password});

		if(person.Email === Email && person.Password === Password){
			/*
			 * Authenticaton was successfull, generate a time-limited token
			 * and return it with the response
			 */

			let token = null;
			try {
				console.log("Try to make token");
				token = jwt.sign({userId: person.UserId}, process.env.SECRET_KEY, {
					// Token expires in 8 hours
					expiresIn: "8h"
				});
			} catch (error) {
				console.log("Token fail");
				return res.status(httpCodeInternalServerError).send({error: "Failed to generate JWT token."});
			}
			console.log("Token successful");
			return res.status(httpCodeOk).send({message: "Authentication successful.", token});
		}
		console.log("User do not exist");
		return res.status(httpCodeNotFound).json({ error: "User does not exist."});

	}
	catch {
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
	}
	catch (error) {
		console.error(error);
	}
}
connect();
//#endregion