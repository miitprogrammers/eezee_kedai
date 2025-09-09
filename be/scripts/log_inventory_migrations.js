const { appendActivity } = require("../utils/log_activity");

appendActivity(
  "Added migrations for inventory models: inventaris_master, stok_saat_ini, histori_inventaris",
  {
    meta: {
      files: [
        "be/migrations/20250909-create-inventaris_master.js",
        "be/migrations/20250909-create-stok_saat_ini.js",
        "be/migrations/20250909-create-histori_inventaris.js",
      ],
    },
  }
);
