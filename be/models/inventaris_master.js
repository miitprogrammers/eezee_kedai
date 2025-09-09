module.exports = (sequelize, DataTypes) => {
  const InventarisMaster = sequelize.define(
    "InventarisMaster",
    {
      item_id: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      nama_item: { type: DataTypes.STRING(255), allowNull: false },
      unit: { type: DataTypes.STRING(50), allowNull: false },
      kedai_id: { type: DataTypes.STRING(36), allowNull: false },
      is_aktif: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      tableName: "InventarisMaster",
      timestamps: false,
      underscored: false,
    }
  );

  return InventarisMaster;
};
