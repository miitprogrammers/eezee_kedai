"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("kedai", {
      kedai_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nama_kedai: { type: Sequelize.STRING(255), allowNull: false },
      alamat: { type: Sequelize.STRING(500) },
      deskripsi: { type: Sequelize.TEXT },
      is_aktif: { type: Sequelize.BOOLEAN, defaultValue: true },
      dibuat_pada: { type: Sequelize.DATE, allowNull: false },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("kedai");
  },
};
