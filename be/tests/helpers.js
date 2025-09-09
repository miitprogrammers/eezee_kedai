const request = require("supertest");
const jwt = require("jsonwebtoken");
const { app } = require("../index");
const { StokSaatIni, HistoriInventaris, sequelize } = require("../models");

function makeToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET || "secret", {
    expiresIn: "1h",
  });
}

async function createKedai(token, nama) {
  // retry transient failures a few times (CI sometimes returns 400 due to race)
  for (let i = 0; i < 3; i++) {
    const r = await request(app)
      .post("/api/mgmt/kedai")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_kedai: nama });
    if (r.status === 201 || r.status === 200) {
      return (
        r.body.kedai_id ||
        r.body.kedaiId ||
        (r.body.kedai && r.body.kedai.kedai_id)
      );
    }
    // small delay before retry
    await new Promise((res) => setTimeout(res, 50 * (i + 1)));
  }
  // final attempt (return whatever the last response contains)
  const final = await request(app)
    .post("/api/mgmt/kedai")
    .set("Authorization", `Bearer ${token}`)
    .send({ nama_kedai: nama });
  return (
    final.body.kedai_id ||
    final.body.kedaiId ||
    (final.body.kedai && final.body.kedai.kedai_id)
  );
}

async function createCabang(token, nama, kedai_id) {
  for (let i = 0; i < 3; i++) {
    const r = await request(app)
      .post("/api/mgmt/cabang")
      .set("Authorization", `Bearer ${token}`)
      .send({ nama_cabang: nama, kedai_id });
    if (r.status === 201 || r.status === 200) {
      return (
        r.body.cabang_id ||
        r.body.cabangId ||
        (r.body.cabang && r.body.cabang.cabang_id)
      );
    }
    await new Promise((res) => setTimeout(res, 50 * (i + 1)));
  }
  const final = await request(app)
    .post("/api/mgmt/cabang")
    .set("Authorization", `Bearer ${token}`)
    .send({ nama_cabang: nama, kedai_id });
  return (
    final.body.cabang_id ||
    final.body.cabangId ||
    (final.body.cabang && final.body.cabang.cabang_id)
  );
}

async function createInventaris(token, item_id, nama_item, unit, kedai_id) {
  for (let i = 0; i < 3; i++) {
    const r = await request(app)
      .post("/api/inventory/inventaris")
      .set("Authorization", `Bearer ${token}`)
      .send({ item_id, nama_item, unit, kedai_id });
    if (r.status === 201 || r.status === 200) return r;
    await new Promise((res) => setTimeout(res, 50 * (i + 1)));
  }
  // final attempt
  return await request(app)
    .post("/api/inventory/inventaris")
    .set("Authorization", `Bearer ${token}`)
    .send({ item_id, nama_item, unit, kedai_id });
}

async function clearHistoryAndStok({ item_id, cabang_id }) {
  // directly operate on DB to ensure deterministic cleanup
  try {
    await HistoriInventaris.destroy({ where: { item_id, cabang_id } });
  } catch (e) {
    // ignore
  }
  try {
    await StokSaatIni.destroy({ where: { item_id, cabang_id } });
  } catch (e) {
    // ignore
  }
}

module.exports = {
  makeToken,
  createKedai,
  createCabang,
  createInventaris,
  clearHistoryAndStok,
};
