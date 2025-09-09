/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Example idempotent addColumn migration (safe if MyTable doesn't exist)
    let table;
    try {
      table = await queryInterface.describeTable("MyTable");
    } catch (e) {
      // table doesn't exist in fresh DB; skip addColumn safely
      return;
    }
    if (!table || !table.new_column) {
      await queryInterface.addColumn("MyTable", "new_column", {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      const table = await queryInterface.describeTable("MyTable");
      if (table && table.new_column) {
        await queryInterface.removeColumn("MyTable", "new_column");
      }
    } catch (e) {
      // table not present; nothing to undo
    }
  },
};
