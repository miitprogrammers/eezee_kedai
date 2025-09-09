const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

async function main() {
  try {
    const cfgAll = require('../config/sequelize-config');
    const env = process.env.NODE_ENV || 'test';
    const cfg = cfgAll[env] || cfgAll.test;

    const sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, {
      host: cfg.host || process.env.DB_HOST || '127.0.0.1',
      port: cfg.port || process.env.DB_PORT || 3306,
      dialect: cfg.dialect || 'mysql',
      logging: false,
    });

    const qi = sequelize.getQueryInterface();

    const migrationsDir = path.resolve(__dirname, '..', 'migrations');
    const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith('.js'));

    const conflicts = [];

    const addColumnRegex = /addColumn\s*\(\s*['"]([^'\"]+)['"]\s*,\s*['"]([^'\"]+)['"]/g;

    for (const file of files) {
      const content = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      let match;
      while ((match = addColumnRegex.exec(content)) !== null) {
        const table = match[1];
        const column = match[2];
        try {
          const tableDesc = await qi.describeTable(table);
          if (tableDesc && Object.prototype.hasOwnProperty.call(tableDesc, column)) {
            conflicts.push({ file, table, column });
          }
        } catch (err) {
          // table may not exist yet in fresh DB; ignore
        }
      }
    }

    if (conflicts.length > 0) {
      console.error('Schema drift WARNING: found addColumn in migrations for columns that already exist in DB:');
      conflicts.forEach((c) => {
        console.error(`- ${c.file}: addColumn(${c.table}, ${c.column}) -> column already exists`);
      });
      console.error('\nTo prevent duplicate-column migration failures, either make the migration idempotent or remove the redundant migration.');
      await sequelize.close();
      process.exit(1);
    }

    console.log('No schema-drift conflicts detected for addColumn operations.');
    await sequelize.close();
    process.exit(0);
  } catch (err) {
    console.error('Failed to run schema drift check:', err && err.message ? err.message : String(err));
    process.exit(2);
  }
}

main();
