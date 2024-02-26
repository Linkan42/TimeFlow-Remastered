const ValidateEmail1 = async (Email) => {
	try {
		const response = await fetch("http://gateway/api/ValidateEmail", {method: "POST",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify({ Email: Email })});
		if(response.ok){
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

export default ValidateEmail1;