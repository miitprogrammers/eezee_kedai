const { appendActivity } = require("../utils/log_activity");

const files = [
  "be/middleware/verifyToken.js",
  "be/validators/authValidators.js",
  "be/validators/modelValidators.js",
  "be/controllers/kedaiController.js",
  "be/controllers/cabangController.js",
  "be/controllers/penggunaController.js",
  "be/routes/api/managementRoutes.js",
  "be/routes/api/authRoutes.js (updated)",
  "be/index.js (updated)",
  "be/tests/auth_validation.test.js",
];

appendActivity(
  "Repo changes: added/updated backend files (auth/validation/controllers/routes/tests)",
  {
    level: "info",
    details: { files },
  }
);

console.log("Logged changes to docs/log_aktifitas.md");
