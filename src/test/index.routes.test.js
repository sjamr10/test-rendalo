const server = require("../app");
const request = require("supertest");

afterEach(() => {
  server.close();
});

describe("routes: /api/people", () => {
  test("GET - should respond as expected", async () => {
    const response = await request(server).get("/api/people");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.length).toBeDefined();
  });

  test("POST - should respond as expected", async () => {
    let response = await request(server)
      .post("/api/people")
      .send({ name: "Sergio", age: 29 })
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("age");

    response = await request(server)
      .post("/api/people")
      .send({ name: "Sergio" })
      .set("Accept", "application/json");

    expect(response.status).toEqual(500);
  });
});
