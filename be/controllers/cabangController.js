const { Cabang } = require("../models");
const { appendActivity } = require("../utils/log_activity");

async function createCabang(req, res) {
  try {
    const { nama_cabang, alamat, kedai_id, is_utama } = req.body;
    const c = await Cabang.create({ nama_cabang, alamat, kedai_id, is_utama });
    appendActivity(`Cabang created: ${c.cabang_id}`);
    res.status(201).json(c);
  } catch (err) {
    appendActivity("Cabang create failed", {
      level: "error",
      error: err,
      details: { how: "createCabang" },
    });
    res.status(400).json({ error: err.message });
  }
}

async function listCabang(req, res) {
  try {
    const list = await Cabang.findAll();
    res.json(list);
  } catch (err) {
    appendActivity("Cabang list failed", {
      level: "error",
      error: err,
      details: { how: "listCabang" },
    });
    res.status(500).json({ error: err.message });
  }
}

async function getCabang(req, res) {
  try {
    const { id } = req.params;
    const c = await Cabang.findByPk(id);
    if (!c) return res.status(404).json({ error: "Not found" });
    res.json(c);
  } catch (err) {
    appendActivity("Cabang get failed", {
      level: "error",
      error: err,
      details: { how: "getCabang" },
    });
    res.status(500).json({ error: err.message });
  }
}

async function updateCabang(req, res) {
  try {
    const { id } = req.params;
    const c = await Cabang.findByPk(id);
    if (!c) return res.status(404).json({ error: "Not found" });
    await c.update(req.body);
    appendActivity(`Cabang updated: ${id}`);
    res.json(c);
  } catch (err) {
    appendActivity("Cabang update failed", {
      level: "error",
      error: err,
      details: { how: "updateCabang" },
    });
    res.status(400).json({ error: err.message });
  }
}

async function deleteCabang(req, res) {
  try {
    const { id } = req.params;
    const c = await Cabang.findByPk(id);
    if (!c) return res.status(404).json({ error: "Not found" });
    await c.destroy();
    appendActivity(`Cabang deleted: ${id}`);
    res.json({ success: true });
  } catch (err) {
    appendActivity("Cabang delete failed", {
      level: "error",
      error: err,
      details: { how: "deleteCabang" },
    });
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createCabang,
  listCabang,
  getCabang,
  updateCabang,
  deleteCabang,
};
