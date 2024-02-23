import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//test
app.get("/", (req, res) => res.json({
  message: "Docker and azure is easy"
}));
app.get("/api/meeting/test", async (req, res) => {
  console.log("here /api/meeting/test");
  try {
    console.log("here");
    const meeting_microservice = await axios.post("http://meeting/meeting/test", req.body);
    console.log(meeting_microservice.data);
    res.json(meeting_microservice.data);
  } catch (error) {
    console.error("Error with meeting api call meeting/Save", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.post("/api/meeting/Save", async (req, res) => {
  try {
    //http://meeting-microservice/ -- from meeting/kubernetes deploy.yaml
    const meeting_microservice = await axios.post("http://meeting-microservice/meeting/Save", req.body);
    res.json(meeting_microservice.data);
  } catch (error) {
    console.error("Error with meeting api call meeting/Save", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.listen(PORT, () => {
  console.log("Gatway open");
});