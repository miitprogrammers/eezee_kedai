const cp = require("child_process");
const fs = require("fs");
try {
  const hash = cp.execSync("git rev-parse HEAD").toString().trim();
  const changed = cp
    .execSync('git show --name-only --pretty="" HEAD')
    .toString()
    .trim()
    .split(/\r?\n/)
    .filter(Boolean);
  const { appendActivity } = require("./be/utils/log_activity");
  appendActivity("Pushed fixes to remote", {
    level: "info",
    details: { action: "push_fixes", commit: hash, files: changed },
  });
  console.log("OK_LOGGED", hash);
} catch (e) {
  console.error("ERR", e && e.message);
  process.exit(1);
}
