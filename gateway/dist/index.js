import express from "express";
import amqp from "amqplib/callback_api.js";
const app = express();
const PORT = 4000;
app.get("/gateWayAPI/meeting", async (req, res) => {
  console.log("here");
  //Connect to Rabbitmq
  await amqp.connect("amqp://localhost", function (err, connection) {
    // Create a channel
    console.log("here1");
    connection.createChannel(function (err, ch) {
      if (err) {
        console.log(toString(err));
      }
      console.log("here2");
      const queue_meeting = "meeting";
      ch.assertQueue(queue_meeting, {
        durable: false
      });
      console.log("here3");
      ch.sendToQueue(queue_meeting, Buffer.from("Test"));
      console.log("here4");
      //to make the linter happy
      //console.log(res);
      //console.log(req);
    });
  });
});
app.listen(PORT, () => {
  console.log("Gatway open");
});