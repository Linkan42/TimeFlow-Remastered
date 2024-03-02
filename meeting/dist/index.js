import express from "express";
import MeetingProp from "../database/meeting.js";
import MeetingParticipan from "../database/meetingParticipan.js";
import User from "../database/user.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(bodyParser.json());
const DBCONECT = process.env.DBCONECT;
const PORT = process.env.PORT; // Should be an parameter given in startup

app.get("/meeting/save", async (req, res) => {
  console.log("/meeting/save");
  try {
    const {
        location,
        startTime,
        endTime,
        agenda,
        date
      } = req.body,
      meetingId = ~~(Math.random() * 1000000);
    let check = 0,
      meetingReturn;
    const dateNew = new Date(date),
      newday = dateNew.getDate(),
      newmonth = dateNew.getMonth() + 1;
    while (!check) {
      meetingReturn = await MeetingProp.findOne({
        meetingId
      });
      if (meetingReturn === null) {
        check = 1;
      }
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    try {
      let decoded = null;
      decoded = jwt.verify(token, process.env.SECRET_KEY);
      const {
          userId
        } = decoded,
        userName = decoded.name,
        meetingProposal = new MeetingProp({
          meetingId,
          location,
          startTime,
          endTime,
          createrUserId: userId,
          createrName: userName,
          agenda,
          date,
          day: newday,
          month: newmonth
        });
      await meetingProposal.save();
      return res.json({
        meetingId
      });
    } catch (error) {
      console.error("jwt.verify() failed: ", error);
    }
  } catch {
    return res.status(400).json({
      error: "Faill to insert to database"
    });
  }
});
app.post("/meeting/user-list", async (req, res) => {
  console.log("/meeting/ListOneUser was called:");
  try {
    const list = await User.find().select("Name UserId");
    res.json(list);
  } catch {
    return res.status(400).json({
      error: "userlist"
    });
  }
});
app.post("/meeting/add-participants-to-meetings", async req => {
  console.log("/meeting/add-participants-to-meetings was called.");
  try {
    const {
        users,
        meetingId
      } = req.body,
      mId = parseInt(meetingId);
    users.forEach(async userId => {
      const uId = parseInt(userId),
        newMeetingParticipan = new MeetingParticipan({
          meetingId: mId,
          UserId: uId
        });
      await newMeetingParticipan.save();
    });
  } catch (error) {
    console.error(error);
  }
});
app.post("/meeting/delete-meeting", async (req, res) => {
  console.log("/meeting/delete-meeting was called:");
  try {
    const {
      meetingId
    } = req.body;
    const meetingDeleteResult = await MeetingProp.deleteOne({
      meetingId
    });
    if (meetingDeleteResult.deletedCount === 0) {
      return res.status(404).json({
        error: "Meeting not found"
      });
    }
    let responseDel;
    do {
      responseDel = await MeetingParticipan.deleteOne({
        meetingId
      });
    } while (responseDel.deletedCount > 0);
    return res.status(200).json({
      message: "Meeting and participants deleted successfully"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error"
    });
  }
});
app.post("/meeting/list-meeting", async (req, res) => {
  console.log("/meeting/list-meeting");
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let decoded = null;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      console.error("jwt.verify() failed: ", error);
    }
    const {
        userId
      } = decoded,
      list = await MeetingParticipan.find({
        UserId: userId
      }),
      temp = await MeetingProp.find();
    let returnMeeting = [];
    list.forEach(invite => {
      temp.forEach(meeting => {
        if (meeting.meetingId === invite.meetingId) {
          returnMeeting = returnMeeting.concat(meeting);
        }
      });
    });
    res.json(returnMeeting);
  } catch (error) {
    console.error(error);
  }
});
app.post("/meeting/youre-meeting-list", async (req, res) => {
  console.log("/meeting/youre-meeting-list");
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let decoded = null;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      console.error("jwt.verify() failed: ", error);
    }
    const {
        userId
      } = decoded,
      temp = await MeetingProp.find();
    let returnMeeting = [];
    temp.forEach(meeting => {
      if (meeting.createrUserId === userId) {
        returnMeeting = returnMeeting.concat(meeting);
      }
    });
    res.json(returnMeeting);
  } catch (error) {
    console.error(error);
  }
});
app.post("/meeting/sort", async (req, res) => {
  console.log("/meeting/youre-meeting-list");
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    let decoded = null;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      console.log("jwt.verify() failed: ", error);
    }
    const {
        userId
      } = decoded,
      list = await MeetingParticipan.find({
        UserId: userId
      }),
      meetings = await MeetingProp.find({});
    let nextMeeting = new MeetingProp({
      day: 99,
      month: 99
    });
    const cDate = new Date();
    list.forEach(invite => {
      meetings.forEach(meeting => {
        if (invite.meetingId === meeting.meetingId) {
          if (meeting.month <= nextMeeting.month) {
            if (meeting.day <= nextMeeting.day) {
              if (meeting.day >= cDate.getDate() && meeting.day >= cDate.getMonth()) {
                nextMeeting = meeting;
              }
            }
          }
        }
      });
    });
    if (nextMeeting) {
      res.json(nextMeeting);
    } else {
      res.status(404).json({
        message: "No upcoming meetings found"
      });
    }
  } catch {
    res.status(500).json({
      message: "Error retrieving next meeting"
    });
  }
});

// Open port for comunication
app.listen(PORT, () => {
  console.log(`Meeeting microservice on http://localhost:${PORT}`);
});

/*
 * Database stuff 
 * url to DB
 */
const url = DBCONECT;

//Connect to db
async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to database.");
  } catch (error) {
    console.error(error);
  }
}
connect();