/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // add column if not exists (safe migration)
    const table = await queryInterface.describeTable("InventarisMaster");
    if (!table || !table.dibuat_pada) {
      await queryInterface.addColumn("InventarisMaster", "dibuat_pada", {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
    } else {
      // column already exists; no-op
      // this makes the migration idempotent and safe across re-runs
    }
  },

  async down(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable("InventarisMaster");
    if (table && table.dibuat_pada) {
      await queryInterface.removeColumn("InventarisMaster", "dibuat_pada");
    }
  },
};
