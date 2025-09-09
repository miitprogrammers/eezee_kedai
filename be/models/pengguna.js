module.exports = (sequelize, DataTypes) => {
  const Pengguna = sequelize.define(
    "Pengguna",
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nama_lengkap: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(255), allowNull: false },
      peran: {
        type: DataTypes.ENUM("Pemilik", "Manajer", "Kasir"),
        allowNull: false,
      },
      kedai_id: { type: DataTypes.UUID, allowNull: false },
      cabang_id: { type: DataTypes.UUID, allowNull: false },
      dibuat_pada: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      terakhir_login: { type: DataTypes.DATE },
    },
    {
      tableName: "pengguna",
      timestamps: false,
    }
  );

  return Pengguna;
};
