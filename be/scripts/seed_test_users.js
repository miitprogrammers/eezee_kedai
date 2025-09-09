const { sequelize } = require("../models");
const { Kedai, Cabang, Pengguna } = require("../models");
const bcrypt = require("bcrypt");

async function seed() {
  await sequelize.sync();

  const kedai = await Kedai.create({ nama_kedai: "seed-kedai" });
  const cabang = await Cabang.create({
    nama_cabang: "seed-cabang",
    kedai_id: kedai.kedai_id,
    is_utama: true,
  });

  const pw = "password123";
  const hash = await bcrypt.hash(pw, 10);

  const pemilik = await Pengguna.create({
    nama_lengkap: "Pemilik Test",
    email: "pemilik@test.local",
    password: hash,
    peran: "Pemilik",
    kedai_id: kedai.kedai_id,
    cabang_id: cabang.cabang_id,
  });

  const kasir = await Pengguna.create({
    nama_lengkap: "Kasir Test",
    email: "kasir@test.local",
    password: hash,
    peran: "Kasir",
    kedai_id: kedai.kedai_id,
    cabang_id: cabang.cabang_id,
  });

  console.log("Seeded test data:");
  console.log(`  Kedai: ${kedai.kedai_id} (${kedai.nama_kedai})`);
  console.log(`  Cabang: ${cabang.cabang_id} (${cabang.nama_cabang})`);
  console.log(`  Pemilik: ${pemilik.user_id} - ${pemilik.email}`);
  console.log(`  Kasir: ${kasir.user_id} - ${kasir.email}`);
  console.log(
    "Credentials (plain): pemilik@test.local / password123 , kasir@test.local / password123"
  );
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(2);
});
