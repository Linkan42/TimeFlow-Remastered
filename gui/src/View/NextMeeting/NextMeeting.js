import { Container, Paper  } from "@mui/material";
import React, {useState, useEffect} from "react";


//const GATEWAYURL = process.env.GATEWAYIP;


export function NextMeeting(/*props*/) {
	const [nextMeetingData, setNextMeetingData] = useState([]);
	const [token] = useState(localStorage.getItem("token"));
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://20.103.11.40/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json", 
						Authorization: `Bearer ${token}`
					},
					body: JSON.stringify({ 
						URL: "http://meeting-microservices/meeting/next-meeting"
					})
				});
				const data = await response.json();
				setNextMeetingData(data);
			} catch(error) {
				console.error("Error fetching next meeting:", error);
			}
		};

		fetchData();
	}, [token]);
	return (
		<Container className="Panel" backgroundColor={"#FFFFFF"}>
			<Paper elevation={3} sx={{backgroundColor: "#FAFAFA",
				paddingLeft: 2,
				paddingBottom: 0.5,
				paddingTop: 0.5}}>
				<body>
					<h1> Next Meeting </h1>
					<h3>
                Location: {nextMeetingData.day !== 99 ? nextMeetingData.location : "No meetings"}
					</h3>
					<h3>
                Start Time: {nextMeetingData.day !== 99 ? nextMeetingData.startTime : ""}
					</h3>
					<h3>
                Date: {nextMeetingData.day !== 99 ? nextMeetingData.day + "/" : ""}{nextMeetingData.day !== 99 ? nextMeetingData.month : ""}
					</h3>
				</body>
			</Paper>
		</Container>
	);
}

export default NextMeeting;
