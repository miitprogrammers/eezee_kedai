const { appendActivity } = require("../utils/log_activity");

appendActivity(
  "Added inventory models: inventaris_master, stok_saat_ini, histori_inventaris",
  {
    meta: {
      files: [
        "be/models/inventaris_master.js",
        "be/models/stok_saat_ini.js",
        "be/models/histori_inventaris.js",
      ],
    },
  }
);
