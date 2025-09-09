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
    appendActivity("Inventaris create failed", { level: "error", error: err });
    res.status(400).json({ error: err.message || err });
  }
};

exports.listInventaris = async (req, res) => {
  const items = await InventarisMaster.findAll();
  res.json(items);
};
