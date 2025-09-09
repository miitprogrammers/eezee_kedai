const jwt = require("jsonwebtoken");
const { appendActivity } = require("../utils/log_activity");

function verifyToken(req, res, next) {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  if (!authHeader) {
    appendActivity("Auth: missing token", {
      level: "error",
      error: new Error("No token provided"),
      details: { how: "verifyToken", plan: "provide Authorization header" },
    });
    return res.status(401).json({ error: "No token provided" });
  }

  const parts = authHeader.split(" ");
  const token =
    parts.length === 2 && parts[0] === "Bearer" ? parts[1] : authHeader;

  jwt.verify(token, process.env.TOKEN_SECRET || "secret", (err, decoded) => {
    if (err) {
      appendActivity("Auth: invalid token", {
        level: "error",
        error: err,
        details: { how: "verifyToken", plan: "check token generation" },
      });
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
}

module.exports = { verifyToken };
