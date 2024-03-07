const request                    = require('supertest');
const dotenv                     = require("dotenv");
const mongoose                   = require("mongoose");
const { server }                 = require('../index');
const { disconnectFromDatabase } = require("../database/functions.js");
dotenv.config();

beforeAll(() => {
  return new Promise((resolve, reject) => {
    mongoose.connection.once('connected', () => {
      console.log('Test connected to the database');
      resolve();
    });
    mongoose.connection.on('error', reject);
  });
});

afterAll(async () => {
  disconnectFromDatabase();
  server.close();
});

describe("Database connection", () => {

  test('should be able to connect to the database', async () => {
    const db = mongoose.connection;
    expect(db.readyState).toBe(1);
  });
});

describe("POST /user/validate-email", () => {

    test("should respond with 200 OK for a valid email", async () => {
        const response = await request(server)
            .post("/user/validate-email")
            .send({ Email: "test@available.com" });

        expect(response.status).toBe(200);
    });

    test("should respond with 400 Bad Request for an existing email", async () => {
        const response = await request(server)
            .post("/user/validate-email")
            .send({ Email: "test@unavailable.com" });

        expect(response.status).toBe(400);
    });
});

describe("POST /user/validate-name", () => {

  test("should respond with 200 OK for a valid username", async () => {
      const response = await request(server)
          .post("/user/validate-name")
          .send({ Name: "available-name" });

      expect(response.status).toBe(200);
  });

  test("should respond with 400 Bad Request for an existing username", async () => {
      const response = await request(server)
          .post("/user/validate-name")
          .send({ Name: "unavailable-name" });

      expect(response.status).toBe(400);
  });
});