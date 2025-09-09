const request = require("supertest");
const jwt = require("jsonwebtoken");
const { app } = require("../index");

function makeToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET || "secret", {
    expiresIn: "1h",
  });
}

describe("RBAC tests", () => {
  test("Kasir cannot create kedai (403)", async () => {
    const token = makeToken({ user_id: "u1", peran: "Kasir" });
    const res = await request(app)
      .post("/api/mgmt/kedai")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_kedai: "Test Kedai" });
    expect(res.status).toBe(403);
  });

  test("Pemilik can create kedai (201 or 200)", async () => {
    const token = makeToken({ user_id: "u2", peran: "Pemilik" });
    const res = await request(app)
      .post("/api/mgmt/kedai")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_kedai: "Test Kedai" });
    expect([200, 201]).toContain(res.status);
  });
});
