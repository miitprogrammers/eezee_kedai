const fs = require("fs");
const path = require("path");

function scan() {
  const migrationsDir = path.resolve(__dirname, "..", "migrations");
  const files = fs.readdirSync(migrationsDir).filter((f) => f.endsWith(".js"));
  const problems = [];
  files.forEach((file) => {
    const content = fs.readFileSync(path.join(migrationsDir, file), "utf8");
    const hasAdd = /\baddColumn\s*\(/.test(content);
    if (hasAdd) {
      const hasDescribe = /describeTable\s*\(/.test(content);
      if (!hasDescribe) {
        problems.push({
          file,
          reason: "uses addColumn without describeTable check",
        });
      }
    }
  });

  if (problems.length > 0) {
    console.error(
      "Migration lint failed: found potential non-idempotent addColumn usages:\n"
    );
    problems.forEach((p) => console.error(`- ${p.file}: ${p.reason}`));
    console.error(
      "\nPlease make migration idempotent by using describeTable() before addColumn."
    );
    process.exit(2);
  }

  console.log("Migration lint passed: no suspicious addColumn found.");
}

scan();
