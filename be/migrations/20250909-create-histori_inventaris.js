/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HistoriInventaris", {
      log_id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      tanggal: { type: Sequelize.DATE, allowNull: false },
      item_id: { type: Sequelize.STRING(36), allowNull: false },
      jumlah: { type: Sequelize.INTEGER, allowNull: false },
      harga_beli: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      cabang_id: { type: Sequelize.STRING(36), allowNull: false },
      kedai_id: { type: Sequelize.STRING(36), allowNull: false },
      tipe_transaksi: {
        type: Sequelize.ENUM("Pembelian", "Penjualan"),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("histori_inventaris");
  },
};
