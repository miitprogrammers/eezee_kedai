const request = require("supertest");
const { app } = require("../index");
const { HistoriInventaris } = require("../models");
const helpers = require("./helpers");

describe("Stock Transaction - /tx/stock-in", () => {
  let token;
  let kedaiId;
  let cabangId;
  let itemId;
  const unique = Date.now();

  beforeAll(() => {
    token = helpers.makeToken({ user_id: "e2e-owner", peran: "Pemilik" });
  });

  test("happy path: stock-in creates/updates stok and history", async () => {
    // create kedai
    kedaiId = await helpers.createKedai(token, `STOCK KEDAI ${unique}`);
    expect(kedaiId).toBeDefined();

    // create cabang
    cabangId = await helpers.createCabang(
      token,
      `STOCK CABANG ${unique}`,
      kedaiId
    );
    expect(cabangId).toBeDefined();

    // create inventaris (item)
    itemId = `item-${unique}`;
    const ri = await helpers.createInventaris(
      token,
      itemId,
      "Test Item",
      "pcs",
      kedaiId
    );
    expect([200, 201]).toContain(ri.status);

    // perform stock-in
    const payload = {
      item_id: itemId,
      cabang_id: cabangId,
      jumlah: 10,
      harga_beli: 5000,
      kedai_id: kedaiId,
    };
    const rtx = await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(rtx.status).toBe(200);
    expect(rtx.body).toBeDefined();

    // verify stok via API
    const rs = await request(app)
      .get(`/api/inventory/stok`)
      .query({ item_id: itemId, cabang_id: cabangId });
    expect(rs.status).toBe(200);
    const rows = rs.body;
    expect(Array.isArray(rows)).toBe(true);
    expect(rows.length).toBeGreaterThan(0);
    const stokRow =
      rows.find((r) => r.item_id === itemId && r.cabang_id === cabangId) ||
      rows[0];
    expect(Number(stokRow.stok_saat_ini)).toBeGreaterThanOrEqual(10);

    // verify history created in DB
    const histories = await HistoriInventaris.findAll({
      where: { item_id: itemId, cabang_id: cabangId },
    });
    expect(histories.length).toBeGreaterThan(0);
  });

  test("negative: missing fields -> 422", async () => {
    const r = await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({ item_id: "", cabang_id: cabangId, jumlah: "abc" });
    expect(r.status).toBe(422);
    expect(r.body.errors).toBeDefined();
  });

  test("negative: non-numeric jumlah/harga -> 422", async () => {
    const r = await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({
        item_id: itemId,
        cabang_id: cabangId,
        jumlah: "NaN",
        harga_beli: "not-a-number",
      });
    expect(r.status).toBe(422);
  });

  afterAll(async () => {
    // deterministic cleanup: remove history & stok entries created during tests
    await helpers.clearHistoryAndStok({ item_id: itemId, cabang_id: cabangId });
    // try to remove created resources via API
    try {
      if (cabangId)
        await request(app)
          .delete(`/api/mgmt/cabang/${cabangId}`)
          .set("Authorization", `Bearer ${token}`);
    } catch (e) {}
    try {
      if (kedaiId)
        await request(app)
          .delete(`/api/mgmt/kedai/${kedaiId}`)
          .set("Authorization", `Bearer ${token}`);
    } catch (e) {}
  });
});
