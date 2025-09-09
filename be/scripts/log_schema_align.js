const { appendActivity } = require("../utils/log_activity");

appendActivity(
  "Aligned inventory models and migrations to db_scheme.sql canonical schema",
  {
    meta: {
      files: [
        "be/models/inventaris_master.js",
        "be/models/stok_saat_ini.js",
        "be/models/histori_inventaris.js",
        "be/migrations/20250909-create-inventaris_master.js",
        "be/migrations/20250909-create-stok_saat_ini.js",
        "be/migrations/20250909-create-histori_inventaris.js",
      ],
    },
  }
);
