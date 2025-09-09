const { sequelize, Kedai, Cabang, Pengguna } = require("./models");

const { appendActivity } = (() => {
  try {
    return require("./utils/log_activity");
  } catch (e) {
    return { appendActivity: () => false };
  }
})();

async function run() {
  appendActivity("Starting model validation script (test_models.js)");
  try {
    await sequelize.authenticate();
    console.log("DB connection OK");

    // sync without forcing to avoid data loss
    await sequelize.sync({ alter: true });
    console.log("Models synced");

    // create sample data idempotently
    const [kedai] = await Kedai.findOrCreate({
      where: { nama_kedai: "Kedai Test" },
      defaults: { alamat: "Jl. Contoh" },
    });

    const [cabang] = await Cabang.findOrCreate({
      where: { nama_cabang: "Cabang Utama", kedai_id: kedai.kedai_id },
      defaults: { is_utama: true },
    });

    const [pengguna] = await Pengguna.findOrCreate({
      where: { email: "admin@test.local" },
      defaults: {
        nama_lengkap: "Admin Test",
        password: "hashed_pw",
        peran: "Pemilik",
        kedai_id: kedai.kedai_id,
        cabang_id: cabang.cabang_id,
      },
    });

    console.log("Sample data present/created:", {
      kedai_id: kedai.kedai_id,
      cabang_id: cabang.cabang_id,
      user_id: pengguna.user_id,
    });
    appendActivity("Model validation succeeded; sample data present/created");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err.message || err);
    appendActivity(`Model validation failed: ${err.message || err}`);
    process.exit(1);
  }
}

run();
