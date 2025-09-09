const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Kedai = require("./kedai")(sequelize, Sequelize.DataTypes);
const Cabang = require("./cabang")(sequelize, Sequelize.DataTypes);
const Pengguna = require("./pengguna")(sequelize, Sequelize.DataTypes);
const InventarisMaster = require("./inventaris_master")(
  sequelize,
  Sequelize.DataTypes
);
const StokSaatIni = require("./stok_saat_ini")(sequelize, Sequelize.DataTypes);
const HistoriInventaris = require("./histori_inventaris")(
  sequelize,
  Sequelize.DataTypes
);

// Associations
Kedai.hasMany(Cabang, { foreignKey: "kedai_id", sourceKey: "kedai_id" });
Cabang.belongsTo(Kedai, { foreignKey: "kedai_id", targetKey: "kedai_id" });

Kedai.hasMany(Pengguna, { foreignKey: "kedai_id", sourceKey: "kedai_id" });
Pengguna.belongsTo(Kedai, { foreignKey: "kedai_id", targetKey: "kedai_id" });

Cabang.hasMany(Pengguna, { foreignKey: "cabang_id", sourceKey: "cabang_id" });
Pengguna.belongsTo(Cabang, { foreignKey: "cabang_id", targetKey: "cabang_id" });

// Inventory associations
// Inventory associations (use canonical column names from db_scheme.sql)
// InventarisMaster <-> StokSaatIni (item_id)
InventarisMaster.hasMany(StokSaatIni, {
  foreignKey: "item_id",
  sourceKey: "item_id",
});
StokSaatIni.belongsTo(InventarisMaster, {
  foreignKey: "item_id",
  targetKey: "item_id",
});

// Cabang <-> StokSaatIni (cabang_id)
Cabang.hasMany(StokSaatIni, {
  foreignKey: "cabang_id",
  sourceKey: "cabang_id",
});
StokSaatIni.belongsTo(Cabang, {
  foreignKey: "cabang_id",
  targetKey: "cabang_id",
});

// InventarisMaster <-> HistoriInventaris (item_id)
InventarisMaster.hasMany(HistoriInventaris, {
  foreignKey: "item_id",
  sourceKey: "item_id",
});
HistoriInventaris.belongsTo(InventarisMaster, {
  foreignKey: "item_id",
  targetKey: "item_id",
});

// HistoriInventaris -> Cabang / Kedai
Cabang.hasMany(HistoriInventaris, {
  foreignKey: "cabang_id",
  sourceKey: "cabang_id",
});
HistoriInventaris.belongsTo(Cabang, {
  foreignKey: "cabang_id",
  targetKey: "cabang_id",
});

Kedai.hasMany(HistoriInventaris, {
  foreignKey: "kedai_id",
  sourceKey: "kedai_id",
});
HistoriInventaris.belongsTo(Kedai, {
  foreignKey: "kedai_id",
  targetKey: "kedai_id",
});

// InventarisMaster belongs to Kedai
Kedai.hasMany(InventarisMaster, {
  foreignKey: "kedai_id",
  sourceKey: "kedai_id",
});
InventarisMaster.belongsTo(Kedai, {
  foreignKey: "kedai_id",
  targetKey: "kedai_id",
});

module.exports = {
  sequelize,
  Sequelize,
  Kedai,
  Cabang,
  Pengguna,
  InventarisMaster,
  StokSaatIni,
  HistoriInventaris,
};
