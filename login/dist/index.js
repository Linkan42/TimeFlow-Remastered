import User from "../database/user.js";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import process from "dotenv";
const app = express(),
  httpCodeInternalServerError = 500,
  httpCodeNotFound = 404,
  httpCodeOk = 200,
  httpCodeServiceUnavailable = 503;
app.post("/api/login/validateLogin", async (req, res) => {
  const {
      Email
    } = req.body,
    {
      Password
    } = req.body;
  try {
    const person = await User.findOne({
      Email,
      Password
    });
    if (person.Email === Email && person.Password === Password) {
      /*
       * Authenticaton was successfull, generate a time-limited token
       * and return it with the response
       */

      let token = null;
      try {
        token = jwt.sign({
          userId: person.UserId
        }, process.env.SECRET_KEY, {
          // Token expires in 8 hours
          expiresIn: "8h"
        });
      } catch (error) {
        return res.status(httpCodeInternalServerError).send({
          error: "Failed to generate JWT token."
        });
      }
      return res.status(httpCodeOk).send({
        message: "Authentication successful.",
        token
      });
    }
    return res.status(httpCodeNotFound).json({
      error: "User does not exist."
    });
  } catch {
    return res.status(httpCodeServiceUnavailable).json({
      error: "Log in failed."
    });
  }
});

//#region Database
/*
 * TODO: try to make the url a so called "secret enviroment variable"
 *       to avoid having it in plain text
 */
const PORT = 3002,
  URL = "mongodb+srv://Filmdados:TimeFlow@timeflow.bba95oe.mongodb.net/?retryWrites=true&w=majority";
app.listen(PORT, () => {
  console.log(`login microservice on ${PORT}`);
});
async function connect() {
  try {
    await mongoose.connect(URL);
  } catch (error) {
    console.error(error);
  }
}
connect();
//#endregion