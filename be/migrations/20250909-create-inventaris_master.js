/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("InventarisMaster", {
      item_id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      nama_item: { type: Sequelize.STRING(255), allowNull: false },
      unit: { type: Sequelize.STRING(50), allowNull: false },
      kedai_id: { type: Sequelize.STRING(36), allowNull: false },
      is_aktif: { type: Sequelize.BOOLEAN, defaultValue: true },
      dibuat_pada: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("InventarisMaster");
  },
};
