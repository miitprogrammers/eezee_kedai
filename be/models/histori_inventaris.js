module.exports = (sequelize, DataTypes) => {
  const HistoriInventaris = sequelize.define(
    "HistoriInventaris",
    {
      log_id: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      tanggal: { type: DataTypes.DATE, allowNull: false },
      item_id: { type: DataTypes.STRING(36), allowNull: false },
      jumlah: { type: DataTypes.INTEGER, allowNull: false },
      harga_beli: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      cabang_id: { type: DataTypes.STRING(36), allowNull: false },
      kedai_id: { type: DataTypes.STRING(36), allowNull: false },
      tipe_transaksi: {
        type: DataTypes.ENUM("Pembelian", "Penjualan"),
        allowNull: false,
      },
    },
    {
      tableName: "HistoriInventaris",
      timestamps: false,
      underscored: false,
    }
  );

  return HistoriInventaris;
};
