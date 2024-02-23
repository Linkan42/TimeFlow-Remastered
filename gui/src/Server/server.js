const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const schedule = require("../rotate_key.js");
schedule.startCronJob();

const my_path = "../../build/";

app.use(bodyParser.json());

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, my_path)));



// Handle requests to the root URL
app.get(["/", "/home", "/login", "/meetingScheduler", "/*"], (req, res) => {
	// Send the index.html file from the build folder as the response
	res.sendFile(path.join(__dirname, my_path, "index.html"));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server listening on http://localhost:${port}`));








