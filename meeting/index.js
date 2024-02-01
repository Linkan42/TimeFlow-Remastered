const express = require("express"),
	app = express(),
	PORT = 3000; // Should be an parameter given in startup

app.post("/api/meeting/Save", async (req, res) => {
	try{
		const {location, startTime, endTime, agenda, date} = req.body,
		 meetingId = ~~(Math.random() * 1000000);
		let check = 0,
		 meetingReturn;

		const dateNew = new Date(date),
		 newday = dateNew.getDate(),
		 newmonth = dateNew.getMonth()+1;

		while(!check)
		{	
			meetingReturn = await MeetingProp.findOne({meetingId});
			if(meetingReturn === null)
			{
				check = 1;
			}
		}
		const token = req.header("Authorization").replace("Bearer ", "");

		let decoded = null;
		try {
			decoded = jwt.verify(token, secretKey);
		} catch (error) {
			console.error("jwt.verify() failed: ", error);
		}
		const {userId} = decoded,
		 userName = decoded.name,
	
		 meetingProposal = new MeetingProp({meetingId,
				location, 
				startTime, 
				endTime,
				createrUserId:userId,
				createrName: userName,
				agenda,
				date,
				day:newday,
				month:newmonth});
		await meetingProposal.save();
		return res.json({meetingId});
	}
	catch{
		return res.status(400).json({ error: "Faill to insert to database"});
	}
});

app.post("/api/meeting/ListOneUser", async (req, res) => {
	try{
		const list = await User.find().select("Name UserId");
		res.json(list);
	}
	catch{
		return res.status(400).json({ error: "userlist"});
	}
});

app.post("/api/meeting/addParticipantsToMeetings", async (req, res) => {
	const {users, meetingId} = req.body,
	 mId = parseInt(meetingId);
	try{
		users.forEach(async userId =>	{
			const uId = parseInt(userId),
			 newMeetingParticipan = new MeetingParticipan({meetingId:mId, UserId:uId});
			await newMeetingParticipan.save();
		});
	}
	catch(error){
		console.error(error);
	}	
});

app.post("/api/meeting/DeleteMeeting", async (req, res) => {
	const { meetingId } = req.body;

	try {
		const meetingDeleteResult = await MeetingProp.deleteOne({ meetingId });

		if (meetingDeleteResult.deletedCount === 0) {
			return res.status(404).json({ error: "Meeting not found" });
		}

		let responseDel;
		do {
			responseDel = await MeetingParticipan.deleteOne({ meetingId });
		} while (responseDel.deletedCount > 0);

		return res.status(200).json({ message: "Meeting and participants deleted successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
});
  

app.post("/api/meeting/ListMeeting", async (req, res) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		let decoded = null;
		try {
			decoded = jwt.verify(token, secretKey);
		} catch (error) {
			console.error("jwt.verify() failed: ", error);
		}
		const {userId} = decoded,
		 list = await MeetingParticipan.find({UserId: userId}),
		 temp = await MeetingProp.find();
		let returnMeeting = [];
		list.forEach(invite => {
			temp.forEach(meeting => {
				if(meeting.meetingId === invite.meetingId)
				{
					returnMeeting = returnMeeting.concat(meeting);
				}	
			});
		});
		res.json(returnMeeting);
	} catch (error) {
		console.error(error);
	}
});

app.post("/api/meeting/YoureMeetingList", async (req, res) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		let decoded = null;
		try {
			decoded = jwt.verify(token, secretKey);
		} catch (error) {
			console.error("jwt.verify() failed: ", error);
		}
		const {userId} = decoded,
		 temp = await MeetingProp.find();
		let returnMeeting = [];
		temp.forEach(meeting => {
			if(meeting.createrUserId === userId)
			{
				returnMeeting = returnMeeting.concat(meeting);
			}	
		});
		res.json(returnMeeting);
	} catch (error) {
		console.error(error);
	}
});

app.post("/api/meeting/sort", async(req, res) => {    
	try{
		const token = req.header("Authorization").replace("Bearer ", "");
		let decoded = null;
		try {
			decoded = jwt.verify(token, secretKey);
		} catch (error) {
			console.log("jwt.verify() failed: ", error);
		}
		const {userId} = decoded,
		 list = await MeetingParticipan.find({UserId: userId}),
		 meetings =  await MeetingProp.find({});
		let nextMeeting = new MeetingProp({day:99,
			month:99});
		const cDate = new Date();
		list.forEach(invite => {
			meetings.forEach(meeting => {
				if(invite.meetingId === meeting.meetingId)
				{
					if(meeting.month <= nextMeeting.month)
					{
						if(meeting.day <= nextMeeting.day)
						{
							if(meeting.day >= cDate.getDate() && meeting.day >= cDate.getMonth())
							{
								nextMeeting = meeting;
							}
						}
					}
				}
			});
		});
		if(nextMeeting)
		{	
			res.json(nextMeeting);
			
		} else {
			res.status(404).json({ message: "No upcoming meetings found" });
		}
	} catch {
		res.status(500).json({ message: "Error retrieving next meeting" });
	}
});


// Open port for comunication
app.listen(PORT, () => {
	console.log(`Meeeting microservice on ${PORT}`);
});

/*
 * Database stuff 
 * url to DB
 */
const url = "mongodb+srv://Filmdados:TimeFlow@timeflow.bba95oe.mongodb.net/?retryWrites=true&w=majority"; 

//Connect to db
async function connect(){
	try{
		await mongoose.connect(url);
		console.log("Connected to database.");
	}
	catch(error) {
		console.error(error);
	}
}
connect();