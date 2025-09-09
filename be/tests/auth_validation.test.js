const request = require("supertest");
const { app } = require("../index");

describe("Auth validation and protected route", () => {
  test("register validation fails on short password", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ nama_lengkap: "Al", email: "bad", password: "123" });
    expect(res.status).toBe(422);
    expect(res.body.errors).toBeDefined();
  });

  test("protected route without token returns 401", async () => {
    const res = await request(app).get("/api/mgmt/kedai");
    expect(res.status).toBe(401);
  });
});
