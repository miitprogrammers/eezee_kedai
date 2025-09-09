/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Example idempotent addColumn migration
    const table = await queryInterface.describeTable('MyTable');
    if (!table || !table.new_column) {
      await queryInterface.addColumn('MyTable', 'new_column', {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('MyTable');
    if (table && table.new_column) {
      await queryInterface.removeColumn('MyTable', 'new_column');
    }
  },
};
