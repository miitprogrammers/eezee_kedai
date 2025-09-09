const { sequelize, StokSaatIni, HistoriInventaris } = require("../models");
const { appendActivity } = require("../utils/log_activity");

exports.stockIn = async (req, res) => {
  const { item_id, cabang_id, jumlah, harga_beli, user_id } = req.body;
  // Input validation: ensure required fields present and types valid
  if (!item_id || !cabang_id || jumlah == null || harga_beli == null) {
    return res.status(422).json({ error: 'Missing required fields: item_id, cabang_id, jumlah, harga_beli' });
  }
  if (isNaN(Number(jumlah)) || isNaN(Number(harga_beli)) || Number(jumlah) <= 0 || Number(harga_beli) < 0) {
    return res.status(422).json({ error: 'Invalid numeric values for jumlah or harga_beli' });
  }
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
      // Map known Sequelize validation/unique errors to 422
      const isValidationErr = err && err.name && (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError');
      const isUnique = err && err.name && (err.name === 'SequelizeUniqueConstraintError' || String(err).toLowerCase().includes('duplicate'));
      if (isUnique && attempt < maxAttempts) {
        await delay(50 * attempt);
        continue; // retry
      }
      appendActivity('Stock IN failed', {
        level: 'error',
        error: err,
        details: { how: 'stockIn', plan: isValidationErr ? 'fix request payload' : 'inspect and retry' },
      });
      const status = isValidationErr ? 422 : 500;
      const message = isValidationErr ? (err.errors ? err.errors.map(e => e.message).join('; ') : err.message) : 'Internal server error';
      return res.status(status).json({ error: message });
    }
  }
};
