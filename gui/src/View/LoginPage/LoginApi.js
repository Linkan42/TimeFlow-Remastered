import axios from "axios";

const ValidateEmail = async (Email) => {
	try {
		const body = { Email: Email };

		const meeting_microservice = await axios.post("http://gateway/meeting/test", body);
		if (meeting_microservice.status >= 200) {
			return false; 
		} else {
			return true; 
		}
	} catch (error) {
		console.error(error);
		return false; 
	}
};

export default ValidateEmail;