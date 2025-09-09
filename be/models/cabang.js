module.exports = (sequelize, DataTypes) => {
  const Cabang = sequelize.define(
    "Cabang",
    {
      cabang_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nama_cabang: { type: DataTypes.STRING(255), allowNull: false },
      alamat: { type: DataTypes.STRING(500) },
      kedai_id: { type: DataTypes.UUID, allowNull: false },
      is_utama: { type: DataTypes.BOOLEAN, defaultValue: false },
      is_aktif: { type: DataTypes.BOOLEAN, defaultValue: true },
      dibuat_pada: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      tableName: "cabang",
      timestamps: false,
    }
  );

  return Cabang;
};
