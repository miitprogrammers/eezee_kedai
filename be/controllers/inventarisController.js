const { InventarisMaster } = require("../models");
const { appendActivity } = require("../utils/log_activity");

exports.createInventaris = async (req, res) => {
  try {
    const { item_id, nama_item, unit, kedai_id } = req.body;
    const inv = await InventarisMaster.create({
      item_id,
      nama_item,
      unit,
      kedai_id,
    });
    appendActivity(`InventarisMaster created: ${inv.item_id}`, {
      meta: { item_id: inv.item_id },
    });
    res.status(201).json(inv);
  } catch (err) {
    // Map Sequelize validation/unique errors to 422, others to 500
    const isValidation =
      err &&
      err.name &&
      (err.name === "SequelizeValidationError" ||
        err.name === "SequelizeUniqueConstraintError");
    appendActivity("Inventaris create failed", {
      level: "error",
      error: err,
      details: {
        how: "createInventaris",
        plan: "inspect payload / constraints",
      },
    });
    const status = isValidation ? 422 : 500;
    res.status(status).json({ error: err.message || String(err) });
  }
};

exports.listInventaris = async (req, res) => {
  const items = await InventarisMaster.findAll();
  res.json(items);
};
