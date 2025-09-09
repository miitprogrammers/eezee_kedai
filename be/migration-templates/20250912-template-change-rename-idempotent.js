/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Example idempotent changeColumn (safe if MyTable doesn't exist)
    try {
      const table = await queryInterface.describeTable("MyTable");
      if (table && table.some_column) {
        await queryInterface.changeColumn("MyTable", "some_column", {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        });
      }
    } catch (e) {
      // table doesn't exist; skip
    }

    // Example idempotent renameColumn (safe if MyTable doesn't exist)
    try {
      const table2 = await queryInterface.describeTable("MyTable");
      if (table2 && table2.old_column && !table2.new_column) {
        await queryInterface.renameColumn("MyTable", "old_column", "new_column");
      }
    } catch (e) {
      // table doesn't exist; skip
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      const tableDown = await queryInterface.describeTable("MyTable");
      if (tableDown && tableDown.new_column && !tableDown.old_column) {
        await queryInterface.renameColumn("MyTable", "new_column", "old_column");
      }
    } catch (e) {
      // skip
    }

    try {
      const tableDown2 = await queryInterface.describeTable("MyTable");
      if (tableDown2 && tableDown2.some_column) {
        await queryInterface.changeColumn("MyTable", "some_column", {
          type: Sequelize.STRING(255),
          allowNull: true,
        });
      }
    } catch (e) {
      // skip
    }
  },
};
