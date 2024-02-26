import axios from "axios";


const ValidateEmail1 = async (Email) => {
	try {
		//.then
		const gateway_response = await axios.get("http://gateway/api/ValidateEmail", { Email: Email }, {
			headers: { "Content-Type": "application/json" }
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