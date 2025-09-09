/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "StokSaatIni",
      {
        stok_id: {
          type: Sequelize.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        item_id: { type: Sequelize.STRING(36), allowNull: false },
        cabang_id: { type: Sequelize.STRING(36), allowNull: false },
        stok_saat_ini: { type: Sequelize.INTEGER, allowNull: false },
        harga_rata_rata: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        terakhir_diperbarui: { type: Sequelize.DATE, allowNull: false },
      },
      {
        uniqueKeys: {
          unique_item_cabang: {
            fields: ["item_id", "cabang_id"],
          },
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stok_saat_ini");
  },
};
