const { StokSaatIni } = require("../models");
const { appendActivity } = require("../utils/log_activity");

exports.getStok = async (req, res) => {
  const { item_id, cabang_id } = req.query;
  const where = {};
  if (item_id) where.item_id = item_id;
  if (cabang_id) where.cabang_id = cabang_id;
  const rows = await StokSaatIni.findAll({ where });
  res.json(rows);
};

exports.createOrUpdateStok = async (req, res) => {
  try {
    const { stok_id, item_id, cabang_id, stok_saat_ini, harga_rata_rata } =
      req.body;
    const [row] = await StokSaatIni.upsert({
      stok_id,
      item_id,
      cabang_id,
      stok_saat_ini,
      harga_rata_rata,
      terakhir_diperbarui: new Date(),
    });
    appendActivity(`Stok upsert: ${item_id}@${cabang_id}`, {
      meta: { item_id, cabang_id },
    });
    res.json({ ok: true });
  } catch (err) {
    appendActivity("Stok upsert failed", { level: "error", error: err });
    res.status(400).json({ error: err.message || err });
  }
};
