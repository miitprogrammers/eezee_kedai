module.exports = (sequelize, DataTypes) => {
  const StokSaatIni = sequelize.define(
    "StokSaatIni",
    {
      stok_id: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      item_id: { type: DataTypes.STRING(36), allowNull: false },
      cabang_id: { type: DataTypes.STRING(36), allowNull: false },
      stok_saat_ini: { type: DataTypes.INTEGER, allowNull: false },
      harga_rata_rata: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      terakhir_diperbarui: { type: DataTypes.DATE, allowNull: false },
    },
    {
      tableName: "StokSaatIni",
      timestamps: false,
      underscored: false,
    }
  );

  return StokSaatIni;
};
