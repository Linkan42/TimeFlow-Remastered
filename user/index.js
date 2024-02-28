import User       from "../database/user.js";
import express    from "express";
import mongoose   from "mongoose";
import bodyParser from "body-parser";
import dotenv	  from "dotenv";

dotenv.config();
const app        = express();
const DBCONNECT = process.env.DBCONNECT;
const PORT = process.env.PORT;


mongoose.connection.on("connected",    () => console.log("Connected to the database")); 
mongoose.connection.on("error",        () => console.log("Database connection error"));

/* Might want to use in the future
mongoose.connection.on("open",         () => console.log("Database connection open"));
mongoose.connection.on("disconnected", () => console.log("Disconnected from the database"));
mongoose.connection.on("reconnected",  () => console.log("Reconnected to the database"));
mongoose.connection.on("disconnecting",() => console.log("Disconnecting from the database"));
mongoose.connection.on("close",        () => console.log("Database connection closed"));
*/

app.use(bodyParser.json());

app.post("/user/validate-email", async (req, res) => {
	try{
		const {Email} = req.body;
		const emailFound = await User.findOne({ Email: Email });
		if (emailFound) {
			return res.status(400).json({ error: "Email already exists" });
		}
		else {
			return res.status(200).json({ message: "Email OK!" });
		}
	} catch(error) {
		return res.status(500).json({ error: "Something broke" });
	}
});

app.post("/api/user/CreateUser", async(req, res) => {
	try {
		const { Email, Name, Password } = req.body;
		const emailFound = await User.findOne({ Email: Email });
		const userFound  = await User.findOne({ Name: Name });
		if (userFound) {
			return res.status(400).json({ error: "Username already exists" });
		}
		else if (emailFound) {
			return res.status(400).json({ error: "Email already exists" });
		}
		else {
			let id = await User.countDocuments() + 1;
			const u = new User({
				Name: Name,
				Email: Email,
				Password: Password,
				UserId: id
			});
			await u.save();
			return res.status(201).json({ message: "User created" });
		}
	} catch(error) {
		return res.status(500).json({ error: "Something broke" });
	}
});

app.post("/api/user/DeleteUser", async(req, res) => {
	try {
		const { Email } = req.body;
		const emailFound = await User.findOne({ Email: Email });
		if (emailFound) {
			await User.deleteOne({ Email: Email });
			return res.status(200).json({ message: `User with email ${ Email } deleted` });
		}
		else {
			return res.status(404).json({ error: `User with email ${ Email } not found and cannot be deleted` });
		}
	} catch (error) {
		return res.status(500).json({ error: "Something broke" });
	}
});

app.post("/api/user/UpdateUser", async(req, res) => {
	try {
		const { Email, Name, Password } = req.body;
		const emailFound = await User.findOne({ Email: Email });
		const filter = { Email };
		const update = { Name: Name, Password: Password };
		if (emailFound) {
			await User.findOneAndUpdate(filter, update);
			return res.status(200).json({ message: `User with email ${ Email } was updated` });
		}
		else {
			return res.status(404).json({ error: `User with email ${ Email } not found and cannot be updated` });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: "Something broke" });
	}
});

app.listen(PORT, () => {
	console.log(`user microservice on ${ PORT }`);
}); 


async function connect(){
	try {
		await mongoose.connect(DBCONNECT);
	}
	catch (error) {
		console.log(error);
	}
}
connect();


// Example function for testing creating users
/*
async function createUserExample(){
    const name = 'example';
    const email = 'example@example.com';
    const password = 'example123';
    await mongoose.connect(url);
    try{
        const response = await fetch("http://localhost:3001/api/user/CreateUser", {method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({ Email: email,
                Name: name,
                Password: password})});
        if(response.ok)
        {
            console.log(response);
            const successData = await response.json();
            console.error("User created successfully:", response.status, successData.message);
        }
        else if(!response.ok)
        {
            console.log(response);
            const errorData = await response.json();
            console.error("Failed to create user:", response.status, errorData.error);
        }
    }
    catch(error){
        console.error(error);
    }
}
createUserExample();
*/

//Example function for testing deleting users
/*
async function deleteUserExample() {
	const email = "example@example.com";
	await mongoose.connect(url);
	try {
		const response = await fetch("http://localhost:3001/api/user/DeleteUser", { method: "POST",
			headers: { "Content-Type":"application/json" },
			body: JSON.stringify({ Email: email })});
		if (response.ok)
		{
			console.log(response);
			const successData = await response.json();
			console.error("User deleted successfully:", response.status, successData.message);
		}
		else if (!response.ok)
		{
			console.log(response);
			const errorData = await response.json();
			console.error("Failed to delete user:", response.status, errorData.error);
		}
	}
	catch (error) {
		console.error(error);
	}
}
deleteUserExample();
*/

//Example function for testing updating users
/*
async function updateUserExample() {
	const email = "example1@example.com";
	const name  = "adrian";
	await mongoose.connect(url);
	try {
		const response = await fetch("http://localhost:3001/api/user/UpdateUser", { method: "POST",
			headers: { "Content-Type":"application/json" },
			body: JSON.stringify({ Email: email, Name: name })});
		if (response.ok)
		{
			console.log(response);
			const successData = await response.json();
			console.error("User updated successfully:", response.status, successData.message);
		}
		else if (!response.ok)
		{
			console.log(response);
			const errorData = await response.json();
			console.error("Failed to update user:", response.status, errorData.error);
		}
	}
	catch (error) {
		console.error(error);
	}
}
updateUserExample();
*/