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
  const r = await request(app)
    .post("/api/mgmt/kedai")
    .set("Authorization", `Bearer ${token}`)
    .send({ nama_kedai: nama });
  return (
    r.body.kedai_id || r.body.kedaiId || (r.body.kedai && r.body.kedai.kedai_id)
  );
}

async function createCabang(token, nama, kedai_id) {
  const r = await request(app)
    .post("/api/mgmt/cabang")
    .set("Authorization", `Bearer ${token}`)
    .send({ nama_cabang: nama, kedai_id });
  return (
    r.body.cabang_id ||
    r.body.cabangId ||
    (r.body.cabang && r.body.cabang.cabang_id)
  );
}

async function createInventaris(token, item_id, nama_item, unit, kedai_id) {
  const r = await request(app)
    .post("/api/inventory/inventaris")
    .set("Authorization", `Bearer ${token}`)
    .send({ item_id, nama_item, unit, kedai_id });
  return r;
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
