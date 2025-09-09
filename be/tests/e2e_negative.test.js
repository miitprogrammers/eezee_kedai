const request = require("supertest");
const jwt = require("jsonwebtoken");
const { app } = require("../index");

function makeToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET || "secret", {
    expiresIn: "1h",
  });
}

describe("E2E negative cases", () => {
  let token;
  let kedaiId;
  let cabangId;
  const unique = Date.now();
  const dupEmail = `dup+${unique}@test.local`;

  beforeAll(() => {
    token = makeToken({ user_id: "neg-owner", peran: "Pemilik" });
  });

  test("invalid payloads return 422", async () => {
    // missing nama_kedai
    const r1 = await request(app)
      .post("/api/mgmt/kedai")
      .set("Authorization", `Bearer ${token}`)
      .send({});
    expect(r1.status).toBe(422);

    // missing kedai_id for cabang
    const r2 = await request(app)
      .post("/api/mgmt/cabang")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_cabang: "NoKedai" });
    expect(r2.status).toBe(422);

    // missing email/password for pengguna
    const r3 = await request(app)
      .post("/api/mgmt/pengguna")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_lengkap: "NoCreds" });
    expect(r3.status).toBe(422);
  });

  test("duplicate email -> 400 and error message", async () => {
    // create kedai
    const rk = await request(app)
      .post("/api/mgmt/kedai")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_kedai: `Neg Kedai ${unique}` });
    expect([200, 201]).toContain(rk.status);
    kedaiId =
      rk.body.kedai_id ||
      rk.body.kedaiId ||
      (rk.body && rk.body.kedai && rk.body.kedai.kedai_id);
    expect(kedaiId).toBeDefined();

    // create cabang
    const rc = await request(app)
      .post("/api/mgmt/cabang")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_cabang: `Neg Cabang ${unique}`, kedai_id: kedaiId });
    expect([200, 201]).toContain(rc.status);
    cabangId =
      rc.body.cabang_id ||
      rc.body.cabangId ||
      (rc.body && rc.body.cabang && rc.body.cabang.cabang_id);
    expect(cabangId).toBeDefined();

    // create pengguna first time
    const r1 = await request(app)
      .post("/api/mgmt/pengguna")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nama_lengkap: "Dup User",
        email: dupEmail,
        password: "secret123",
        peran: "Kasir",
        kedai_id: kedaiId,
        cabang_id: cabangId,
      });
    expect([200, 201]).toContain(r1.status);

    // create pengguna duplicate email
    const r2 = await request(app)
      .post("/api/mgmt/pengguna")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nama_lengkap: "Dup User 2",
        email: dupEmail,
        password: "secret123",
        peran: "Kasir",
        kedai_id: kedaiId,
        cabang_id: cabangId,
      });
    // expecting Sequelize unique constraint -> controller returns 400
    expect(r2.status).toBe(400);
    expect(r2.body).toBeDefined();
    expect(r2.body.error).toBeDefined();

    // cleanup: find created pengguna id from first response if provided, else list and match email
    const createdId =
      r1.body.user_id ||
      r1.body.userId ||
      (r1.body.user && r1.body.user.user_id);
    if (createdId) {
      await request(app)
        .delete(`/api/mgmt/pengguna/${createdId}`)
        .set("Authorization", `Bearer ${token}`);
    }
    // cleanup cabang/kedai
    if (cabangId)
      await request(app)
        .delete(`/api/mgmt/cabang/${cabangId}`)
        .set("Authorization", `Bearer ${token}`);
    if (kedaiId)
      await request(app)
        .delete(`/api/mgmt/kedai/${kedaiId}`)
        .set("Authorization", `Bearer ${token}`);
  });
});
