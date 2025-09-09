const { sequelize } = require("../models");

async function inspect() {
  try {
    const [tables] = await sequelize.query("SHOW TABLES");
    console.log(
      "Tables:",
      tables.map((r) => Object.values(r)[0])
    );

    const list = ["kedai", "inventaris_master", "stok_saat_ini"];
    for (const t of list) {
      try {
        const [create] = await sequelize.query(`SHOW CREATE TABLE \`${t}\``);
        console.log("\nSHOW CREATE TABLE", t, "\n", create[0]["Create Table"]);
      } catch (err) {
        console.log(`\nNo table ${t} or error:`, err.message || err);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error("Inspect error:", err.message || err);
    process.exit(1);
  }
}

inspect();
