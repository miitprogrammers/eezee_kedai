const { Pengguna } = require("../models");
const { hashPassword } = require("../utils/passwordUtils");
const { appendActivity } = require("../utils/log_activity");

async function createPengguna(req, res) {
  try {
    const { nama_lengkap, email, password, peran, kedai_id, cabang_id } =
      req.body;
    const hashed = await hashPassword(password);
    const p = await Pengguna.create({
      nama_lengkap,
      email,
      password: hashed,
      peran,
      kedai_id,
      cabang_id,
    });
    appendActivity(`Pengguna created: ${p.user_id}`);
    res.status(201).json({ user_id: p.user_id, email: p.email });
  } catch (err) {
    const isValidation =
      err && err.name && err.name === "SequelizeValidationError";
    const isUnique =
      err && err.name && err.name === "SequelizeUniqueConstraintError";
    appendActivity("Pengguna create failed", {
      level: "error",
      error: err,
      details: { how: "createPengguna" },
    });
    let status;
    if (isUnique) status = 400; // duplicate / unique constraint
    else if (isValidation) status = 422; // payload validation
    else status = 500;
    res.status(status).json({ error: err.message || String(err) });
  }
}

async function listPengguna(req, res) {
  try {
    const list = await Pengguna.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(list);
  } catch (err) {
    appendActivity("Pengguna list failed", {
      level: "error",
      error: err,
      details: { how: "listPengguna" },
    });
    res.status(500).json({ error: err.message || String(err) });
  }
}

async function getPengguna(req, res) {
  try {
    const { id } = req.params;
    const p = await Pengguna.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!p) return res.status(404).json({ error: "Not found" });
    res.json(p);
  } catch (err) {
    appendActivity("Pengguna get failed", {
      level: "error",
      error: err,
      details: { how: "getPengguna" },
    });
    res.status(500).json({ error: err.message || String(err) });
  }
}

async function updatePengguna(req, res) {
  try {
    const { id } = req.params;
    const p = await Pengguna.findByPk(id);
    if (!p) return res.status(404).json({ error: "Not found" });
    if (req.body.password) {
      req.body.password = await hashPassword(req.body.password);
    }
    await p.update(req.body);
    appendActivity(`Pengguna updated: ${id}`);
    res.json({ success: true });
  } catch (err) {
    const isValidation =
      err && err.name && err.name === "SequelizeValidationError";
    const isUnique =
      err && err.name && err.name === "SequelizeUniqueConstraintError";
    appendActivity("Pengguna update failed", {
      level: "error",
      error: err,
      details: { how: "updatePengguna" },
    });
    let status;
    if (isUnique) status = 400;
    else if (isValidation) status = 422;
    else status = 500;
    res.status(status).json({ error: err.message || String(err) });
  }
}

async function deletePengguna(req, res) {
  try {
    const { id } = req.params;
    const p = await Pengguna.findByPk(id);
    if (!p) return res.status(404).json({ error: "Not found" });
    await p.destroy();
    appendActivity(`Pengguna deleted: ${id}`);
    res.json({ success: true });
  } catch (err) {
    appendActivity("Pengguna delete failed", {
      level: "error",
      error: err,
      details: { how: "deletePengguna" },
    });
    res.status(500).json({ error: err.message || String(err) });
  }
}

module.exports = {
  createPengguna,
  listPengguna,
  getPengguna,
  updatePengguna,
  deletePengguna,
};
