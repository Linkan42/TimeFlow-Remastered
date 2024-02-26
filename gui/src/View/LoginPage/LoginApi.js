import axios from "axios";


const ValidateEmail1 = async (Email) => {
	try {
		const response = await axios.post("http://gateway/api/ValidateEmail", { Email: Email }, {
			headers: { "Content-Type": "application/json" }
		});
		if (response.status === 200) {
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