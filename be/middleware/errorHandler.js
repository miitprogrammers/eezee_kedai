module.exports = function errorHandler(err, req, res, next) {
  // normalize errors to { error: { message, code?, details? } }
  const status = err && err.status ? err.status : 500;
  const message = err && err.message ? err.message : "Internal server error";
  const payload = { error: { message } };
  if (process.env.NODE_ENV === "development" && err.stack) payload.error.stack = err.stack;
  // log via helper if available
  try {
    const { appendActivity } = require("../utils/log_activity");
    appendActivity(`Error handled: ${message}`, { level: "error", error: err, details: { how: "errorHandler", plan: "inspect logs" } });
  } catch (e) {}
  res.status(status).json(payload);
};
