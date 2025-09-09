module.exports = (sequelize, DataTypes) => {
  const Kedai = sequelize.define(
    "Kedai",
    {
      kedai_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nama_kedai: { type: DataTypes.STRING(255), allowNull: false },
      alamat: { type: DataTypes.STRING(500) },
      deskripsi: { type: DataTypes.TEXT },
      is_aktif: { type: DataTypes.BOOLEAN, defaultValue: true },
      dibuat_pada: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      tableName: "kedai",
      timestamps: false,
    }
  );

  return Kedai;
};
