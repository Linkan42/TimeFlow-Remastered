const crypto = require("crypto");

function generateSecretKey() {
	return new Promise((resolve, reject) => {
		try {
			// generate 512 random bytes, which results in a string
			// of 1024 random hexadecimal characters
			const newSecretKey = crypto.randomBytes(512).toString("hex");
			resolve(newSecretKey);
		} catch (error) {
			console.error("Error generating secret key:", error);
			reject(error);
		}
	});
}

module.exports = {
	generateSecretKey: generateSecretKey
};
