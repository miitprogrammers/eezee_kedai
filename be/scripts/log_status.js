const { appendActivity } = require("../utils/log_activity");

appendActivity(
  "Project status updated: implemented auth validation, middleware, CRUD controllers, and tests",
  {
    level: "info",
    details: {
      status_date: "2025-09-09",
      changes: [
        "auth validation (express-validator)",
        "verifyToken middleware",
        "CRUD controllers for Kedai/Cabang/Pengguna",
        "validators for models",
        "tests added",
      ],
    },
  }
);

console.log("Project status logged to docs/log_aktifitas.md");
