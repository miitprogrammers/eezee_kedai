const { sequelize, StokSaatIni, HistoriInventaris } = require("../models");
const { appendActivity } = require("../utils/log_activity");

exports.stockIn = async (req, res) => {
  const { item_id, cabang_id, jumlah, harga_beli, user_id } = req.body;
  const maxAttempts = 3;
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const t = await sequelize.transaction();
    try {
      // update or create stok
      // acquire row-level lock if row exists to serialize concurrent updates
      let existing = await StokSaatIni.findOne({
        where: { item_id, cabang_id },
        transaction: t,
      });
      if (existing) {
        // lock the selected row for update to prevent concurrent transactions from writing simultaneously
        existing = await StokSaatIni.findOne({
          where: { item_id, cabang_id },
          transaction: t,
          lock: t.LOCK.UPDATE,
        });
      }
      if (existing) {
        const newJumlah = Number(existing.stok_saat_ini) + Number(jumlah);
        // weighted average price (simple)
        const newHarga =
          (Number(existing.harga_rata_rata) * Number(existing.stok_saat_ini) +
            Number(harga_beli) * Number(jumlah)) /
          newJumlah;
        await existing.update(
          {
            stok_saat_ini: newJumlah,
            harga_rata_rata: newHarga,
            terakhir_diperbarui: new Date(),
          },
          { transaction: t }
        );
      } else {
        // try create
        await StokSaatIni.create(
          {
            stok_id: require("uuid").v4(),
            item_id,
            cabang_id,
            stok_saat_ini: jumlah,
            harga_rata_rata: harga_beli,
            terakhir_diperbarui: new Date(),
          },
          { transaction: t }
        );
      }

      // write history
      await HistoriInventaris.create(
        {
          log_id: require("uuid").v4(),
          tanggal: new Date(),
          item_id,
          jumlah,
          harga_beli,
          cabang_id,
          kedai_id: req.body.kedai_id,
          tipe_transaksi: "Pembelian",
        },
        { transaction: t }
      );

      await t.commit();
      appendActivity(`Stock IN processed: ${item_id}@${cabang_id} +${jumlah}`, {
        meta: { item_id, cabang_id, jumlah },
      });
      return res.json({ ok: true });
    } catch (err) {
      try {
        await t.rollback();
      } catch (e) {}
      // If it's a unique constraint / race, retry a few times
      const isUnique =
        err &&
        err.name &&
        (err.name === "SequelizeUniqueConstraintError" ||
          String(err).toLowerCase().includes("duplicate"));
      if (isUnique && attempt < maxAttempts) {
        await delay(50 * attempt);
        continue; // retry
      }
      appendActivity("Stock IN failed", {
        level: "error",
        error: err,
        details: { how: "stockIn", plan: "retry" },
      });
      return res.status(500).json({ error: err.message || String(err) });
    }
  }
};
