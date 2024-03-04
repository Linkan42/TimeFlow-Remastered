import { TextField, Stack, Button, List, ListItemButton, Grid, Checkbox, Paper} from "@mui/material";
import React, {Component, useEffect, useState} from "react"; //linter magic
import "./TimeSelect.css";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


function AddMeeting() {
	const [inputValueFrom, setInputValueFrom] = useState("");
	const [inputValueTo, setInputValueTo] = useState("");
	const [inputValueLocation, setInputValueLocation] = useState("");
	const [inputValueAgenda, setInputValueAgenda] = useState("");
	const [inputDate, setInputDate] = React.useState(null);
	const [participants, setParticipants] = useState([]);
	let [menuItems, setMenuItems] = useState([{Name: "Eric"}]);
	const [token] = useState(localStorage.getItem("token"));
	useEffect(() => {
		getUserList();
	},[]);

	//const GATEWAYURL = process.env.GATEWAYIP;

	const handelButton = async () =>
	{ 	
		try{
			console.log("handelButton called!");
			const response = await fetch("http://20.103.11.40/", {
				method: "POST",
				headers: {"Content-Type":"application/json", 
					Authorization: `Bearer ${token}`},
				body: JSON.stringify({ location: inputValueLocation,
					startTime: inputValueFrom,
					endTime: inputValueTo,
					agenda: inputValueAgenda,
					date: inputDate,
					URL: "http://meeting-microservices/meeting/save"
				})});
			const data = await response.json();
			const {meetingId} = data;
			addParticipantsToMeetings(meetingId);
		}
		catch(error){
			console.error("Error fetching next meeting:", error);
		}
	};
	const getUserList = async () =>
	{
		console.log("getUserList called");
		const response = await fetch("http://20.103.11.40/", {
			method: "POST",
			headers: {"Content-Type":"application/json", 
				Authorization: `Bearer ${token}`},
			body: JSON.stringify({ 
				URL: "http://meeting-microservices/meeting/user-list"})
		});
		setMenuItems(await response.json());
		console.log(menuItems);
	};
	const addParticipants = (id) =>
	{
		console.log("addParticipants called");
		if(participants.indexOf(id) === -1)
		{
			participants.push(id);
		}
		else{
			setParticipants(participants.filter(item => item !== id));
		}
	};
	const addParticipantsToMeetings = async (currentMeetingId) =>
	{
		console.log("addParticipantsToMeetings called");
		fetch("http://20.103.11.40/", {
			method: "POST",
			headers: {"Content-Type":"application/json", 
				Authorization: `Bearer ${token}`},
			body: JSON.stringify({ users: participants,
				meetingId: parseInt(currentMeetingId),
				URL: "http://meeting-microservices/meeting/add-participants-to-meetings"
			}), 
		});
	};
	return (
		<>
			<Stack direction={"row"}>
				<List className="coWorkerList">

					{menuItems.map((item) => (
						<Paper elevation={5} key={item}>
							<ListItemButton className="coWorkerInfo" key={item.Name}>
								<Grid container xs={12}>
									<Grid xs={8}>{item.Name}</Grid>
									<Grid xs={4}>
										<Checkbox value={item.UserId} sx={{
											color: "Black",
											"&.Mui-checked": {
												color: "darkorange",
											},
										}} onChange={(e) => addParticipants(e.target.value)}></Checkbox>
									</Grid>
								</Grid>
							</ListItemButton>
						</Paper>
					))}
                    
				</List>
				<Grid className="dateGrid">
					<Stack className="dateStack">
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker className="date" value={inputDate} onChange={(newValue) => setInputDate(newValue)}/>
						</LocalizationProvider>
						<TextField className="input" label="From:" value={inputValueFrom} onChange={(e) => setInputValueFrom(e.target.value)}/>
						<TextField className="input" label="To:"   value={inputValueTo} onChange={(e) => setInputValueTo(e.target.value)}/>
						<TextField className="input" label="Location" value={inputValueLocation} onChange={(e) => setInputValueLocation(e.target.value)}/>
						<TextField className="input" label="Meeting name" value={inputValueAgenda} onChange={(e) => setInputValueAgenda(e.target.value)}/>
						<Button id="AddButton" className="inputButton" variant="contained" onClick={handelButton}>
                        Add meeting
						</Button>
					</Stack>
				</Grid>
			</Stack>
		</>
	);
}
export class TimeSelect extends Component {
	render(){    
		return(
			<Grid>
				<Grid>
					<AddMeeting/>
				</Grid>
			</Grid>
		);
	}
}


export default TimeSelect;