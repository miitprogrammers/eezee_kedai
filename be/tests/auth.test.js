const request = require("supertest");
const { app, server } = require("../index");
const { sequelize } = require("../models");

afterAll(async () => {
  try {
    server.close();
  } catch (e) {}
  try {
    await sequelize.close();
  } catch (e) {}
});

describe("Auth endpoints", () => {
  const email = "testuser+ci@test.local";
  it("registers a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ nama_lengkap: "CI Test", email, password: "secret123" });
    // allow idempotent runs: success (200/201) or already exists (400)
    expect([200, 201, 400]).toContain(res.statusCode);
    if (res.statusCode === 200 || res.statusCode === 201) {
      expect(res.body).toHaveProperty("token");
    } else {
      expect(res.body).toHaveProperty("error");
    }
  }, 10000);

  it("logs in the user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email, password: "secret123" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  }, 10000);
});
