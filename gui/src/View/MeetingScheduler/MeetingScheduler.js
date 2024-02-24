import React,{Component} from "react";
import {TimeStack} from "../TimeStack/TimeStack";
import "../../App.css";
import"./MeetingScheduler.css";
import {Grid} from "@mui/material";

export class MeetingScheduler extends Component {
	render(){
		return( 
			<div className="meetingContainer">
				<Grid>
					<Grid>
						<TimeStack className="TimeStack"/>
					</Grid>
				</Grid>
			</div>
		);
	}
}



export default MeetingScheduler;