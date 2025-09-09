const { sequelize, Kedai, Cabang, Pengguna } = require("../models");
const { hashPassword, comparePassword } = require("../utils/passwordUtils");
const jwt = require("jsonwebtoken");

async function register({ nama_lengkap, email, password }) {
  return sequelize.transaction(async (t) => {
    // create kedai + cabang + pengguna (Pemilik)
    const kedai = await Kedai.create(
      { nama_kedai: `${nama_lengkap}'s Kedai` },
      { transaction: t }
    );
    const cabang = await Cabang.create(
      { nama_cabang: "Cabang Utama", kedai_id: kedai.kedai_id, is_utama: true },
      { transaction: t }
    );
    const hashed = await hashPassword(password);
    const pengguna = await Pengguna.create(
      {
        nama_lengkap,
        email,
        password: hashed,
        peran: "Pemilik",
        kedai_id: kedai.kedai_id,
        cabang_id: cabang.cabang_id,
      },
      { transaction: t }
    );

    const token = jwt.sign(
      {
        user_id: pengguna.user_id,
        kedai_id: kedai.kedai_id,
        peran: pengguna.peran,
      },
      process.env.TOKEN_SECRET || "secret",
      { expiresIn: "7d" }
    );
    return { pengguna, kedai, cabang, token };
  });
}

async function login({ email, password }) {
  const pengguna = await Pengguna.findOne({ where: { email } });
  if (!pengguna) throw new Error("Unauthorized");
  const ok = await comparePassword(password, pengguna.password);
  if (!ok) throw new Error("Unauthorized");
  const token = jwt.sign(
    {
      user_id: pengguna.user_id,
      kedai_id: pengguna.kedai_id,
      peran: pengguna.peran,
    },
    process.env.TOKEN_SECRET || "secret",
    { expiresIn: "7d" }
  );
  return { pengguna, token };
}

module.exports = { register, login };
