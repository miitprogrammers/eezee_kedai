const request = require("supertest");
const jwt = require("jsonwebtoken");
const { app } = require("../index");

function makeToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET || "secret", {
    expiresIn: "1h",
  });
}

describe("E2E CRUD: Kedai -> Cabang -> Pengguna", () => {
  let token;
  let kedaiId;
  let cabangId;
  let userId;
  const unique = Date.now();
  const email = `e2e+${unique}@test.local`;

  beforeAll(() => {
    token = makeToken({ user_id: "e2e-owner", peran: "Pemilik" });
  });

  test("create kedai", async () => {
    const res = await request(app)
      .post("/api/mgmt/kedai")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_kedai: `E2E Kedai ${unique}` });
    expect([200, 201]).toContain(res.status);
    kedaiId =
      res.body.kedai_id ||
      res.body.kedai_id ||
      res.body.kedai_id ||
      res.body.kedai_id ||
      res.body.kedai_id ||
      res.body.kedai_id ||
      res.body.kedai_id ||
      res.body.kedai_id;
    // fallback: try common fields
    if (!kedaiId)
      kedaiId =
        res.body.kedai_id ||
        res.body.kedaiId ||
        res.body.kedai ||
        (res.body && res.body.kedai && res.body.kedai.kedai_id);
    expect(kedaiId).toBeDefined();
  });

  test("create cabang", async () => {
    const res = await request(app)
      .post("/api/mgmt/cabang")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_cabang: `Cabang E2E ${unique}`, kedai_id: kedaiId });
    expect([200, 201]).toContain(res.status);
    cabangId =
      res.body.cabang_id ||
      res.body.cabangId ||
      (res.body && res.body.cabang && res.body.cabang.cabang_id);
    expect(cabangId).toBeDefined();
  });

  test("create pengguna", async () => {
    const res = await request(app)
      .post("/api/mgmt/pengguna")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nama_lengkap: "E2E User",
        email,
        password: "secret123",
        peran: "Kasir",
        kedai_id: kedaiId,
        cabang_id: cabangId,
      });
    expect([200, 201]).toContain(res.status);
    userId =
      res.body.user_id ||
      res.body.userId ||
      (res.body.user && res.body.user.user_id) ||
      res.body.user_id;
    if (!userId && res.body && res.body.user && res.body.user.user_id)
      userId = res.body.user.user_id;
    expect(userId).toBeDefined();
  });

  test("get pengguna", async () => {
    const res = await request(app)
      .get(`/api/mgmt/pengguna/${userId}`)
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.email).toBe(email);
  });

  test("update pengguna", async () => {
    const res = await request(app)
      .put(`/api/mgmt/pengguna/${userId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_lengkap: "E2E User Updated" });
    expect([200, 201]).toContain(res.status);
  });

  test("delete pengguna, cabang, kedai (cleanup)", async () => {
    const r1 = await request(app)
      .delete(`/api/mgmt/pengguna/${userId}`)
      .set("Authorization", `Bearer ${token}`);
    expect([200, 204]).toContain(r1.status);

    const r2 = await request(app)
      .delete(`/api/mgmt/cabang/${cabangId}`)
      .set("Authorization", `Bearer ${token}`);
    expect([200, 204]).toContain(r2.status);

    const r3 = await request(app)
      .delete(`/api/mgmt/kedai/${kedaiId}`)
      .set("Authorization", `Bearer ${token}`);
    expect([200, 204]).toContain(r3.status);
  });
});
