const {expect, /*jest, test,*/ it, describe, beforeAll, afterAll} = require("@jest/globals");

const request = require("supertest");

const {app, server} = require("../dist/index");

const mongoose = require("mongoose");

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

	beforeAll(() => {
		mongoose.connection.on("connected", () => console.log("test connected"));
	});

	
	it("thisa user not should exist", async () => {
		const response = await postRequestWithJson("/login/validateLogin", validCredentials);
		expect(response.statusCode).toBe(404);
		
		// possible to add more expect() if needed
	});
	
	afterAll((done) => {
		server.close(done);
	});
});
