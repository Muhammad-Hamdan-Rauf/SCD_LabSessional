const request = require("supertest");
const { app, server } = require("../src/server"); // Import both app and server

afterAll(() => {
  server.close();
});

describe("Event API", () => {
  test("should create an event", async () => {
    const res = await request(server).post("/orders").send({
      customerId: "1",
      Items: "Pizza",
    });

    expect(res.statusCode).toBe(201);
  });

  test("should return events", async () => {
    const res = await request(server).get("/orders/1");
    expect(res.statusCode).toBe(200);
  });
});
