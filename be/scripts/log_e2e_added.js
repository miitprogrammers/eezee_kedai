const { appendActivity } = require("../utils/log_activity");

appendActivity("Added E2E CRUD tests: be/tests/e2e_crud.test.js", {
  level: "info",
  details: { file: "be/tests/e2e_crud.test.js" },
});
console.log("Logged e2e test addition");
