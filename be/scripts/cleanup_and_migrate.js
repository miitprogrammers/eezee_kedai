const { sequelize } = require("../models");
const { appendActivity } = require("../utils/log_activity");
const { exec } = require("child_process");
const path = require("path");

async function dropTables(tables) {
  try {
    // Temporarily disable FK checks to allow dropping tables that may be referenced
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0;");
    for (const t of tables) {
      try {
        await sequelize.query(`DROP TABLE IF EXISTS \`${t}\``);
        appendActivity(`Dropped table (if existed): ${t}`, { level: "info" });
        console.log(`Dropped table (if existed): ${t}`);
      } catch (err) {
        appendActivity(`Failed to drop table ${t}`, {
          level: "error",
          error: err,
          details: { how: "dropTables", plan: "manual inspect" },
        });
        console.error(`Failed to drop table ${t}:`, err.message || err);
        // continue attempting other drops
      }
    }
  } finally {
    // Re-enable FK checks
    try {
      await sequelize.query("SET FOREIGN_KEY_CHECKS = 1;");
    } catch (e) {
      console.error("Failed to re-enable FK checks:", e.message || e);
    }
  }
}

function runMigrations() {
  return new Promise((resolve, reject) => {
    const cwd = path.resolve(__dirname, "..");
    const cmd = "npx sequelize-cli db:migrate";
    const proc = exec(cmd, { cwd }, (error, stdout, stderr) => {
      if (error) return reject({ error, stdout, stderr });
      resolve({ stdout, stderr });
    });
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
  });
}

async function main() {
  appendActivity("Starting cleanup_and_migrate script", { level: "info" });
  const candidates = [
    "inventarismaster",
    "inventaris_master",
    "stoksaatini",
    "stok_saat_ini",
    "historiinventaris",
    "histori_inventaris",
  ];

  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await dropTables(candidates);
    appendActivity("Dropped candidate conflicting tables", {
      level: "info",
      details: { tables: candidates },
    });

    console.log("Running migrations...");
    appendActivity("Running sequelize migrations (db:migrate)", {
      level: "info",
    });
    const res = await runMigrations();
    appendActivity("Migrations finished", {
      level: "info",
      details: { stdout: res.stdout },
    });
    console.log("Migrations finished");
    process.exit(0);
  } catch (err) {
    console.error("Cleanup/migrate failed:", err);
    appendActivity("Cleanup and migrate failed", {
      level: "error",
      error: err,
      details: { how: "cleanup_and_migrate", plan: "inspect logs and rerun" },
    });
    process.exit(1);
  }
}

main();
