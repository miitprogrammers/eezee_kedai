const request = require("supertest");
const { app } = require("../index");
const helpers = require("./helpers");

describe("Stock Transaction concurrency", () => {
  let token;
  let kedaiId;
  let cabangId;
  let itemId;
  const unique = Date.now();

  beforeAll(() => {
    token = helpers.makeToken({ user_id: "e2e-owner", peran: "Pemilik" });
  });

  test("parallel stock-ins result in correct final stok", async () => {
    kedaiId = await helpers.createKedai(token, `CON KEDAI ${unique}`);
    cabangId = await helpers.createCabang(
      token,
      `CON CABANG ${unique}`,
      kedaiId
    );
    itemId = `item-con-${unique}`;
    const ri = await helpers.createInventaris(
      token,
      itemId,
      "CON Item",
      "pcs",
      kedaiId
    );
    expect([200, 201]).toContain(ri.status);

    // prepare parallel requests: 5 requests each adding 10 units
    const calls = [];
    for (let i = 0; i < 5; i++) {
      calls.push(
        request(app)
          .post("/api/inventory/tx/stock-in")
          .set("Authorization", `Bearer ${token}`)
          .send({
            item_id: itemId,
            cabang_id: cabangId,
            jumlah: 10,
            harga_beli: 100,
            kedai_id: kedaiId,
          })
      );
    }

    const results = await Promise.all(calls);
    results.forEach((r) => expect(r.status).toBe(200));

    const rs = await request(app)
      .get("/api/inventory/stok")
      .query({ item_id: itemId, cabang_id: cabangId });
    expect(rs.status).toBe(200);
    const row = rs.body[0];
    expect(Number(row.stok_saat_ini)).toBe(50);

    // cleanup
    await helpers.clearHistoryAndStok({ item_id: itemId, cabang_id: cabangId });
    try {
      await request(app)
        .delete(`/api/mgmt/cabang/${cabangId}`)
        .set("Authorization", `Bearer ${token}`);
    } catch (e) {}
    try {
      await request(app)
        .delete(`/api/mgmt/kedai/${kedaiId}`)
        .set("Authorization", `Bearer ${token}`);
    } catch (e) {}
  });
});
