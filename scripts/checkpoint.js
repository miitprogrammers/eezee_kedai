const fs = require("fs");
const path = require("path");
const cp = require("child_process");

function nowTimestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(
    d.getHours()
  )}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

(async function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const docsDir = path.join(repoRoot, "docs");
  const logsDir = path.join(repoRoot, "logs");
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

  try {
    // read docs files
    const docs = fs.readdirSync(docsDir).filter((f) => f.endsWith(".md"));

    // run tests in be/ (npm test) with retry
    const beDir = path.join(repoRoot, "be");
    const maxAttempts = 3;
    let attempt = 0;
    let result = null;
    let success = false;
    let combinedOut = "";

    while (attempt < maxAttempts && !success) {
      attempt += 1;
      const r = cp.spawnSync("npm", ["test", "--silent"], {
        cwd: beDir,
        encoding: "utf8",
        shell: true,
      });
      result = r;
      const out = (r.stdout || "") + "\n" + (r.stderr || "");
      if (r.error) {
        combinedOut += `--- ERROR ---\n${r.error.stack || String(r.error)}\n`;
      }
      if (r.signal) {
        combinedOut += `--- SIGNAL: ${r.signal} ---\n`;
      }
      combinedOut += `--- ATTEMPT ${attempt} ---\n` + out + "\n";
      success = r.status === 0;
      if (!success && attempt < maxAttempts) {
        // small backoff
        await new Promise((res) => setTimeout(res, 1000 * attempt));
      }
    }

    // write full output to logs
    const logFile = path.join(logsDir, `checkpoint-${nowTimestamp()}.log`);
    fs.writeFileSync(logFile, combinedOut, "utf8");

    // require logging helper using absolute path to avoid CWD issues
    const logHelperPath = path.join(repoRoot, "be", "utils", "log_activity.js");
    const { appendActivity } = require(logHelperPath);

    // prepare trimmed summary for log meta
    const summary = combinedOut.slice(0, 4000);

    appendActivity("Automated checkpoint: read docs and ran backend tests", {
      level: "info",
      details: {
        action: "auto_checkpoint",
        files: docs,
        tests: success ? "passed" : "failed",
        attempts: attempt,
        log_file: path.relative(repoRoot, logFile),
        summary,
      },
    });

    console.log(
      "Checkpoint completed. Tests:",
      success ? "passed" : "failed",
      "attempts:",
      attempt,
      "log:",
      logFile
    );
    process.exit(success ? 0 : 2);
  } catch (err) {
    try {
      const repoRoot = path.resolve(__dirname, "..");
      const logHelperPath = path.join(
        repoRoot,
        "be",
        "utils",
        "log_activity.js"
      );
      const { appendActivity } = require(logHelperPath);
      appendActivity("Automated checkpoint failed", {
        level: "error",
        error: err,
        details: { action: "auto_checkpoint", plan: "fix and retry" },
      });
    } catch (e) {
      console.error("Failed to log error:", e);
    }
    console.error("Checkpoint error:", err);
    process.exit(3);
  }
})();
