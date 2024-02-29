import express from "express";
import axios from "axios";
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
  console.log(req);
  try {
    const response = await fetch(req.body.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });
    console.log(response);
    const responseData = await response.json();
    if (responseData.status >= 200 && responseData.status < 300) {
      console.log("Message:", responseData.message, responseData.status);
      return res.status(responseData.status).json(responseData);
    } else if (responseData.status >= 400 && responseData.status < 500) {
      console.log("Message:", responseData.message, responseData.status);
      return res.status(responseData.status).json(responseData);
    } else {
      console.log("Unhandled response:", responseData.error, responseData.status);
      return res.status(responseData.status).json(responseData);
    }
  } catch (error) {
    console.log(error.error);
    console.log("Message:", error.message, error.status);
  }
});

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
app.post("/api/validate-email", async (req, res) => {
  try {
    console.log("/api/validate-email req.body = ", req.body);
    const response = await fetch("http://user-microservices/user/validate-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });
    console.log(response);
    if (response.ok) {
      //const successData = await response.json();
      console.error("Email is valid and does not exist in database:", response.status /*, successData.message*/);
      return res.status(200).json({
        message: "Email OK!"
      });
    } else if (!response.ok) {
      //const errorData = await response.json();
      console.error("Email already exists:", response.status /*, errorData.error*/);
      return res.status(400).json({
        error: "Email already exists, returning res.status(400)"
      });
    }
  } catch (error) {
    console.error("Error with /api/ValidateEmail", error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.post("/api/validate-name", async (req, res) => {
  try {
    console.log("/api/validate-name req.body = ", req.body);
    const response = await fetch("http://user-microservices/user/validate-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });
    console.log(response);
    if (response.ok) {
      //const successData = await response.json();
      console.error("Username is valid and does not exist in database:", response.status /*, successData.message*/);
      return res.status(200).json({
        message: "Username OK!"
      });
    } else if (!response.ok) {
      //const errorData = await response.json();
      console.error("Username already exists:", response.status /*, errorData.error*/);
      return res.status(400).json({
        error: "Username already exists, returning res.status(400)"
      });
    }
  } catch (error) {
    console.error("Error with /api/validate-name", error);
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