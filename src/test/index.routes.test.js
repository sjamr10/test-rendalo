const server = require("../app");
const request = require("supertest");

afterEach(() => {
  server.close();
});

describe("routes: /api/people", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/api/people");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
  });
});
