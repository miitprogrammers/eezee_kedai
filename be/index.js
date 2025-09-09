require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

const IP = process.env.IP || "127.0.0.1";
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*", methods: ["POST", "GET"] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// register API routes
try {
  const authRoutes = require("./routes/api/authRoutes");
  app.use("/api/auth", authRoutes);
} catch (e) {
  console.warn("Auth routes not loaded:", e.message || e);
}

// management routes (kedai, cabang, pengguna) - protected sample routes
try {
  const managementRoutes = require("./routes/api/managementRoutes");
  app.use("/api/mgmt", managementRoutes);
} catch (e) {
  console.warn("Management routes not loaded:", e.message || e);
}

// inventory routes
try {
  const inventoryRoutes = require("./routes/api/inventoryRoutes");
  app.use("/api/inventory", inventoryRoutes);
} catch (e) {
  console.warn("Inventory routes not loaded:", e.message || e);
}

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/health", (req, res) => res.json({ status: "ok", time: Date.now() }));

// expose minimal OpenAPI doc for frontend dev
try {
  const openapiPath = path.join(__dirname, "..", "docs", "openapi.yaml");
  app.get("/api/docs/openapi.yaml", (req, res) => res.sendFile(openapiPath));
} catch (e) {
  // ignore
}

// Serve Swagger UI which fetches the YAML doc
try {
  app.use(
    "/api/docs/swagger",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      swaggerOptions: { url: "/api/docs/openapi.yaml" },
      explorer: true,
    })
  );
} catch (e) {
  // ignore
}

// request logging middleware (winston if available)
try {
  const requestLogger = require("./logger");
  app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
      requestLogger.info({
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        duration: Date.now() - start,
        ip: req.ip,
      });
    });
    next();
  });
} catch (e) {
  // fallback to morgan already added
}

// app.use(express.static(path.join(__dirname, "dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

const server = http.createServer(app);

if (process.env.NODE_ENV !== "test") {
  server.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}`);
  });
}

// Export for testing
try {
  // attempt to log startup activity
  const { appendActivity } = require("./utils/log_activity");
  appendActivity(`Server started at http://${IP}:${PORT}`);
} catch (err) {
  console.warn("Logging helper not available:", err.message || err);
}

module.exports = { app, server };
