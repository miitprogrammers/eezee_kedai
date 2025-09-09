const { Kedai } = require("../models");
const { appendActivity } = require("../utils/log_activity");

async function createKedai(req, res) {
  try {
    const { nama_kedai, alamat, deskripsi } = req.body;
    const kedai = await Kedai.create({ nama_kedai, alamat, deskripsi });
    appendActivity(`Kedai created: ${kedai.kedai_id}`);
    res.status(201).json(kedai);
  } catch (err) {
    appendActivity("Kedai create failed", {
      level: "error",
      error: err,
      details: { how: "createKedai" },
    });
    res.status(400).json({ error: err.message });
  }
}

async function listKedai(req, res) {
  try {
    const list = await Kedai.findAll();
    res.json(list);
  } catch (err) {
    appendActivity("Kedai list failed", {
      level: "error",
      error: err,
      details: { how: "listKedai" },
    });
    res.status(500).json({ error: err.message });
  }
}

async function getKedai(req, res) {
  try {
    const { id } = req.params;
    const k = await Kedai.findByPk(id);
    if (!k) return res.status(404).json({ error: "Not found" });
    res.json(k);
  } catch (err) {
    appendActivity("Kedai get failed", {
      level: "error",
      error: err,
      details: { how: "getKedai" },
    });
    res.status(500).json({ error: err.message });
  }
}

async function updateKedai(req, res) {
  try {
    const { id } = req.params;
    const k = await Kedai.findByPk(id);
    if (!k) return res.status(404).json({ error: "Not found" });
    await k.update(req.body);
    appendActivity(`Kedai updated: ${id}`);
    res.json(k);
  } catch (err) {
    appendActivity("Kedai update failed", {
      level: "error",
      error: err,
      details: { how: "updateKedai" },
    });
    res.status(400).json({ error: err.message });
  }
}

async function deleteKedai(req, res) {
  try {
    const { id } = req.params;
    const k = await Kedai.findByPk(id);
    if (!k) return res.status(404).json({ error: "Not found" });
    await k.destroy();
    appendActivity(`Kedai deleted: ${id}`);
    res.json({ success: true });
  } catch (err) {
    appendActivity("Kedai delete failed", {
      level: "error",
      error: err,
      details: { how: "deleteKedai" },
    });
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createKedai, listKedai, getKedai, updateKedai, deleteKedai };
