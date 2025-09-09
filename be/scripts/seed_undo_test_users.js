const { sequelize } = require("../models");
const { Kedai, Cabang, Pengguna } = require("../models");

async function undo() {
  // We try to remove users with the test emails, then remove their cabang/kedai if they match seed names.
  try {
    await sequelize.authenticate();

    // delete users by email
    await Pengguna.destroy({
      where: { email: ["pemilik@test.local", "kasir@test.local"] },
    });

    // delete cabang and kedai by seeded names (best-effort)
    await Cabang.destroy({ where: { nama_cabang: "seed-cabang" } });
    await Kedai.destroy({ where: { nama_kedai: "seed-kedai" } });

    console.log("Seed undo completed (best-effort).");
    process.exit(0);
  } catch (err) {
    console.error("Seed undo failed:", err);
    process.exit(2);
  }
}

undo();
