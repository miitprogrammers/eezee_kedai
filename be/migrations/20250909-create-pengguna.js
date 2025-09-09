"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pengguna", {
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nama_lengkap: { type: Sequelize.STRING(255), allowNull: false },
      email: { type: Sequelize.STRING(255), allowNull: false, unique: true },
      password: { type: Sequelize.STRING(255), allowNull: false },
      peran: {
        type: Sequelize.ENUM("Pemilik", "Manajer", "Kasir"),
        allowNull: false,
      },
      kedai_id: { type: Sequelize.UUID, allowNull: false },
      cabang_id: { type: Sequelize.UUID, allowNull: false },
      dibuat_pada: { type: Sequelize.DATE, allowNull: false },
      terakhir_login: { type: Sequelize.DATE },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pengguna");
  },
};
