const { appendActivity } = require("./be/utils/log_activity");
const ok = appendActivity("Ran test suite (local): all tests passed", {
  level: "info",
  details: { suites: 9, tests: 22, status: "all passed" },
});
console.log("appendActivity result:", ok);
