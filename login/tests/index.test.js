const {expect, /*jest, test,*/ it, describe} = require("@jest/globals");

const request = require("supertest");

const app = require("../dist/index");

const postRequestWithJson = (url, jsonData) => {
	return request(app)
		.post(url)
		.set("Accept", "applicaiton/josn")
		.set("Content-Type", "application/json")
		.send(jsonData);
};

describe("login validateLogin", () => {
	const validCredentials = {
		Email: "oskartaensnus@noob.com",
		Password: "snortakoffein"
	};

	it("thisa user not should exist", async () => {
		const response = await postRequestWithJson("/login/validateLogin", validCredentials);
		expect(response.statusCode).toBe(404);

		// possible to add more expect() if needed
	});
});
