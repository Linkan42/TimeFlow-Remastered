import axios from "axios";


const ValidateEmail1 = async (Email) => {
	try {
		
		const gateway_response = await axios.post("http://gateway/api/ValidateLogin", Email);
        
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