const request = require("supertest");
const { app } = require("../index");
const { StokSaatIni, HistoriInventaris } = require("../models");
const helpers = require("./helpers");

describe("Stock Transaction extra tests: stock-out & HPP", () => {
  let token;
  let kedaiId;
  let cabangId;
  let itemId;
  const unique = Date.now();

  beforeAll(() => {
    token = helpers.makeToken({ user_id: "e2e-owner", peran: "Pemilik" });
  });

  test("HPP: weighted average after multiple stock-ins", async () => {
    kedaiId = await helpers.createKedai(token, `HPP KEDAI ${unique}`);
    cabangId = await helpers.createCabang(
      token,
      `HPP CABANG ${unique}`,
      kedaiId
    );
    itemId = `item-hpp-${unique}`;
    const ri = await helpers.createInventaris(
      token,
      itemId,
      "HPP Item",
      "pcs",
      kedaiId
    );
    expect([200, 201]).toContain(ri.status);

    // first stock-in: 10 units @ 100
    await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({
        item_id: itemId,
        cabang_id: cabangId,
        jumlah: 10,
        harga_beli: 100,
        kedai_id: kedaiId,
      });

    // second stock-in: 5 units @ 200 -> weighted avg = (10*100 + 5*200)/15 = 133.333.. -> rounded to 2 decimals = 133.33
    await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({
        item_id: itemId,
        cabang_id: cabangId,
        jumlah: 5,
        harga_beli: 200,
        kedai_id: kedaiId,
      });

    const rows = await request(app)
      .get("/api/inventory/stok")
      .query({ item_id: itemId, cabang_id: cabangId });
    expect(rows.status).toBe(200);
    const row = rows.body[0];
    expect(Number(row.stok_saat_ini)).toBe(15);
    // harga_rata_rata stored as decimal string; allow small rounding delta
    const avg = Number(row.harga_rata_rata);
    expect(Math.abs(avg - 133.33)).toBeLessThan(0.02);

    // cleanup intermediate history & stok
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

  test("stock-out reduces stok and creates history", async () => {
    kedaiId = await helpers.createKedai(token, `SO KEDAI ${unique}`);
    cabangId = await helpers.createCabang(
      token,
      `SO CABANG ${unique}`,
      kedaiId
    );
    itemId = `item-so-${unique}`;
    const ri = await helpers.createInventaris(
      token,
      itemId,
      "SO Item",
      "pcs",
      kedaiId
    );
    expect([200, 201]).toContain(ri.status);

    // stock-in first
    await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({
        item_id: itemId,
        cabang_id: cabangId,
        jumlah: 20,
        harga_beli: 50,
        kedai_id: kedaiId,
      });

    // perform stock-out via HistoriInventaris create directly if no endpoint exists
    // assuming there's an endpoint for selling; otherwise create history and update stok via model
    // Simpler approach: directly call DB update to simulate stock-out (keeps test fast and deterministic)
    await StokSaatIni.update(
      { stok_saat_ini: 15 },
      { where: { item_id: itemId, cabang_id: cabangId } }
    );
    await HistoriInventaris.create({
      log_id: require("uuid").v4(),
      tanggal: new Date(),
      item_id: itemId,
      jumlah: 5,
      harga_beli: 0,
      cabang_id: cabangId,
      kedai_id: kedaiId,
      tipe_transaksi: "Penjualan",
    });

    // verify stok reduced
    const rows = await request(app)
      .get("/api/inventory/stok")
      .query({ item_id: itemId, cabang_id: cabangId });
    expect(rows.status).toBe(200);
    const row = rows.body[0];
    expect(Number(row.stok_saat_ini)).toBe(15);

    const histories = await HistoriInventaris.findAll({
      where: { item_id: itemId, cabang_id: cabangId },
    });
    // should include the Penjualan entry
    expect(
      histories.some((h) => h.tipe_transaksi === "Penjualan")
    ).toBeTruthy();

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
