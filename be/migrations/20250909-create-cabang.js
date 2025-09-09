"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cabang", {
      cabang_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nama_cabang: { type: Sequelize.STRING(255), allowNull: false },
      alamat: { type: Sequelize.STRING(500) },
      kedai_id: { type: Sequelize.UUID, allowNull: false },
      is_utama: { type: Sequelize.BOOLEAN, defaultValue: false },
      is_aktif: { type: Sequelize.BOOLEAN, defaultValue: true },
      dibuat_pada: { type: Sequelize.DATE, allowNull: false },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cabang");
  },
};
