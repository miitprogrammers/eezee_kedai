# Eezee Kedai - Backend

Instructions to bootstrap the backend locally.

1. Copy `.env.example` to `.env` and fill database credentials.
2. Install dependencies:

```powershell
cd be
npm install
```

3. Run migrations (if using sequelize-cli migrations):

```powershell
npm run migrate
```

4. Start server (development):

```powershell
npm run dev
```

## Run tests

```powershell
cd be
npm test
```

Notes:
- Tests use `NODE_ENV=test` and expect a test database configured in `.env` (defaults to `eezee_kedai_test`).
- For logging and activity entries, use `be/utils/log_activity.js` and run scripts from repository root to avoid require path issues.

OpenAPI

The repository includes a minimal OpenAPI file at `docs/openapi.yaml`. When the backend server is running, you can fetch it at:

```
GET http://localhost:3000/api/docs/openapi.yaml
```

Swagger UI (interactive):

```
GET http://localhost:3000/api/docs/swagger
```

Seed test users

Run the seed script to create two test users (Pemilik and Kasir) with password `password123`:

```powershell
cd be
npm run seed:test
```

After running, sample credentials:
- pemilik@test.local / password123 (role: Pemilik)
- kasir@test.local / password123 (role: Kasir)

Undo seeded test users (best-effort)

```powershell
cd be
npm run seed:undo
```

Checkpoint summary

The automated checkpoint run at 2025-09-09 21:52:50 wrote a concise summary to `docs/checkpoint_summary_20250909-215250.md` and a full log to `logs/checkpoint-20250909-215250.log`.
