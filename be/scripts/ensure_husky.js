const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

try {
  const repoRoot = path.resolve(__dirname, "../..");
  const gitDir = path.join(repoRoot, ".git");
  if (!fs.existsSync(gitDir)) {
    console.log(".git not found; skipping husky install");
    process.exit(0);
  }

  console.log(".git found; running husky install");
  execSync("npx husky install", { stdio: "inherit", cwd: repoRoot });
  process.exit(0);
} catch (err) {
  console.error("ensure_husky failed:", err && err.message ? err.message : err);
  process.exit(0); // do not fail npm install in CI-less environments
}
