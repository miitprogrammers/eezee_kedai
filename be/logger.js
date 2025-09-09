const path = require("path");
const fs = require("fs");
const winston = require("winston");
require("winston-daily-rotate-file");

const logDir = path.resolve(__dirname, "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

const transport = new winston.transports.DailyRotateFile({
  filename: path.join(logDir, "activity-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxFiles: "14d",
  level: "info",
  format: winston.format.json(),
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.json()
  ),
  transports: [
    transport,
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

module.exports = logger;
