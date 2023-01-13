import supertest from "supertest";
import app from "./app.js";
describe("POST /users", () => {
  describe("given a username and a password", () => {
    //should save username and password to database
    //should respond with a json object containing the userid
    //should respond with a status code of 200, so without any error
    test("should respond with a 200 status code", () => {
      const res = request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      expect(res.statusCode).toBe(200);
    });
    //should specify json in the content-type header
  });
  describe("username and password are missing", () => {
    //should respond with a status code of 400, to represent user error
  });
});
