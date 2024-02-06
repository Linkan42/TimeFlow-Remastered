import express from "express";
import amqp from "amqplib/callback_api.js";
const app = express();
const PORT = 2999;

app.get("/gateWayAPI/meeting", async (req, res) => {

	// Set up a connection to Rabbitmq
	amqp.connect("amqp://localhost", function (err, connection) {

		// Makes a channel to use when connecting 
		connection.createChannel(function (err, ch) {
			if (err) {
				console.log(toString(err));
			}

			const queue_meeting = "meeting";

			// Connect to the queue 
			ch.assertQueue(queue_meeting, {
				durable: false
			});

			// Send msg to the queue 
			ch.sendToQueue(queue_meeting, Buffer.from("Test"));
		});
	});
});

app.listen(PORT, () => {
	console.log("Gatway open");
});