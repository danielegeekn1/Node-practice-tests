import { request } from "express";
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
    test("should specify json in content type header", async () => {
      const res = request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("response has userId", async () => {
      const res = await request(app).post("users/").send({
        username: "username",
        password: "password",
      });
      expect(res.body.userId).toBeDefined();
    });
  });
  describe("username and password are missing", () => {
    //should respond with a status code of 400, to represent user error
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {
          username: "username",
          password: "password",
        },
      ];
      for (const body of bodyData) {
        const res = await request.app().post("/users").send(body);
        expect(res.statusCode).toBe(400);
      }
    });
  });
});
