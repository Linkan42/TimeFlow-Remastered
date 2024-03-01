import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());

app.use(cors({
	origin: "http://20.76.209.148",
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true // Allow credentials
}));

// the function 

app.post("/", async (req, res) => {
	console.log(req.body);
	try {
		const response = await fetch(req.body.URL, {
			method: "POST",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify(req.body)
		});
		console.log(response);
		const responseData = await response.json();
		console.log(responseData);
		if (response.status >=200 && response.status < 300) {
			console.log("Message:", responseData.message, response.status);
			return res.status(response.status).json(responseData);
		}
		else if (response.status >=400 && response.status < 500) {
			console.log("Message:", responseData.message, responseData.status);
			return res.status(response.status).json(responseData);
		}
		else {
			console.log("Unhandled response:", response.error, responseData.error, responseData.status);
			return res.status(response.status).json(responseData);
		}
	} catch(error) {
		console.log(error.error);
		console.log("Message:", error.message, error.status);
	}
});


app.listen(PORT, () => {
	console.log("Gatway open");
});