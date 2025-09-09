const request = require("supertest");
const { app } = require("../index");
const helpers = require("./helpers");
const models = require("../models");

describe("Stock Transaction negative tests", () => {
  let token;
  const unique = Date.now();
  beforeAll(() => {
    token = helpers.makeToken({ user_id: "e2e-owner", peran: "Pemilik" });
  });

  test("DB error during StokSaatIni.create returns 500 and does not create history", async () => {
    const kedaiId = await helpers.createKedai(token, `NEG KEDAI ${unique}`);
    const cabangId = await helpers.createCabang(
      token,
      `NEG CABANG ${unique}`,
      kedaiId
    );
    const itemId = `item-neg-${unique}`;
    const ri = await helpers.createInventaris(
      token,
      itemId,
      "NEG Item",
      "pcs",
      kedaiId
    );
    expect([200, 201]).toContain(ri.status);

    // mock create to throw
    const spy = jest
      .spyOn(models.StokSaatIni, "create")
      .mockImplementation(() => {
        throw new Error("simulated db error");
      });

    const res = await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({
        item_id: itemId,
        cabang_id: cabangId,
        jumlah: 5,
        harga_beli: 100,
        kedai_id: kedaiId,
      });

    expect(res.status).toBe(500);
    expect(res.body).toBeDefined();

    // history should not have been created
    const histories = await models.HistoriInventaris.findAll({
      where: { item_id: itemId, cabang_id: cabangId },
    });
    expect(histories.length).toBe(0);

    spy.mockRestore();

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

  test("stock-in with non-existent cabang_id currently still creates stok (observed behavior)", async () => {
    const kedaiId = await helpers.createKedai(token, `NEG2 KEDAI ${unique}`);
    // do NOT create cabang intentionally
    const fakeCabang = "00000000-0000-0000-0000-000000000000";
    const itemId = `item-neg2-${unique}`;
    const ri = await helpers.createInventaris(
      token,
      itemId,
      "NEG2 Item",
      "pcs",
      kedaiId
    );
    expect([200, 201]).toContain(ri.status);

    const res = await request(app)
      .post("/api/inventory/tx/stock-in")
      .set("Authorization", `Bearer ${token}`)
      .send({
        item_id: itemId,
        cabang_id: fakeCabang,
        jumlah: 3,
        harga_beli: 10,
        kedai_id: kedaiId,
      });

    // With server-side validation, we expect 422 Unprocessable Entity for missing cabang
    expect(res.status).toBe(422);
    expect(res.body).toBeDefined();
    // error message should mention cabang_id not found
    const hasMsg = JSON.stringify(res.body).toLowerCase().includes("cabang_id");
    expect(hasMsg).toBe(true);

    // ensure no stok or history was created for the fake cabang
    const stok = await models.StokSaatIni.findAll({
      where: { item_id: itemId, cabang_id: fakeCabang },
    });
    expect(stok.length).toBe(0);
    const histories = await models.HistoriInventaris.findAll({
      where: { item_id: itemId, cabang_id: fakeCabang },
    });
    expect(histories.length).toBe(0);

    // cleanup
    await helpers.clearHistoryAndStok({
      item_id: itemId,
      cabang_id: fakeCabang,
    });
    try {
      await request(app)
        .delete(`/api/mgmt/kedai/${kedaiId}`)
        .set("Authorization", `Bearer ${token}`);
    } catch (e) {}
  });
});
