import axios from "axios";

const ValidateEmail = async (Email) => {
	try{
		const body = { Email: Email };
		console.log("here");
        
		const apiResponse = await axios.post("http://20.103.11.40/gateway/api/ValidateEmail", body, {
			withCredentials: true
		});
            
		console.log(apiResponse.data);
	}
	catch (error) {
		console.error("Error with meeting api call gateway/api/ValidateEmail", error);
	}
	// const body = { Email: Email };

	// const meeting_microservice = await axios.post("http://gateway/api/meeting/test", body);
	// if (meeting_microservice.status >= 200) {
	// 	return false; 
	// } else {
	// 	return true; 
	// }
	// } catch (error) {
	// 	console.error(error);
	// 	return false; 
	// }
};

export default ValidateEmail;