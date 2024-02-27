import axios from "axios";

const ValidateEmail = async (Email) => {
	try {
		const body = JSON.stringify({ Email: Email });

		const meeting_microservice = await axios.post("http://meeting/meeting/test", body);
		if(meeting_microservice.ok){
			return false;
		}
		else{
			return true;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

export default ValidateEmail;