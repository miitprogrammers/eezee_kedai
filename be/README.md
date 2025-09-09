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

## Example requests (auth flow)

Sample curl: register -> login -> call protected endpoint

```bash
# Register (optional)
curl -X POST http://localhost:3000/api/auth/register \
	-H 'Content-Type: application/json' \
	-d '{"nama":"Pemilik Test","email":"pemilik@test.local","password":"password123","role":"Pemilik"}'

# Login
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/login \
	-H 'Content-Type: application/json' \
	-d '{"email":"pemilik@test.local","password":"password123"}' | jq -r .token)

# Create Kedai (protected)
curl -X POST http://localhost:3000/api/mgmt/kedai \
	-H "Authorization: Bearer $TOKEN" \
	-H 'Content-Type: application/json' \
	-d '{"nama":"My Kedai"}'
```

Supertest snippet (Jest) — auth flow and protected call

```js
const request = require('supertest');
const { app } = require('../index');

test('auth flow: register -> login -> create kedai', async () => {
	// register (if needed)
	await request(app)
		.post('/api/auth/register')
		.send({ nama: 'Pemilik Test', email: 'pemilik@test.local', password: 'password123', role: 'Pemilik' })
		.expect(function (res) {
			// may be 201 or 400 if user exists
			if (![201, 400].includes(res.status)) throw new Error('unexpected status ' + res.status);
		});

	// login
	const loginRes = await request(app)
		.post('/api/auth/login')
		.send({ email: 'pemilik@test.local', password: 'password123' })
		.expect(200);

	const token = loginRes.body.token;
	expect(token).toBeDefined();

	// call protected endpoint
	await request(app)
		.post('/api/mgmt/kedai')
		.set('Authorization', `Bearer ${token}`)
		.send({ nama: 'Integration Kedai' })
		.expect(201);
});
```
