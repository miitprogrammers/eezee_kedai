const fs = require("fs");
const path = require("path");

function _wibTimestamp(date = new Date()) {
  try {
    // Use Asia/Jakarta timezone formatting
    const parts = new Date(date).toLocaleString("sv-SE", {
      timeZone: "Asia/Jakarta",
    });
    return parts.replace("T", " ");
  } catch (e) {
    const d = new Date(Date.now() + 7 * 3600 * 1000);
    return d.toISOString().replace("T", " ").split(".")[0];
  }
}

/**
 * appendActivity(message, opts)
 * opts: { level: 'info'|'warn'|'error', error: Error|object, details: { how, plan, meta } }
 */
function appendActivity(message, opts = {}) {
  const logPath = path.resolve(
    __dirname,
    "..",
    "..",
    "docs",
    "log_aktifitas.md"
  );
  const ts = _wibTimestamp();
  const level = (opts.level || "info").toLowerCase();

  let content = `\n### ${ts} WIB — ${level.toUpperCase()}\n\n`;

  if (level === "error" && opts.error) {
    const err = opts.error;
    const why = (err && (err.message || String(err))) || "Unknown error";
    const how =
      (err &&
        (err.stack
          ? String(err.stack).split("\n").slice(0, 3).join(" | ")
          : JSON.stringify(err))) ||
      "";
    const plan =
      opts.details && opts.details.plan
        ? opts.details.plan
        : opts.details && opts.details.meta
        ? JSON.stringify(opts.details.meta)
        : "TBD";

    content += `- WHAT: ${message}\n`;
    content += `- WHY: ${why}\n`;
    content += `- HOW: ${how}\n`;
    content += `- PLAN: ${plan}\n\n`;
    if (opts.details && opts.details.how)
      content += `- DETAILS: ${opts.details.how}\n\n`;
  } else {
    // normal info/warn
    content += `- ${message}\n\n`;
    if (opts.details) {
      try {
        content += `- meta: ${JSON.stringify(opts.details)}\n\n`;
      } catch (e) {
        content += `- meta: [unserializable]\n\n`;
      }
    }
  }

  try {
    fs.appendFileSync(logPath, content, "utf8");
    try {
      const logger = require("../logger");
      if (level === "error" && opts.error) {
        logger.error(message, {
          error: opts.error && (opts.error.stack || opts.error.message),
          details: opts.details || null,
        });
      } else {
        logger.info(message, { details: opts.details || null });
      }
    } catch (e) {
      // ignore if logger not installed
    }
    return true;
  } catch (err) {
    console.error("Failed to append activity:", err.message || err);
    return false;
  }
}

module.exports = { appendActivity };
