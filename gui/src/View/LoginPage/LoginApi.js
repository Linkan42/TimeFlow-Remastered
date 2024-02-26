import axios from "axios";


const ValidateEmail1 = async (Email) => {
	try {
		
		const req = Email;
		const gateway_response = await axios({ 
			method: "GET",
			url: "http://gateway/api/ValidateEmail", 
			data: req, 
			responseType: "json",
		});
		if (gateway_response.status === 200) {
			return false;
		} else {
			return true;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

export default ValidateEmail1;