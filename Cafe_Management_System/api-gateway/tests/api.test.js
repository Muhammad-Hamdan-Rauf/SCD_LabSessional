const request = require("supertest");
const { app, server } = require("../src/server"); // Import both app and server

afterAll(() => {
  server.close();
});

describe("Event API", () => {
  test("should create an event", async () => {
    const res = await request(server).use("/menu").send({
    });

    expect(res.statusCode).toBe(200);
  });

});