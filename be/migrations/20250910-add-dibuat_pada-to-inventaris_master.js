/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // add column if not exists (safe migration)
    await queryInterface.addColumn("InventarisMaster", "dibuat_pada", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("InventarisMaster", "dibuat_pada");
  },
};
