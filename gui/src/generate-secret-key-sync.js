const crypto = require("crypto");

function generateSecretKey() {
	try {
		// generate 512 random bytes, which results in a string
		// of 1024 random hexadecimal characters
		return crypto.randomBytes(512).toString("hex");
	} catch (error) {
		console.error("Error generating secret key:", error);
		return null;
	}
}

module.exports = {
	generateSecretKey: generateSecretKey
};
