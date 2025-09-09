const { appendActivity } = require("../utils/log_activity");

function requireRole(...allowed) {
  // allow passing an array or multiple args
  const roles = Array.isArray(allowed[0]) ? allowed[0] : allowed;
  return (req, res, next) => {
    try {
      const peran = req.user && req.user.peran;
      if (!peran || roles.indexOf(peran) === -1) {
        const err = new Error("Forbidden: insufficient role");
        appendActivity("RBAC: forbidden", {
          level: "error",
          error: err,
          details: { how: "requireRole", plan: `allowed: ${roles.join(",")}` },
        });
        return res.status(403).json({ error: "Forbidden" });
      }
      next();
    } catch (err) {
      appendActivity("RBAC: error checking role", {
        level: "error",
        error: err,
        details: { how: "requireRole" },
      });
      res.status(500).json({ error: "Server error" });
    }
  };
}

module.exports = { requireRole };
