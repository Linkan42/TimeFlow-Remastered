import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors({
  origin: "http://20.76.209.148",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // Allow credentials
}));
//metting  
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

//login
app.get("/api/CreateUser", async (req, res) => {
  console.log("here /api/CreateUser");
  try {
    console.log("here");
    const login_microservices = await axios.post("http://login-microservices/CreateUser", req.body);
    console.log(login_microservices.data);
    res.json(login_microservices.data);
  } catch (error) {
    console.error("Error with /api/CreateUser", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.get("/api/ValidateEmail", async (req, res) => {
  console.log("here /api/ValidateEmail");
  try {
    console.log("here");
    const user_microservices = await axios.post("http://user-microservices/ValidateEmail", req.body);
    console.log(user_microservices.data);
    res.json(user_microservices.data);
  } catch (error) {
    console.error("Error with /api/ValidateEmail", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.post("/api/ValidateLogin", async (req, res) => {
  console.log("here /api/ValidateLogin");
  try {
    console.log("here");
    const login_microservices = await axios.post("http://login-microservices/ValidateLogin", req.body);
    console.log(login_microservices.data);
    res.status(200).json(login_microservices.data);
  } catch (error) {
    console.error("Error with /api/ValidateLogin", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.listen(PORT, () => {
  console.log("Gatway open");
});