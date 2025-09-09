# Log Aktifitas Proyek Eezee Kedai

## Riwayat

### 2025-09-09 20:34:38 WIB — INFO

- Created: unit/integration tests for stock transaction (happy path + negative cases)

### 2025-09-09 20:50:00 WIB — INFO

- Added test helpers (`be/tests/helpers.js`) and extra stock transaction tests (stock-out + HPP)

### 2025-09-09 20:52:00 WIB — INFO

- Added CI workflow `.github/workflows/ci.yml` to run migrations and tests with MySQL service

### 2025-09-09 21:00:00 WIB — INFO

- Fixed test bug and added concurrency test for stock-in (`be/tests/stockTransaction_concurrency.test.js`)


### 2025-09-09 18:25 WIB — Inisialisasi perencanaan


Status: Perencanaan awal dan to-do dibuat; langkah implementasi berikutnya adalah menyiapkan environment dev dan migrasi DB, lalu mengimplementasikan auth dan model inti.

### 2025-09-09 — Model, Migration, dan Validasi

- Menambahkan konfigurasi Sequelize (`be/config/sequelize-config.js`, `be/config/database.js`) dan `.sequelizerc`.
- Menambahkan model Sequelize: `be/models/kedai.js`, `be/models/cabang.js`, `be/models/pengguna.js`, serta `be/models/index.js` dengan asosiasi dasar.
- Menambahkan migration files di `be/migrations/` untuk `kedai`, `cabang`, `pengguna`.
- Menambahkan skrip validasi `be/test_models.js` untuk menyambungkan ke DB, melakukan `sync` dan membuat sample data.
- Menjalankan `node test_models.js` — hasil: DB connection OK, Models synced, dan sample data berhasil dibuat (IDs tercatat di terminal).

Status: Models dan migrations dibuat; validasi lokal sukses menggunakan kredensial default. Untuk environment lain, perbarui `be/.env` lalu jalankan `npm run migrate`.



### 2025-09-09 11:42:57.982 — Automated activity

- Automated: models/migrations created and validated locally


### 2025-09-09 11:46:19.885 — Automated activity

- Starting model validation script (test_models.js)


### 2025-09-09 11:46:20.255 — Automated activity

- Model validation failed: Validation error


### 2025-09-09 11:47:10.557 — Automated activity

- Starting model validation script (test_models.js)


### 2025-09-09 11:47:10.874 — Automated activity

- Model validation succeeded; sample data present/created


### 2025-09-09 11:48:48.548 — Automated activity

- Action: enumerate next steps from to_do.md and request user choice


### 2025-09-09 11:50:07.934 — Automated activity

- Ran sequelize migrations (npm run migrate)


### 2025-09-09 11:50:41.905 — Automated activity

- Ran sequelize migrations (npm run migrate) - retry


### 2025-09-09 11:50:54.935 — Automated activity

- Ran sequelize migrations (npm run migrate) - second retry


### 2025-09-09 11:51:18.610 — Automated activity

- Ran sequelize migrations (npm run migrate) - third retry


### 2025-09-09 11:57:18.732 — Automated activity

- Server started at http://192.168.1.188:5151


### 2025-09-09 11:57:18.907 — Automated activity

- Auth: register testuser+ci@test.local


### 2025-09-09 11:57:18.992 — Automated activity

- Auth: login testuser+ci@test.local


### 2025-09-09 11:57:52.469 — Automated activity

- Server started at http://192.168.1.188:5151


### 2025-09-09 11:57:52.686 — Automated activity

- Auth: register failed Validation error


### 2025-09-09 11:57:52.774 — Automated activity

- Auth: login testuser+ci@test.local


### 2025-09-09 11:58:29.026 — Automated activity

- Server started at http://192.168.1.188:5151


### 2025-09-09 11:58:29.250 — Automated activity

- Auth: register failed Validation error


### 2025-09-09 11:58:29.336 — Automated activity

- Auth: login testuser+ci@test.local


### 2025-09-09 11:59:29.336 — OZZY

- menyimpan saran langkah selanjutnya dari copilot untuk catatan:

    - Tambah input validation (express-validator) untuk register/login payloads.
    - Tambah middleware auth (verifyToken) dan protect a sample route.
    - Buat controllers CRUD dasar untuk Kedai/Cabang/Pengguna.
    - Tambah unit tests untuk service functions and edge cases (invalid password, duplicate email).


### 2025-09-09 19:05:42 WIB — INFO

- Logging helper upgraded: structured error logs + WIB timestamps

- meta: {"upgraded":true}


### 2025-09-09 19:08:46 WIB — INFO

- Installing logger and testing request logging

- meta: {"step":"install"}


### 2025-09-09 19:09:31 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:09:58 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:10:54 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:16:53 WIB — INFO

- Checkpoint: inspected be folder and updated to_do.md statuses

- meta: {"action":"checkpoint"}


### 2025-09-09 19:27:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:27:46 WIB — INFO

- Auth: register bad


### 2025-09-09 19:27:46 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:7:68) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken

### 2025-09-09 19:45:00 WIB — INFO

- Updated `docs/to_do.md`: marked server-side `cabang_id` validation as DONE; updated Rasio Penyelesaian. Tests re-run locally: all backend tests passed (Jest + Supertest).

- meta: {"action":"update_todo","files":["docs/to_do.md"],"tests":"passed"}


### 2025-09-09 19:27:46 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:27:46 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 19:27:46 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 19:30:31 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:30:31 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:7:68) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 19:30:32 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:30:32 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 19:30:32 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 19:32:32 WIB — INFO

- Repo changes: added/updated backend files (auth/validation/controllers/routes/tests)

- meta: {"files":["be/middleware/verifyToken.js","be/validators/authValidators.js","be/validators/modelValidators.js","be/controllers/kedaiController.js","be/controllers/cabangController.js","be/controllers/penggunaController.js","be/routes/api/managementRoutes.js","be/routes/api/authRoutes.js (updated)","be/index.js (updated)","be/tests/auth_validation.test.js"]}


### 2025-09-09 19:34:31 WIB — INFO

- Project status updated: implemented auth validation, middleware, CRUD controllers, and tests

- meta: {"status_date":"2025-09-09","changes":["auth validation (express-validator)","verifyToken middleware","CRUD controllers for Kedai/Cabang/Pengguna","validators for models","tests added"]}


### 2025-09-09 19:39:10 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:39:10 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 19:39:10 WIB — INFO

- Kedai created: d1e3debc-28b9-406b-80cc-bc22eb1742ee


### 2025-09-09 19:39:11 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:39:11 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 19:39:12 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:39:12 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 19:39:12 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 19:40:51 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:40:51 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 19:40:51 WIB — INFO

- Kedai created: 1ac0f4be-60f6-411b-9be2-c2bdf3e8eb7d


### 2025-09-09 19:40:52 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:40:52 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 19:40:52 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 19:40:53 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:40:53 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 19:43:40 WIB — INFO

- Added E2E CRUD tests: be/tests/e2e_crud.test.js

- meta: {"file":"be/tests/e2e_crud.test.js"}


### 2025-09-09 19:43:55 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:43:56 WIB — INFO

- Kedai created: aa26f464-1e87-489f-b300-f829ab4575a7


### 2025-09-09 19:43:56 WIB — INFO

- Cabang created: 2c607d58-553b-4bce-bffb-6eaf7d05de17


### 2025-09-09 19:43:56 WIB — INFO

- Pengguna created: 476c8e41-d0d2-4a89-820e-2efb6b128681


### 2025-09-09 19:43:56 WIB — INFO

- Pengguna updated: 476c8e41-d0d2-4a89-820e-2efb6b128681


### 2025-09-09 19:43:56 WIB — INFO

- Pengguna deleted: 476c8e41-d0d2-4a89-820e-2efb6b128681


### 2025-09-09 19:43:56 WIB — INFO

- Cabang deleted: 2c607d58-553b-4bce-bffb-6eaf7d05de17


### 2025-09-09 19:43:56 WIB — INFO

- Kedai deleted: aa26f464-1e87-489f-b300-f829ab4575a7


### 2025-09-09 19:43:56 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:43:57 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 19:43:57 WIB — INFO

- Kedai created: d9f52fc5-ea11-4466-942e-e28e66d2b7f3


### 2025-09-09 19:43:57 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:43:57 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 19:43:57 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 19:43:58 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:43:58 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 19:46:14 WIB — INFO

- Added E2E negative tests: be/tests/e2e_negative.test.js

- meta: {"file":"be/tests/e2e_negative.test.js"}


### 2025-09-09 19:46:29 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:46:30 WIB — INFO

- Kedai created: 85aa88c5-a17b-4043-99b4-f008abf476d6


### 2025-09-09 19:46:30 WIB — INFO

- Cabang created: 66b24f41-2678-41cb-9fcd-4e42bb997a51


### 2025-09-09 19:46:30 WIB — INFO

- Pengguna created: c836a2a0-d477-425c-8931-8b3a5928c0d6


### 2025-09-09 19:46:30 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 19:46:30 WIB — INFO

- Pengguna deleted: c836a2a0-d477-425c-8931-8b3a5928c0d6


### 2025-09-09 19:46:30 WIB — INFO

- Cabang deleted: 66b24f41-2678-41cb-9fcd-4e42bb997a51


### 2025-09-09 19:46:30 WIB — INFO

- Kedai deleted: 85aa88c5-a17b-4043-99b4-f008abf476d6


### 2025-09-09 19:46:30 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:46:30 WIB — INFO

- Kedai created: b8fcb986-45a7-4dcb-ae31-eb47edcbbee3


### 2025-09-09 19:46:30 WIB — INFO

- Cabang created: 84a6672e-68ff-4878-9ad5-b97543ecbe48


### 2025-09-09 19:46:31 WIB — INFO

- Pengguna created: 0ae3776d-d87d-486c-aec3-632403f75a23


### 2025-09-09 19:46:31 WIB — INFO

- Pengguna updated: 0ae3776d-d87d-486c-aec3-632403f75a23


### 2025-09-09 19:46:31 WIB — INFO

- Pengguna deleted: 0ae3776d-d87d-486c-aec3-632403f75a23


### 2025-09-09 19:46:31 WIB — INFO

- Cabang deleted: 84a6672e-68ff-4878-9ad5-b97543ecbe48


### 2025-09-09 19:46:31 WIB — INFO

- Kedai deleted: b8fcb986-45a7-4dcb-ae31-eb47edcbbee3


### 2025-09-09 19:46:31 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:46:31 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 19:46:31 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 19:46:32 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:46:32 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 19:46:32 WIB — INFO

- Kedai created: 8f1d3261-1692-453d-b508-fc31a2fb3e31


### 2025-09-09 19:46:32 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 19:46:32 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 19:56:55 WIB — INFO

- Updated docs/to_do.md to mark auth, validators, CRUD controllers, RBAC, and tests as DONE where applicable


### 2025-09-09 19:59:58 WIB — INFO

- Checkpoint: updated docs/to_do.md with DONE/PROGRESS/PENDING statuses and next prioritized tasks


### 2025-09-09 20:01:29 WIB — INFO

- Cleaned and reformatted docs/to_do.md for readability


### 2025-09-09 20:04:39 WIB — INFO

- Added inventory models: inventaris_master, stok_saat_ini, histori_inventaris


### 2025-09-09 20:07:17 WIB — INFO

- Added migrations for inventory models: inventaris_master, stok_saat_ini, histori_inventaris


### 2025-09-09 20:09:00 WIB — INFO

- Starting model validation script (test_models.js)


### 2025-09-09 20:09:01 WIB — INFO

- Model validation failed: Can't create table `eezee_kedai`.`stok_saat_ini` (errno: 150 "Foreign key constraint is incorrectly formed")


### 2025-09-09 20:16:11 WIB — INFO

- Aligned inventory models and migrations to db_scheme.sql canonical schema


### 2025-09-09 20:18:47 WIB — INFO

- Starting cleanup_and_migrate script


### 2025-09-09 20:18:47 WIB — ERROR

- WHAT: Failed to drop table inventarismaster
- WHY: Cannot delete or update a parent row: a foreign key constraint fails
- HOW: Error |     at Query.run (f:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\lib\dialects\mysql\query.js:52:25) |     at f:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\lib\sequelize.js:315:28
- PLAN: manual inspect

- DETAILS: dropTables


### 2025-09-09 20:18:47 WIB — ERROR

- WHAT: Cleanup and migrate failed
- WHY: Cannot delete or update a parent row: a foreign key constraint fails
- HOW: Error |     at Query.run (f:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\lib\dialects\mysql\query.js:52:25) |     at f:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\lib\sequelize.js:315:28
- PLAN: inspect logs and rerun

- DETAILS: cleanup_and_migrate


### 2025-09-09 20:19:13 WIB — INFO

- Starting cleanup_and_migrate script


### 2025-09-09 20:19:13 WIB — INFO

- Dropped table (if existed): inventarismaster


### 2025-09-09 20:19:13 WIB — INFO

- Dropped table (if existed): inventaris_master


### 2025-09-09 20:19:13 WIB — INFO

- Dropped table (if existed): stoksaatini


### 2025-09-09 20:19:13 WIB — INFO

- Dropped table (if existed): stok_saat_ini


### 2025-09-09 20:19:13 WIB — INFO

- Dropped table (if existed): historiinventaris


### 2025-09-09 20:19:13 WIB — INFO

- Dropped table (if existed): histori_inventaris


### 2025-09-09 20:19:13 WIB — INFO

- Dropped candidate conflicting tables

- meta: {"tables":["inventarismaster","inventaris_master","stoksaatini","stok_saat_ini","historiinventaris","histori_inventaris"]}


### 2025-09-09 20:19:13 WIB — INFO

- Running sequelize migrations (db:migrate)


### 2025-09-09 20:19:16 WIB — ERROR

- WHAT: Cleanup and migrate failed
- WHY: [object Object]
- HOW: {"error":{"code":1,"killed":false,"signal":null,"cmd":"npx sequelize-cli db:migrate"},"stdout":"\n\u001b[4mSequelize CLI [Node: 22.15.0, CLI: 6.6.3, ORM: 6.37.7]\u001b[24m\n\n[dotenv@17.2.2] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }\nLoaded configuration file \"config\\sequelize-config.js\".\nUsing environment \"development\".\n== 20250909-create-histori_inventaris: migrating =======\n== 20250909-create-histori_inventaris: migrated (0.020s)\n\n== 20250909-create-inventaris_master: migrating =======\n== 20250909-create-inventaris_master: migrated (0.014s)\n\n== 20250909-create-stok_saat_ini: migrating =======\n\n\n","stderr":"\u001b[31mERROR:\u001b[39m You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '[object Object], PRIMARY KEY (`stok_id`)) ENGINE=InnoDB' at line 1\n"}
- PLAN: inspect logs and rerun

- DETAILS: cleanup_and_migrate


### 2025-09-09 20:19:36 WIB — INFO

- Starting cleanup_and_migrate script


### 2025-09-09 20:19:36 WIB — INFO

- Dropped table (if existed): inventarismaster


### 2025-09-09 20:19:36 WIB — INFO

- Dropped table (if existed): inventaris_master


### 2025-09-09 20:19:36 WIB — INFO

- Dropped table (if existed): stoksaatini


### 2025-09-09 20:19:36 WIB — INFO

- Dropped table (if existed): stok_saat_ini


### 2025-09-09 20:19:36 WIB — INFO

- Dropped table (if existed): historiinventaris


### 2025-09-09 20:19:36 WIB — INFO

- Dropped table (if existed): histori_inventaris


### 2025-09-09 20:19:36 WIB — INFO

- Dropped candidate conflicting tables

- meta: {"tables":["inventarismaster","inventaris_master","stoksaatini","stok_saat_ini","historiinventaris","histori_inventaris"]}


### 2025-09-09 20:19:36 WIB — INFO

- Running sequelize migrations (db:migrate)


### 2025-09-09 20:19:39 WIB — INFO

- Migrations finished

- meta: {"stdout":"\n\u001b[4mSequelize CLI [Node: 22.15.0, CLI: 6.6.3, ORM: 6.37.7]\u001b[24m\n\n[dotenv@17.2.2] injecting env (0) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }\nLoaded configuration file \"config\\sequelize-config.js\".\nUsing environment \"development\".\n== 20250909-create-stok_saat_ini: migrating =======\n== 20250909-create-stok_saat_ini: migrated (0.043s)\n\n"}


### 2025-09-09 20:21:06 WIB — INFO

- Starting model validation script (test_models.js)


### 2025-09-09 20:21:07 WIB — INFO

- Model validation succeeded; sample data present/created


### 2025-09-09 20:27:12 WIB — INFO

- InventarisMaster created: itm-1757424432455


### 2025-09-09 20:27:12 WIB — INFO

- Stock IN processed: itm-1757424432455@f1b084b3-86aa-41d1-af03-1b55b8efc5db +10


### 2025-09-09 20:34:38 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:34:38 WIB — INFO

- Kedai created: ab088382-d4fa-4384-a392-3010c814b7fd


### 2025-09-09 20:34:38 WIB — INFO

- Cabang created: a56027c6-4bf3-4eaf-80d3-a9079d5bb219


### 2025-09-09 20:34:38 WIB — INFO

- InventarisMaster created: item-1757424878658


### 2025-09-09 20:34:38 WIB — INFO

- Stock IN processed: item-1757424878658@a56027c6-4bf3-4eaf-80d3-a9079d5bb219 +10


### 2025-09-09 20:34:38 WIB — INFO

- Cabang deleted: a56027c6-4bf3-4eaf-80d3-a9079d5bb219


### 2025-09-09 20:34:38 WIB — INFO

- Kedai deleted: ab088382-d4fa-4384-a392-3010c814b7fd


### 2025-09-09 20:34:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:34:39 WIB — INFO

- Kedai created: 8619210e-de83-4691-a10a-5f104d06e838


### 2025-09-09 20:34:39 WIB — INFO

- Cabang created: 5e705571-a5bc-43e0-bff4-4ae66d839ea0


### 2025-09-09 20:34:39 WIB — INFO

- Pengguna created: 7fd53e97-329f-499b-8c39-4ce38d708d6d


### 2025-09-09 20:34:39 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:34:39 WIB — INFO

- Pengguna deleted: 7fd53e97-329f-499b-8c39-4ce38d708d6d


### 2025-09-09 20:34:39 WIB — INFO

- Cabang deleted: 5e705571-a5bc-43e0-bff4-4ae66d839ea0


### 2025-09-09 20:34:39 WIB — INFO

- Kedai deleted: 8619210e-de83-4691-a10a-5f104d06e838


### 2025-09-09 20:34:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:34:40 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:34:40 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:34:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:34:41 WIB — INFO

- Kedai created: 6831bd8d-c19f-4ab1-82b8-66b8f854cab5


### 2025-09-09 20:34:41 WIB — INFO

- Cabang created: 0264afc2-142f-47e0-9c35-ce0315f4b2b9


### 2025-09-09 20:34:41 WIB — INFO

- Pengguna created: a2cbde84-62ec-4f9f-bdd0-9154aa22a9ff


### 2025-09-09 20:34:41 WIB — INFO

- Pengguna updated: a2cbde84-62ec-4f9f-bdd0-9154aa22a9ff


### 2025-09-09 20:34:41 WIB — INFO

- Pengguna deleted: a2cbde84-62ec-4f9f-bdd0-9154aa22a9ff


### 2025-09-09 20:34:41 WIB — INFO

- Cabang deleted: 0264afc2-142f-47e0-9c35-ce0315f4b2b9


### 2025-09-09 20:34:41 WIB — INFO

- Kedai deleted: 6831bd8d-c19f-4ab1-82b8-66b8f854cab5


### 2025-09-09 20:34:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:34:41 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:34:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:34:42 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:34:42 WIB — INFO

- Kedai created: 29012bac-0e60-433d-a65e-c9d80f6dd49f


### 2025-09-09 20:41:12 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:12 WIB — INFO

- Kedai created: 9e04fbf9-de19-4fa2-9db9-5ec797474fa0


### 2025-09-09 20:41:12 WIB — INFO

- Cabang created: 585c1c6c-89d0-466e-98e5-ba02d266c38a


### 2025-09-09 20:41:12 WIB — INFO

- InventarisMaster created: item-hpp-1757425272773


### 2025-09-09 20:41:12 WIB — INFO

- Stock IN processed: item-hpp-1757425272773@585c1c6c-89d0-466e-98e5-ba02d266c38a +10


### 2025-09-09 20:41:12 WIB — INFO

- Stock IN processed: item-hpp-1757425272773@585c1c6c-89d0-466e-98e5-ba02d266c38a +5


### 2025-09-09 20:41:12 WIB — INFO

- Cabang deleted: 585c1c6c-89d0-466e-98e5-ba02d266c38a


### 2025-09-09 20:41:12 WIB — INFO

- Kedai deleted: 9e04fbf9-de19-4fa2-9db9-5ec797474fa0


### 2025-09-09 20:41:13 WIB — INFO

- Kedai created: 7e57a7a7-6299-43a3-a813-b93ae1e13419


### 2025-09-09 20:41:13 WIB — INFO

- Cabang created: abb4b5be-78b1-43d6-92bc-4c4816ede20d


### 2025-09-09 20:41:13 WIB — INFO

- InventarisMaster created: item-so-1757425272773


### 2025-09-09 20:41:13 WIB — INFO

- Stock IN processed: item-so-1757425272773@abb4b5be-78b1-43d6-92bc-4c4816ede20d +20


### 2025-09-09 20:41:13 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:13 WIB — INFO

- Kedai created: 9c6dd3cc-188c-4ffe-825e-f9d5a6a98c6c


### 2025-09-09 20:41:13 WIB — INFO

- Cabang created: bb47e6c3-158d-4222-9ccf-03c4a6f05796


### 2025-09-09 20:41:13 WIB — INFO

- InventarisMaster created: item-1757425273657


### 2025-09-09 20:41:13 WIB — INFO

- Stock IN processed: item-1757425273657@bb47e6c3-158d-4222-9ccf-03c4a6f05796 +10


### 2025-09-09 20:41:13 WIB — INFO

- Cabang deleted: bb47e6c3-158d-4222-9ccf-03c4a6f05796


### 2025-09-09 20:41:13 WIB — INFO

- Kedai deleted: 9c6dd3cc-188c-4ffe-825e-f9d5a6a98c6c


### 2025-09-09 20:41:14 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:14 WIB — INFO

- Kedai created: 758e4943-37b8-4a45-aa48-59a29fae0e43


### 2025-09-09 20:41:14 WIB — INFO

- Cabang created: 0e6d6889-ef52-4509-8aca-34783e7a6753


### 2025-09-09 20:41:14 WIB — INFO

- Pengguna created: 7d091249-35b6-4ed4-a3e2-9f0bae50577c


### 2025-09-09 20:41:14 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:41:14 WIB — INFO

- Pengguna deleted: 7d091249-35b6-4ed4-a3e2-9f0bae50577c


### 2025-09-09 20:41:14 WIB — INFO

- Cabang deleted: 0e6d6889-ef52-4509-8aca-34783e7a6753


### 2025-09-09 20:41:14 WIB — INFO

- Kedai deleted: 758e4943-37b8-4a45-aa48-59a29fae0e43


### 2025-09-09 20:41:15 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:15 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:41:15 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:41:15 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:15 WIB — INFO

- Kedai created: caad7225-25fa-4144-adc7-94e53454a4a3


### 2025-09-09 20:41:15 WIB — INFO

- Cabang created: e7282565-40d5-412c-8e95-a06685eb6aa7


### 2025-09-09 20:41:15 WIB — INFO

- Pengguna created: f7a863e5-be7b-4133-bbd8-0e9867a36dbe


### 2025-09-09 20:41:15 WIB — INFO

- Pengguna updated: f7a863e5-be7b-4133-bbd8-0e9867a36dbe


### 2025-09-09 20:41:16 WIB — INFO

- Pengguna deleted: f7a863e5-be7b-4133-bbd8-0e9867a36dbe


### 2025-09-09 20:41:16 WIB — INFO

- Cabang deleted: e7282565-40d5-412c-8e95-a06685eb6aa7


### 2025-09-09 20:41:16 WIB — INFO

- Kedai deleted: caad7225-25fa-4144-adc7-94e53454a4a3


### 2025-09-09 20:41:16 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:16 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:41:16 WIB — INFO

- Kedai created: 3eda579d-6a77-432e-b74e-0b301e5510a8


### 2025-09-09 20:41:17 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:41:17 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:42:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:40 WIB — INFO

- Kedai created: 351ef255-437c-4790-96be-45e983d6c548


### 2025-09-09 20:42:40 WIB — INFO

- Cabang created: 934a243e-661d-499b-9627-a8ea9c087b0c


### 2025-09-09 20:42:40 WIB — INFO

- InventarisMaster created: item-hpp-1757425360064


### 2025-09-09 20:42:40 WIB — INFO

- Stock IN processed: item-hpp-1757425360064@934a243e-661d-499b-9627-a8ea9c087b0c +10


### 2025-09-09 20:42:40 WIB — INFO

- Stock IN processed: item-hpp-1757425360064@934a243e-661d-499b-9627-a8ea9c087b0c +5


### 2025-09-09 20:42:40 WIB — INFO

- Cabang deleted: 934a243e-661d-499b-9627-a8ea9c087b0c


### 2025-09-09 20:42:40 WIB — INFO

- Kedai deleted: 351ef255-437c-4790-96be-45e983d6c548


### 2025-09-09 20:42:40 WIB — INFO

- Kedai created: 3e0d8db5-cc8e-4aea-9dbb-c4d6e72aa4bf


### 2025-09-09 20:42:40 WIB — INFO

- Cabang created: b10e5d19-611b-48df-ad76-3dfa47ee95b6


### 2025-09-09 20:42:40 WIB — INFO

- InventarisMaster created: item-so-1757425360064


### 2025-09-09 20:42:40 WIB — INFO

- Stock IN processed: item-so-1757425360064@b10e5d19-611b-48df-ad76-3dfa47ee95b6 +20


### 2025-09-09 20:42:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:40 WIB — INFO

- Kedai created: b6fce9bf-62a2-4ff7-88ff-5e28db5b8d3b


### 2025-09-09 20:42:40 WIB — INFO

- Cabang created: c47596c7-6430-4dcd-bbce-dc84e9645e62


### 2025-09-09 20:42:40 WIB — INFO

- InventarisMaster created: item-con-1757425360945


### 2025-09-09 20:42:41 WIB — INFO

- Stock IN processed: item-con-1757425360945@c47596c7-6430-4dcd-bbce-dc84e9645e62 +10


### 2025-09-09 20:42:41 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:42:41 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:42:41 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:42:41 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:42:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:41 WIB — INFO

- Kedai created: ca63eb19-c2ee-4f6c-9c36-cbc1a9d730bf


### 2025-09-09 20:42:41 WIB — INFO

- Cabang created: 9b3df6e7-eb2c-4c4e-acd2-e32d33163877


### 2025-09-09 20:42:41 WIB — INFO

- Pengguna created: 97ef4881-c428-4ce7-8df0-c07eb0119bd6


### 2025-09-09 20:42:41 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:42:41 WIB — INFO

- Pengguna deleted: 97ef4881-c428-4ce7-8df0-c07eb0119bd6


### 2025-09-09 20:42:41 WIB — INFO

- Cabang deleted: 9b3df6e7-eb2c-4c4e-acd2-e32d33163877


### 2025-09-09 20:42:41 WIB — INFO

- Kedai deleted: ca63eb19-c2ee-4f6c-9c36-cbc1a9d730bf


### 2025-09-09 20:42:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:42 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:42:42 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:42:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:43 WIB — INFO

- Kedai created: 9e5fc1c8-4293-47be-9963-749d6f2db25f


### 2025-09-09 20:42:43 WIB — INFO

- Cabang created: ec8fb923-159e-4325-a17f-2197268bf31f


### 2025-09-09 20:42:43 WIB — INFO

- Pengguna created: e514c3ed-d070-4869-b97f-9a77e5c02714


### 2025-09-09 20:42:43 WIB — INFO

- Pengguna updated: e514c3ed-d070-4869-b97f-9a77e5c02714


### 2025-09-09 20:42:43 WIB — INFO

- Pengguna deleted: e514c3ed-d070-4869-b97f-9a77e5c02714


### 2025-09-09 20:42:43 WIB — INFO

- Cabang deleted: ec8fb923-159e-4325-a17f-2197268bf31f


### 2025-09-09 20:42:43 WIB — INFO

- Kedai deleted: 9e5fc1c8-4293-47be-9963-749d6f2db25f


### 2025-09-09 20:42:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:43 WIB — INFO

- Kedai created: e99d2e2c-d213-45be-bfdf-e92aa1c25c50


### 2025-09-09 20:42:43 WIB — INFO

- Cabang created: a6ff4a9f-0532-4475-ac0b-2174c9067791


### 2025-09-09 20:42:43 WIB — INFO

- InventarisMaster created: item-1757425363864


### 2025-09-09 20:42:43 WIB — INFO

- Stock IN processed: item-1757425363864@a6ff4a9f-0532-4475-ac0b-2174c9067791 +10


### 2025-09-09 20:42:43 WIB — INFO

- Cabang deleted: a6ff4a9f-0532-4475-ac0b-2174c9067791


### 2025-09-09 20:42:43 WIB — INFO

- Kedai deleted: e99d2e2c-d213-45be-bfdf-e92aa1c25c50


### 2025-09-09 20:42:44 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:44 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:42:44 WIB — INFO

- Kedai created: 3f0f01c7-121e-4a93-bb4f-c36283e83893


### 2025-09-09 20:42:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:42:45 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:44:10 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:11 WIB — INFO

- Kedai created: e6533e36-8804-4d2e-a434-2189a54e1fe8


### 2025-09-09 20:44:11 WIB — INFO

- Cabang created: cae8ac18-581c-4e7d-a3ec-f2791d72696b


### 2025-09-09 20:44:11 WIB — INFO

- InventarisMaster created: item-hpp-1757425451073


### 2025-09-09 20:44:11 WIB — INFO

- Stock IN processed: item-hpp-1757425451073@cae8ac18-581c-4e7d-a3ec-f2791d72696b +10


### 2025-09-09 20:44:11 WIB — INFO

- Stock IN processed: item-hpp-1757425451073@cae8ac18-581c-4e7d-a3ec-f2791d72696b +5


### 2025-09-09 20:44:11 WIB — INFO

- Cabang deleted: cae8ac18-581c-4e7d-a3ec-f2791d72696b


### 2025-09-09 20:44:11 WIB — INFO

- Kedai deleted: e6533e36-8804-4d2e-a434-2189a54e1fe8


### 2025-09-09 20:44:11 WIB — INFO

- Kedai created: 9f863f35-b231-4142-bec2-109526aab29e


### 2025-09-09 20:44:11 WIB — INFO

- Cabang created: 399faf81-c8aa-4229-bcbd-4ccebe40dd75


### 2025-09-09 20:44:11 WIB — INFO

- InventarisMaster created: item-so-1757425451073


### 2025-09-09 20:44:11 WIB — INFO

- Stock IN processed: item-so-1757425451073@399faf81-c8aa-4229-bcbd-4ccebe40dd75 +20


### 2025-09-09 20:44:11 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:12 WIB — INFO

- Kedai created: 8c6fb588-9c80-4a07-918a-8b305378bc0f


### 2025-09-09 20:44:12 WIB — INFO

- Cabang created: bc5ce6cd-d6e1-4a54-b314-ac9d3d36d854


### 2025-09-09 20:44:12 WIB — INFO

- InventarisMaster created: item-con-1757425451990


### 2025-09-09 20:44:12 WIB — INFO

- Stock IN processed: item-con-1757425451990@bc5ce6cd-d6e1-4a54-b314-ac9d3d36d854 +10


### 2025-09-09 20:44:12 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:44:12 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:44:12 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:44:12 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:44:12 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:12 WIB — INFO

- Kedai created: d31346ed-0823-4be7-8b4e-4bb49ab93f8d


### 2025-09-09 20:44:12 WIB — INFO

- Cabang created: f5363bd1-426b-40dc-ba83-4b1215efec03


### 2025-09-09 20:44:12 WIB — INFO

- Pengguna created: 8bec2cb4-399a-44b9-98fb-400bf6a55cf8


### 2025-09-09 20:44:12 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:44:13 WIB — INFO

- Pengguna deleted: 8bec2cb4-399a-44b9-98fb-400bf6a55cf8


### 2025-09-09 20:44:13 WIB — INFO

- Cabang deleted: f5363bd1-426b-40dc-ba83-4b1215efec03


### 2025-09-09 20:44:13 WIB — INFO

- Kedai deleted: d31346ed-0823-4be7-8b4e-4bb49ab93f8d


### 2025-09-09 20:44:13 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:13 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:44:13 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:44:14 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:14 WIB — INFO

- Kedai created: 50a80c3e-b126-4810-afc5-db9b08a08da3


### 2025-09-09 20:44:14 WIB — INFO

- Cabang created: 9c666a7c-1dc9-4d2d-aec4-ea469e427ded


### 2025-09-09 20:44:14 WIB — INFO

- Pengguna created: 8137de28-f3b5-4202-9a02-8da2406a2176


### 2025-09-09 20:44:14 WIB — INFO

- Pengguna updated: 8137de28-f3b5-4202-9a02-8da2406a2176


### 2025-09-09 20:44:14 WIB — INFO

- Pengguna deleted: 8137de28-f3b5-4202-9a02-8da2406a2176


### 2025-09-09 20:44:14 WIB — INFO

- Cabang deleted: 9c666a7c-1dc9-4d2d-aec4-ea469e427ded


### 2025-09-09 20:44:14 WIB — INFO

- Kedai deleted: 50a80c3e-b126-4810-afc5-db9b08a08da3


### 2025-09-09 20:44:15 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:15 WIB — INFO

- Kedai created: 62138885-019a-4ea8-a0a6-4c6b2856c69e


### 2025-09-09 20:44:15 WIB — INFO

- Cabang created: 480588a9-3c2d-42a4-b83b-cb12d51c0b89


### 2025-09-09 20:44:15 WIB — INFO

- InventarisMaster created: item-1757425455166


### 2025-09-09 20:44:15 WIB — INFO

- Stock IN processed: item-1757425455166@480588a9-3c2d-42a4-b83b-cb12d51c0b89 +10


### 2025-09-09 20:44:15 WIB — INFO

- Cabang deleted: 480588a9-3c2d-42a4-b83b-cb12d51c0b89


### 2025-09-09 20:44:15 WIB — INFO

- Kedai deleted: 62138885-019a-4ea8-a0a6-4c6b2856c69e


### 2025-09-09 20:44:15 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:15 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:44:15 WIB — INFO

- Kedai created: c20f98a0-4b25-46d6-bd59-d9653a56d5ee


### 2025-09-09 20:44:16 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:44:16 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:45:29 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:30 WIB — INFO

- Kedai created: b1e51759-6fc6-4ae9-a5bd-f1888ee0c14f


### 2025-09-09 20:45:30 WIB — INFO

- Cabang created: f67d7bd4-edb4-4611-8903-2c78faf85da1


### 2025-09-09 20:45:30 WIB — INFO

- InventarisMaster created: item-hpp-1757425529970


### 2025-09-09 20:45:30 WIB — INFO

- Stock IN processed: item-hpp-1757425529970@f67d7bd4-edb4-4611-8903-2c78faf85da1 +10


### 2025-09-09 20:45:30 WIB — INFO

- Stock IN processed: item-hpp-1757425529970@f67d7bd4-edb4-4611-8903-2c78faf85da1 +5


### 2025-09-09 20:45:30 WIB — INFO

- Cabang deleted: f67d7bd4-edb4-4611-8903-2c78faf85da1


### 2025-09-09 20:45:30 WIB — INFO

- Kedai deleted: b1e51759-6fc6-4ae9-a5bd-f1888ee0c14f


### 2025-09-09 20:45:30 WIB — INFO

- Kedai created: 670dd091-c739-4f85-83a4-a396741e3063


### 2025-09-09 20:45:30 WIB — INFO

- Cabang created: 600e66f7-3a12-4cb2-aa3b-0a222f03ea74


### 2025-09-09 20:45:30 WIB — INFO

- InventarisMaster created: item-so-1757425529970


### 2025-09-09 20:45:30 WIB — INFO

- Stock IN processed: item-so-1757425529970@600e66f7-3a12-4cb2-aa3b-0a222f03ea74 +20


### 2025-09-09 20:45:30 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:30 WIB — INFO

- Kedai created: 0dcfa1f6-9286-498c-bf3e-65be8ccfc1ce


### 2025-09-09 20:45:30 WIB — INFO

- Cabang created: eb6b0a9a-1d2c-4e24-9107-3e143b80416c


### 2025-09-09 20:45:30 WIB — INFO

- InventarisMaster created: item-con-1757425530881


### 2025-09-09 20:45:30 WIB — INFO

- Stock IN processed: item-con-1757425530881@eb6b0a9a-1d2c-4e24-9107-3e143b80416c +10


### 2025-09-09 20:45:31 WIB — INFO

- Stock IN processed: item-con-1757425530881@eb6b0a9a-1d2c-4e24-9107-3e143b80416c +10


### 2025-09-09 20:45:31 WIB — INFO

- Stock IN processed: item-con-1757425530881@eb6b0a9a-1d2c-4e24-9107-3e143b80416c +10


### 2025-09-09 20:45:31 WIB — INFO

- Stock IN processed: item-con-1757425530881@eb6b0a9a-1d2c-4e24-9107-3e143b80416c +10


### 2025-09-09 20:45:31 WIB — INFO

- Stock IN processed: item-con-1757425530881@eb6b0a9a-1d2c-4e24-9107-3e143b80416c +10


### 2025-09-09 20:45:31 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:31 WIB — INFO

- Kedai created: 51ad809c-54ba-4714-9409-9ae89e7cd7fa


### 2025-09-09 20:45:31 WIB — INFO

- Cabang created: cc660c31-2ff4-4c28-8977-a0184c10f1bf


### 2025-09-09 20:45:31 WIB — INFO

- Pengguna created: 14fde9df-41ed-41c6-bd82-a07d78a393e0


### 2025-09-09 20:45:31 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:45:31 WIB — INFO

- Pengguna deleted: 14fde9df-41ed-41c6-bd82-a07d78a393e0


### 2025-09-09 20:45:31 WIB — INFO

- Cabang deleted: cc660c31-2ff4-4c28-8977-a0184c10f1bf


### 2025-09-09 20:45:31 WIB — INFO

- Kedai deleted: 51ad809c-54ba-4714-9409-9ae89e7cd7fa


### 2025-09-09 20:45:32 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:32 WIB — INFO

- Kedai created: 4dcbd95e-40ed-4cee-a732-9f7cca5dea99


### 2025-09-09 20:45:32 WIB — INFO

- Cabang created: e1b81d22-d3e8-4c41-876b-e615980f2b5f


### 2025-09-09 20:45:32 WIB — INFO

- Pengguna created: d7c8c99d-01d5-4ab4-bf92-bbb6e7285612


### 2025-09-09 20:45:32 WIB — INFO

- Pengguna updated: d7c8c99d-01d5-4ab4-bf92-bbb6e7285612


### 2025-09-09 20:45:32 WIB — INFO

- Pengguna deleted: d7c8c99d-01d5-4ab4-bf92-bbb6e7285612


### 2025-09-09 20:45:32 WIB — INFO

- Cabang deleted: e1b81d22-d3e8-4c41-876b-e615980f2b5f


### 2025-09-09 20:45:32 WIB — INFO

- Kedai deleted: 4dcbd95e-40ed-4cee-a732-9f7cca5dea99


### 2025-09-09 20:45:33 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:33 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:45:33 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:45:34 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:00:00 WIB  INFO

- Checkpoint: inspected `be/` folder, reviewed docs, and updated `docs/to_do.md` statuses (marked inventory models, stock tests, and controller hardening as DONE where applicable)

 - meta: {"action":"checkpoint","updated_files":["docs/to_do.md"]}

### 2025-09-09 21:02:00 WIB  INFO

- Calculated completion ratio and updated `docs/to_do.md` with "Rasio Penyelesaian" section (approx. 55.6%).

 - meta: {"action":"update_rasio","ratio_percent":55.6,"details":{"total":9,"done":4,"partial":2,"pending":3}}

### 2025-09-09 21:05:00 WIB  INFO

- Formatted `docs/to_do.md` for readability: restructured sections, added table for completion ratio, and clarified next steps.

 - meta: {"action":"format_todo","file":"docs/to_do.md","by":"assistant","time":"2025-09-09 21:05:00 WIB"}


### 2025-09-09 20:45:34 WIB — INFO

- Kedai created: 71e42e05-3992-4cd8-86ed-edbed9b7d42f


### 2025-09-09 20:45:34 WIB — INFO

- Cabang created: f6159937-5f64-4007-a973-2b06fb87546b


### 2025-09-09 20:45:34 WIB — INFO

- InventarisMaster created: item-1757425534108


### 2025-09-09 20:45:34 WIB — INFO

- Stock IN processed: item-1757425534108@f6159937-5f64-4007-a973-2b06fb87546b +10


### 2025-09-09 20:45:34 WIB — INFO

- Cabang deleted: f6159937-5f64-4007-a973-2b06fb87546b


### 2025-09-09 20:45:34 WIB — INFO

- Kedai deleted: 71e42e05-3992-4cd8-86ed-edbed9b7d42f


### 2025-09-09 20:45:34 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:34 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:45:34 WIB — INFO

- Kedai created: 4cf2f0fa-74a2-45ae-a7c8-367c68518189


### 2025-09-09 20:45:35 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:45:35 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:48:38 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:38 WIB — INFO

- Kedai created: 70188b3e-8839-4bcb-af1b-f0b4d0138a7a


### 2025-09-09 20:48:38 WIB — INFO

- Cabang created: 649daed1-1cac-4aaf-87c3-a94bb9a2f5a8


### 2025-09-09 20:48:38 WIB — INFO

- InventarisMaster created: item-hpp-1757425718406


### 2025-09-09 20:48:38 WIB — INFO

- Stock IN processed: item-hpp-1757425718406@649daed1-1cac-4aaf-87c3-a94bb9a2f5a8 +10


### 2025-09-09 20:48:38 WIB — INFO

- Stock IN processed: item-hpp-1757425718406@649daed1-1cac-4aaf-87c3-a94bb9a2f5a8 +5


### 2025-09-09 20:48:38 WIB — INFO

- Cabang deleted: 649daed1-1cac-4aaf-87c3-a94bb9a2f5a8


### 2025-09-09 20:48:38 WIB — INFO

- Kedai deleted: 70188b3e-8839-4bcb-af1b-f0b4d0138a7a


### 2025-09-09 20:48:38 WIB — INFO

- Kedai created: ea5dcc4d-4851-4a4d-8439-bc35c8f46572


### 2025-09-09 20:48:38 WIB — INFO

- Cabang created: 8fc0da64-b266-48b7-baae-8929d81c925a


### 2025-09-09 20:48:38 WIB — INFO

- InventarisMaster created: item-so-1757425718406


### 2025-09-09 20:48:38 WIB — INFO

- Stock IN processed: item-so-1757425718406@8fc0da64-b266-48b7-baae-8929d81c925a +20


### 2025-09-09 20:48:38 WIB — INFO

- Cabang deleted: 8fc0da64-b266-48b7-baae-8929d81c925a


### 2025-09-09 20:48:38 WIB — INFO

- Kedai deleted: ea5dcc4d-4851-4a4d-8439-bc35c8f46572


### 2025-09-09 20:48:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:39 WIB — INFO

- Kedai created: d6adbbb8-1332-435d-b876-c33a0fe4be61


### 2025-09-09 20:48:39 WIB — INFO

- Cabang created: b72432c4-38ca-49d0-8574-49bd1952fc95


### 2025-09-09 20:48:39 WIB — INFO

- InventarisMaster created: item-con-1757425719328


### 2025-09-09 20:48:39 WIB — INFO

- Stock IN processed: item-con-1757425719328@b72432c4-38ca-49d0-8574-49bd1952fc95 +10


### 2025-09-09 20:48:39 WIB — INFO

- Stock IN processed: item-con-1757425719328@b72432c4-38ca-49d0-8574-49bd1952fc95 +10


### 2025-09-09 20:48:39 WIB — INFO

- Stock IN processed: item-con-1757425719328@b72432c4-38ca-49d0-8574-49bd1952fc95 +10


### 2025-09-09 20:48:39 WIB — INFO

- Stock IN processed: item-con-1757425719328@b72432c4-38ca-49d0-8574-49bd1952fc95 +10


### 2025-09-09 20:48:39 WIB — INFO

- Stock IN processed: item-con-1757425719328@b72432c4-38ca-49d0-8574-49bd1952fc95 +10


### 2025-09-09 20:48:39 WIB — INFO

- Cabang deleted: b72432c4-38ca-49d0-8574-49bd1952fc95


### 2025-09-09 20:48:39 WIB — INFO

- Kedai deleted: d6adbbb8-1332-435d-b876-c33a0fe4be61


### 2025-09-09 20:48:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:40 WIB — INFO

- Kedai created: 8d05c0d9-01d3-4cf8-8a0a-50ba16627ee5


### 2025-09-09 20:48:40 WIB — INFO

- Cabang created: 95e3a6a2-fb3e-4eb8-aa55-ada0862dfe8b


### 2025-09-09 20:48:40 WIB — INFO

- Pengguna created: b7ad09ca-3782-47c2-97ec-f3ae6f627519


### 2025-09-09 20:48:40 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:48:40 WIB — INFO

- Pengguna deleted: b7ad09ca-3782-47c2-97ec-f3ae6f627519


### 2025-09-09 20:48:40 WIB — INFO

- Cabang deleted: 95e3a6a2-fb3e-4eb8-aa55-ada0862dfe8b


### 2025-09-09 20:48:40 WIB — INFO

- Kedai deleted: 8d05c0d9-01d3-4cf8-8a0a-50ba16627ee5


### 2025-09-09 20:48:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:41 WIB — INFO

- Kedai created: 6feefc58-1feb-439e-8505-4a20fe5ea283


### 2025-09-09 20:48:41 WIB — INFO

- Cabang created: 06d227b8-017f-4b35-95a4-eb0820372e98


### 2025-09-09 20:48:41 WIB — INFO

- Pengguna created: 3a0df93f-571e-4bb3-8893-df1741eb6254


### 2025-09-09 20:48:41 WIB — INFO

- Pengguna updated: 3a0df93f-571e-4bb3-8893-df1741eb6254


### 2025-09-09 20:48:41 WIB — INFO

- Pengguna deleted: 3a0df93f-571e-4bb3-8893-df1741eb6254


### 2025-09-09 20:48:41 WIB — INFO

- Cabang deleted: 06d227b8-017f-4b35-95a4-eb0820372e98


### 2025-09-09 20:48:41 WIB — INFO

- Kedai deleted: 6feefc58-1feb-439e-8505-4a20fe5ea283


### 2025-09-09 20:48:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:41 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:48:42 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:48:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:42 WIB — INFO

- Kedai created: 3f937549-4af0-48d2-8932-e79e716958eb


### 2025-09-09 20:48:42 WIB — INFO

- Cabang created: 12dcb5c9-28a6-4ee4-9fe0-7b4792564017


### 2025-09-09 20:48:42 WIB — INFO

- InventarisMaster created: item-1757425722612


### 2025-09-09 20:48:42 WIB — INFO

- Stock IN processed: item-1757425722612@12dcb5c9-28a6-4ee4-9fe0-7b4792564017 +10


### 2025-09-09 20:48:42 WIB — INFO

- Cabang deleted: 12dcb5c9-28a6-4ee4-9fe0-7b4792564017


### 2025-09-09 20:48:42 WIB — INFO

- Kedai deleted: 3f937549-4af0-48d2-8932-e79e716958eb


### 2025-09-09 20:48:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:43 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:48:43 WIB — INFO

- Kedai created: 6bcfcbe5-120b-4696-a11e-a752ec7e7cf7


### 2025-09-09 20:48:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:48:43 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:53:02 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:03 WIB — INFO

- Kedai created: a587e286-61a2-4dad-9ee1-f5ce4aedc392


### 2025-09-09 20:53:03 WIB — INFO

- Cabang created: 00285f35-2ae6-435d-ac2a-736b08de4ad3


### 2025-09-09 20:53:03 WIB — INFO

- InventarisMaster created: item-neg-1757425983178


### 2025-09-09 20:53:03 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:21:91) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:53:03 WIB — INFO

- Cabang deleted: 00285f35-2ae6-435d-ac2a-736b08de4ad3


### 2025-09-09 20:53:03 WIB — INFO

- Kedai deleted: a587e286-61a2-4dad-9ee1-f5ce4aedc392


### 2025-09-09 20:53:03 WIB — INFO

- Kedai created: fce429f7-720d-4ba4-b021-5f519d107a5a


### 2025-09-09 20:53:03 WIB — INFO

- InventarisMaster created: item-neg2-1757425983178


### 2025-09-09 20:53:03 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Cannot add or update a child row: a foreign key constraint fails (`eezee_kedai`.`stoksaatini`, CONSTRAINT `stoksaatini_ibfk_2` FOREIGN KEY (`cabang_id`) REFERENCES `cabang` (`cabang_id`) ON DELETE CASCADE ON UPDATE CASCADE)
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:53:04 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:04 WIB — INFO

- Kedai created: 36cd1ffe-986f-4098-82d0-4a3cae195745


### 2025-09-09 20:53:04 WIB — INFO

- Cabang created: 151459aa-b344-40db-97a9-86e4af34548b


### 2025-09-09 20:53:04 WIB — INFO

- InventarisMaster created: item-hpp-1757425984208


### 2025-09-09 20:53:04 WIB — INFO

- Stock IN processed: item-hpp-1757425984208@151459aa-b344-40db-97a9-86e4af34548b +10


### 2025-09-09 20:53:04 WIB — INFO

- Stock IN processed: item-hpp-1757425984208@151459aa-b344-40db-97a9-86e4af34548b +5


### 2025-09-09 20:53:04 WIB — INFO

- Cabang deleted: 151459aa-b344-40db-97a9-86e4af34548b


### 2025-09-09 20:53:04 WIB — INFO

- Kedai deleted: 36cd1ffe-986f-4098-82d0-4a3cae195745


### 2025-09-09 20:53:04 WIB — INFO

- Kedai created: 6c53f87f-f1ac-4c1f-b4c1-c180a0d9f4a0


### 2025-09-09 20:53:04 WIB — INFO

- Cabang created: 192edecb-bf00-4d64-9e50-20d3fe93fc66


### 2025-09-09 20:53:04 WIB — INFO

- InventarisMaster created: item-so-1757425984208


### 2025-09-09 20:53:04 WIB — INFO

- Stock IN processed: item-so-1757425984208@192edecb-bf00-4d64-9e50-20d3fe93fc66 +20


### 2025-09-09 20:53:04 WIB — INFO

- Cabang deleted: 192edecb-bf00-4d64-9e50-20d3fe93fc66


### 2025-09-09 20:53:04 WIB — INFO

- Kedai deleted: 6c53f87f-f1ac-4c1f-b4c1-c180a0d9f4a0


### 2025-09-09 20:53:04 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:05 WIB — INFO

- Kedai created: 4111e77f-1dc9-4782-a0f0-5f5853b58657


### 2025-09-09 20:53:05 WIB — INFO

- Cabang created: f6c371b0-e347-43e6-abbb-16f5fb0ae5b4


### 2025-09-09 20:53:05 WIB — INFO

- Pengguna created: e2f2c71b-8130-4fd4-ac28-0148df0d72ba


### 2025-09-09 20:53:05 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:53:05 WIB — INFO

- Pengguna deleted: e2f2c71b-8130-4fd4-ac28-0148df0d72ba


### 2025-09-09 20:53:05 WIB — INFO

- Cabang deleted: f6c371b0-e347-43e6-abbb-16f5fb0ae5b4


### 2025-09-09 20:53:05 WIB — INFO

- Kedai deleted: 4111e77f-1dc9-4782-a0f0-5f5853b58657


### 2025-09-09 20:53:05 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:05 WIB — INFO

- Kedai created: 4f91a834-7acd-4736-8dad-741977cc83c4


### 2025-09-09 20:53:05 WIB — INFO

- Cabang created: e485dbee-a0ac-4c9c-85ca-e42322258d95


### 2025-09-09 20:53:05 WIB — INFO

- InventarisMaster created: item-con-1757425985830


### 2025-09-09 20:53:05 WIB — INFO

- Stock IN processed: item-con-1757425985830@e485dbee-a0ac-4c9c-85ca-e42322258d95 +10


### 2025-09-09 20:53:06 WIB — INFO

- Stock IN processed: item-con-1757425985830@e485dbee-a0ac-4c9c-85ca-e42322258d95 +10


### 2025-09-09 20:53:06 WIB — INFO

- Stock IN processed: item-con-1757425985830@e485dbee-a0ac-4c9c-85ca-e42322258d95 +10


### 2025-09-09 20:53:06 WIB — INFO

- Stock IN processed: item-con-1757425985830@e485dbee-a0ac-4c9c-85ca-e42322258d95 +10


### 2025-09-09 20:53:06 WIB — INFO

- Stock IN processed: item-con-1757425985830@e485dbee-a0ac-4c9c-85ca-e42322258d95 +10


### 2025-09-09 20:53:06 WIB — INFO

- Cabang deleted: e485dbee-a0ac-4c9c-85ca-e42322258d95


### 2025-09-09 20:53:06 WIB — INFO

- Kedai deleted: 4f91a834-7acd-4736-8dad-741977cc83c4


### 2025-09-09 20:53:06 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:06 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:53:06 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:53:07 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:07 WIB — INFO

- Kedai created: 0ef6f597-04c4-4b6c-9133-efab653d68de


### 2025-09-09 20:53:07 WIB — INFO

- Cabang created: c3656027-b3f0-4801-8722-3ab248817b4b


### 2025-09-09 20:53:07 WIB — INFO

- Pengguna created: d10e3a5c-2f04-463c-9712-3d26fdb42f87


### 2025-09-09 20:53:07 WIB — INFO

- Pengguna updated: d10e3a5c-2f04-463c-9712-3d26fdb42f87


### 2025-09-09 20:53:07 WIB — INFO

- Pengguna deleted: d10e3a5c-2f04-463c-9712-3d26fdb42f87


### 2025-09-09 20:53:07 WIB — INFO

- Cabang deleted: c3656027-b3f0-4801-8722-3ab248817b4b


### 2025-09-09 20:53:07 WIB — INFO

- Kedai deleted: 0ef6f597-04c4-4b6c-9133-efab653d68de


### 2025-09-09 20:53:08 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:08 WIB — INFO

- Kedai created: 73626341-fbe2-43db-b0cc-d1667956f01f


### 2025-09-09 20:53:08 WIB — INFO

- Cabang created: 4bde9ede-e95d-424b-af9b-a3dfbcfa9a1a


### 2025-09-09 20:53:08 WIB — INFO

- InventarisMaster created: item-1757425988201


### 2025-09-09 20:53:08 WIB — INFO

- Stock IN processed: item-1757425988201@4bde9ede-e95d-424b-af9b-a3dfbcfa9a1a +10


### 2025-09-09 20:53:08 WIB — INFO

- Cabang deleted: 4bde9ede-e95d-424b-af9b-a3dfbcfa9a1a


### 2025-09-09 20:53:08 WIB — INFO

- Kedai deleted: 73626341-fbe2-43db-b0cc-d1667956f01f


### 2025-09-09 20:53:08 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:08 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:53:08 WIB — INFO

- Kedai created: ca21dba4-c4d1-49d5-bc9b-4bc86e2e676d


### 2025-09-09 20:53:09 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:09 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 20:53:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:42 WIB — INFO

- Kedai created: 0d4616f2-4367-41b2-860f-06e85f8637b0


### 2025-09-09 20:53:42 WIB — INFO

- Cabang created: b8585a7e-514b-4193-af4f-f5596aefa4fb


### 2025-09-09 20:53:42 WIB — INFO

- InventarisMaster created: item-neg-1757426022589


### 2025-09-09 20:53:42 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:21:91) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:53:42 WIB — INFO

- Cabang deleted: b8585a7e-514b-4193-af4f-f5596aefa4fb


### 2025-09-09 20:53:42 WIB — INFO

- Kedai deleted: 0d4616f2-4367-41b2-860f-06e85f8637b0


### 2025-09-09 20:53:42 WIB — INFO

- Kedai created: f2939dfd-b99a-4d19-baac-78e60c1225fa


### 2025-09-09 20:53:42 WIB — INFO

- InventarisMaster created: item-neg2-1757426022589


### 2025-09-09 20:53:42 WIB — ERROR

- WHAT: Stock IN failed
- WHY: Cannot add or update a child row: a foreign key constraint fails (`eezee_kedai`.`stoksaatini`, CONSTRAINT `stoksaatini_ibfk_2` FOREIGN KEY (`cabang_id`) REFERENCES `cabang` (`cabang_id`) ON DELETE CASCADE ON UPDATE CASCADE)
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 20:53:42 WIB — INFO

- Kedai deleted: f2939dfd-b99a-4d19-baac-78e60c1225fa


### 2025-09-09 20:53:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:43 WIB — INFO

- Kedai created: d2d86fda-4e3e-45cd-a35b-803ebb38b2e8


### 2025-09-09 20:53:43 WIB — INFO

- Cabang created: d8a82c04-66e1-477c-9afc-1d3ddfa2c4b0


### 2025-09-09 20:53:43 WIB — INFO

- InventarisMaster created: item-hpp-1757426023512


### 2025-09-09 20:53:43 WIB — INFO

- Stock IN processed: item-hpp-1757426023512@d8a82c04-66e1-477c-9afc-1d3ddfa2c4b0 +10


### 2025-09-09 20:53:43 WIB — INFO

- Stock IN processed: item-hpp-1757426023512@d8a82c04-66e1-477c-9afc-1d3ddfa2c4b0 +5


### 2025-09-09 20:53:43 WIB — INFO

- Cabang deleted: d8a82c04-66e1-477c-9afc-1d3ddfa2c4b0


### 2025-09-09 20:53:43 WIB — INFO

- Kedai deleted: d2d86fda-4e3e-45cd-a35b-803ebb38b2e8


### 2025-09-09 20:53:43 WIB — INFO

- Kedai created: 1826fe6c-662e-451b-b54e-daf5909a4ad3


### 2025-09-09 20:53:43 WIB — INFO

- Cabang created: 5397de48-5390-4b06-a1b0-e21a2e0da828


### 2025-09-09 20:53:43 WIB — INFO

- InventarisMaster created: item-so-1757426023512


### 2025-09-09 20:53:43 WIB — INFO

- Stock IN processed: item-so-1757426023512@5397de48-5390-4b06-a1b0-e21a2e0da828 +20


### 2025-09-09 20:53:43 WIB — INFO

- Cabang deleted: 5397de48-5390-4b06-a1b0-e21a2e0da828


### 2025-09-09 20:53:43 WIB — INFO

- Kedai deleted: 1826fe6c-662e-451b-b54e-daf5909a4ad3


### 2025-09-09 20:53:44 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:44 WIB — INFO

- Kedai created: 8b4b33ae-99cf-410a-9b99-5252b1fa5e1b


### 2025-09-09 20:53:44 WIB — INFO

- Cabang created: 58e2cbb9-38cf-486f-b44a-9b34b5d56a8b


### 2025-09-09 20:53:44 WIB — INFO

- Pengguna created: a0e7c36d-6b5c-43f1-98aa-2424f50b9e7e


### 2025-09-09 20:53:44 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 20:53:44 WIB — INFO

- Pengguna deleted: a0e7c36d-6b5c-43f1-98aa-2424f50b9e7e


### 2025-09-09 20:53:44 WIB — INFO

- Cabang deleted: 58e2cbb9-38cf-486f-b44a-9b34b5d56a8b


### 2025-09-09 20:53:44 WIB — INFO

- Kedai deleted: 8b4b33ae-99cf-410a-9b99-5252b1fa5e1b


### 2025-09-09 20:53:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:45 WIB — INFO

- Kedai created: d05f74f5-a492-448e-b0ef-d5811caa8a49


### 2025-09-09 20:53:45 WIB — INFO

- Cabang created: fa7282c5-ee2d-4c69-9169-7d860d9ed80b


### 2025-09-09 20:53:45 WIB — INFO

- InventarisMaster created: item-con-1757426025237


### 2025-09-09 20:53:45 WIB — INFO

- Stock IN processed: item-con-1757426025237@fa7282c5-ee2d-4c69-9169-7d860d9ed80b +10


### 2025-09-09 20:53:45 WIB — INFO

- Stock IN processed: item-con-1757426025237@fa7282c5-ee2d-4c69-9169-7d860d9ed80b +10


### 2025-09-09 20:53:45 WIB — INFO

- Stock IN processed: item-con-1757426025237@fa7282c5-ee2d-4c69-9169-7d860d9ed80b +10


### 2025-09-09 20:53:45 WIB — INFO

- Stock IN processed: item-con-1757426025237@fa7282c5-ee2d-4c69-9169-7d860d9ed80b +10


### 2025-09-09 20:53:45 WIB — INFO

- Stock IN processed: item-con-1757426025237@fa7282c5-ee2d-4c69-9169-7d860d9ed80b +10


### 2025-09-09 20:53:45 WIB — INFO

- Cabang deleted: fa7282c5-ee2d-4c69-9169-7d860d9ed80b


### 2025-09-09 20:53:45 WIB — INFO

- Kedai deleted: d05f74f5-a492-448e-b0ef-d5811caa8a49


### 2025-09-09 20:53:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:46 WIB — INFO

- Kedai created: 94ad1900-e51a-406f-b4de-1c46ff2319d7


### 2025-09-09 20:53:46 WIB — INFO

- Cabang created: 878308b3-9455-4467-a539-7079cb0fc024


### 2025-09-09 20:53:46 WIB — INFO

- InventarisMaster created: item-1757426026032


### 2025-09-09 20:53:46 WIB — INFO

- Stock IN processed: item-1757426026032@878308b3-9455-4467-a539-7079cb0fc024 +10


### 2025-09-09 20:53:46 WIB — INFO

- Cabang deleted: 878308b3-9455-4467-a539-7079cb0fc024


### 2025-09-09 20:53:46 WIB — INFO

- Kedai deleted: 94ad1900-e51a-406f-b4de-1c46ff2319d7


### 2025-09-09 20:53:46 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:46 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 20:53:47 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 20:53:47 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:47 WIB — INFO

- Kedai created: f30803e6-ed1c-4c5f-9851-61bff335a897


### 2025-09-09 20:53:47 WIB — INFO

- Cabang created: 84f8e94f-9015-41df-b985-2832888d4e17


### 2025-09-09 20:53:47 WIB — INFO

- Pengguna created: 2b858fdd-01cc-4db4-981b-f6710e0907cc


### 2025-09-09 20:53:47 WIB — INFO

- Pengguna updated: 2b858fdd-01cc-4db4-981b-f6710e0907cc


### 2025-09-09 20:53:47 WIB — INFO

- Pengguna deleted: 2b858fdd-01cc-4db4-981b-f6710e0907cc


### 2025-09-09 20:53:47 WIB — INFO

- Cabang deleted: 84f8e94f-9015-41df-b985-2832888d4e17


### 2025-09-09 20:53:47 WIB — INFO

- Kedai deleted: f30803e6-ed1c-4c5f-9851-61bff335a897


### 2025-09-09 20:53:48 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:48 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 20:53:48 WIB — INFO

- Kedai created: 0a000938-3e90-4a05-b71c-bd149be296a8


### 2025-09-09 20:53:48 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 20:53:48 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 21:05:36 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:36 WIB — INFO

- Kedai created: d906517b-a7ce-4a53-a273-fe7edeacada0


### 2025-09-09 21:05:36 WIB — INFO

- Cabang created: bb4c0c74-5852-45fe-89c0-cc26c4da7768


### 2025-09-09 21:05:36 WIB — INFO

- InventarisMaster created: item-neg-1757426736713


### 2025-09-09 21:05:36 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 21:05:36 WIB — INFO

- Cabang deleted: bb4c0c74-5852-45fe-89c0-cc26c4da7768


### 2025-09-09 21:05:36 WIB — INFO

- Kedai deleted: d906517b-a7ce-4a53-a273-fe7edeacada0


### 2025-09-09 21:05:36 WIB — INFO

- Kedai created: 173b87ea-c041-4721-89da-9fe868016436


### 2025-09-09 21:05:36 WIB — INFO

- InventarisMaster created: item-neg2-1757426736713


### 2025-09-09 21:05:37 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:37 WIB — INFO

- Kedai created: 2e5dedef-6cb2-4f26-88a7-ba5c91b3ca84


### 2025-09-09 21:05:37 WIB — INFO

- Cabang created: e0e69767-b0a8-462e-89a2-0ef404923b70


### 2025-09-09 21:05:37 WIB — INFO

- Pengguna created: c4d57fff-b6a8-4419-9eaa-c65f96f479bb


### 2025-09-09 21:05:37 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 21:05:37 WIB — INFO

- Pengguna deleted: c4d57fff-b6a8-4419-9eaa-c65f96f479bb


### 2025-09-09 21:05:37 WIB — INFO

- Cabang deleted: e0e69767-b0a8-462e-89a2-0ef404923b70


### 2025-09-09 21:05:37 WIB — INFO

- Kedai deleted: 2e5dedef-6cb2-4f26-88a7-ba5c91b3ca84


### 2025-09-09 21:05:38 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:38 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 21:05:38 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 21:05:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:39 WIB — INFO

- Kedai created: 0c010055-78d2-42c9-8945-db038e9bfa54


### 2025-09-09 21:05:39 WIB — INFO

- Cabang created: 74e02c8c-bae3-46d1-b12a-a3b1ca5f28df


### 2025-09-09 21:05:39 WIB — INFO

- InventarisMaster created: item-con-1757426739170


### 2025-09-09 21:05:39 WIB — INFO

- Stock IN processed: item-con-1757426739170@74e02c8c-bae3-46d1-b12a-a3b1ca5f28df +10


### 2025-09-09 21:05:39 WIB — INFO

- Stock IN processed: item-con-1757426739170@74e02c8c-bae3-46d1-b12a-a3b1ca5f28df +10


### 2025-09-09 21:05:39 WIB — INFO

- Stock IN processed: item-con-1757426739170@74e02c8c-bae3-46d1-b12a-a3b1ca5f28df +10


### 2025-09-09 21:05:39 WIB — INFO

- Stock IN processed: item-con-1757426739170@74e02c8c-bae3-46d1-b12a-a3b1ca5f28df +10


### 2025-09-09 21:05:39 WIB — INFO

- Stock IN processed: item-con-1757426739170@74e02c8c-bae3-46d1-b12a-a3b1ca5f28df +10


### 2025-09-09 21:05:39 WIB — INFO

- Cabang deleted: 74e02c8c-bae3-46d1-b12a-a3b1ca5f28df


### 2025-09-09 21:05:39 WIB — INFO

- Kedai deleted: 0c010055-78d2-42c9-8945-db038e9bfa54


### 2025-09-09 21:05:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:40 WIB — INFO

- Kedai created: 4c21efe7-5549-4b92-9154-e0351aacf991


### 2025-09-09 21:05:40 WIB — INFO

- Cabang created: be06ec0f-ad14-4902-bc16-89014f0d59fb


### 2025-09-09 21:05:40 WIB — INFO

- InventarisMaster created: item-hpp-1757426740012


### 2025-09-09 21:05:40 WIB — INFO

- Stock IN processed: item-hpp-1757426740012@be06ec0f-ad14-4902-bc16-89014f0d59fb +10


### 2025-09-09 21:05:40 WIB — INFO

- Stock IN processed: item-hpp-1757426740012@be06ec0f-ad14-4902-bc16-89014f0d59fb +5


### 2025-09-09 21:05:40 WIB — INFO

- Cabang deleted: be06ec0f-ad14-4902-bc16-89014f0d59fb


### 2025-09-09 21:05:40 WIB — INFO

- Kedai deleted: 4c21efe7-5549-4b92-9154-e0351aacf991


### 2025-09-09 21:05:40 WIB — INFO

- Kedai created: 579d0980-b6ac-461f-8f82-4599ccd90a07


### 2025-09-09 21:05:40 WIB — INFO

- Cabang created: 1068a00a-225d-4a1b-aaa7-b1954bed109e


### 2025-09-09 21:05:40 WIB — INFO

- InventarisMaster created: item-so-1757426740012


### 2025-09-09 21:05:40 WIB — INFO

- Stock IN processed: item-so-1757426740012@1068a00a-225d-4a1b-aaa7-b1954bed109e +20


### 2025-09-09 21:05:40 WIB — INFO

- Cabang deleted: 1068a00a-225d-4a1b-aaa7-b1954bed109e


### 2025-09-09 21:05:40 WIB — INFO

- Kedai deleted: 579d0980-b6ac-461f-8f82-4599ccd90a07


### 2025-09-09 21:05:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:40 WIB — INFO

- Kedai created: 4bd559d2-222d-4a97-82bd-92b608cf09bc


### 2025-09-09 21:05:40 WIB — INFO

- Cabang created: d5b68454-8cdb-4d65-a130-74df3070d65e


### 2025-09-09 21:05:40 WIB — INFO

- Pengguna created: b2085afa-abd4-4bff-ac70-9c7766d21df7


### 2025-09-09 21:05:40 WIB — INFO

- Pengguna updated: b2085afa-abd4-4bff-ac70-9c7766d21df7


### 2025-09-09 21:05:40 WIB — INFO

- Pengguna deleted: b2085afa-abd4-4bff-ac70-9c7766d21df7


### 2025-09-09 21:05:40 WIB — INFO

- Cabang deleted: d5b68454-8cdb-4d65-a130-74df3070d65e


### 2025-09-09 21:05:40 WIB — INFO

- Kedai deleted: 4bd559d2-222d-4a97-82bd-92b608cf09bc


### 2025-09-09 21:05:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:41 WIB — INFO

- Kedai created: 097dbd35-14f1-44e8-b21a-f37231b2943e


### 2025-09-09 21:05:41 WIB — INFO

- Cabang created: ed86ceb9-1b01-49f9-baa7-cab4d690478c


### 2025-09-09 21:05:41 WIB — INFO

- InventarisMaster created: item-1757426741428


### 2025-09-09 21:05:41 WIB — INFO

- Stock IN processed: item-1757426741428@ed86ceb9-1b01-49f9-baa7-cab4d690478c +10


### 2025-09-09 21:05:41 WIB — INFO

- Cabang deleted: ed86ceb9-1b01-49f9-baa7-cab4d690478c


### 2025-09-09 21:05:41 WIB — INFO

- Kedai deleted: 097dbd35-14f1-44e8-b21a-f37231b2943e


### 2025-09-09 21:05:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:42 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 21:05:42 WIB — INFO

- Kedai created: 0ec26304-8e44-43a4-9ea6-ace771c912be


### 2025-09-09 21:05:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:05:42 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 21:06:19 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:20 WIB — INFO

- Kedai created: fa454d45-55f1-4fdf-8fa3-420f8bfcddb0


### 2025-09-09 21:06:20 WIB — INFO

- Cabang created: 47f3bcf0-7624-4acc-b119-b15c87dc1b50


### 2025-09-09 21:06:20 WIB — INFO

- InventarisMaster created: item-neg-1757426780108


### 2025-09-09 21:06:20 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 21:06:20 WIB — INFO

- Cabang deleted: 47f3bcf0-7624-4acc-b119-b15c87dc1b50


### 2025-09-09 21:06:20 WIB — INFO

- Kedai deleted: fa454d45-55f1-4fdf-8fa3-420f8bfcddb0


### 2025-09-09 21:06:20 WIB — INFO

- Kedai created: 19a865f9-5dfb-4a69-98dd-ecf230c1042f


### 2025-09-09 21:06:20 WIB — INFO

- InventarisMaster created: item-neg2-1757426780108


### 2025-09-09 21:06:20 WIB — INFO

- Kedai deleted: 19a865f9-5dfb-4a69-98dd-ecf230c1042f


### 2025-09-09 21:06:20 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:20 WIB — INFO

- Kedai created: 2b1c7fe0-aef8-4c18-9a6c-2037068b53f1


### 2025-09-09 21:06:21 WIB — INFO

- Cabang created: a7db369e-a9c5-4834-8fd6-7840faa79520


### 2025-09-09 21:06:21 WIB — INFO

- Pengguna created: 71f0b0de-3db7-4c00-a0d2-b714260f1bde


### 2025-09-09 21:06:21 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 21:06:21 WIB — INFO

- Pengguna deleted: 71f0b0de-3db7-4c00-a0d2-b714260f1bde


### 2025-09-09 21:06:21 WIB — INFO

- Cabang deleted: a7db369e-a9c5-4834-8fd6-7840faa79520


### 2025-09-09 21:06:21 WIB — INFO

- Kedai deleted: 2b1c7fe0-aef8-4c18-9a6c-2037068b53f1


### 2025-09-09 21:06:21 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:21 WIB — INFO

- Kedai created: de10d6ef-bb07-48f1-b15f-0968535ea87a


### 2025-09-09 21:06:21 WIB — INFO

- Cabang created: 46f9ddf3-6fc6-4c99-9762-533bb9c26e19


### 2025-09-09 21:06:21 WIB — INFO

- InventarisMaster created: item-con-1757426781779


### 2025-09-09 21:06:21 WIB — INFO

- Stock IN processed: item-con-1757426781779@46f9ddf3-6fc6-4c99-9762-533bb9c26e19 +10


### 2025-09-09 21:06:22 WIB — INFO

- Stock IN processed: item-con-1757426781779@46f9ddf3-6fc6-4c99-9762-533bb9c26e19 +10


### 2025-09-09 21:06:22 WIB — INFO

- Stock IN processed: item-con-1757426781779@46f9ddf3-6fc6-4c99-9762-533bb9c26e19 +10


### 2025-09-09 21:06:22 WIB — INFO

- Stock IN processed: item-con-1757426781779@46f9ddf3-6fc6-4c99-9762-533bb9c26e19 +10


### 2025-09-09 21:06:22 WIB — INFO

- Stock IN processed: item-con-1757426781779@46f9ddf3-6fc6-4c99-9762-533bb9c26e19 +10


### 2025-09-09 21:06:22 WIB — INFO

- Cabang deleted: 46f9ddf3-6fc6-4c99-9762-533bb9c26e19


### 2025-09-09 21:06:22 WIB — INFO

- Kedai deleted: de10d6ef-bb07-48f1-b15f-0968535ea87a


### 2025-09-09 21:06:22 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:22 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 21:06:22 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 21:06:23 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:23 WIB — INFO

- Kedai created: 6de16a42-1f37-456c-a85e-0c9ae77adfb8


### 2025-09-09 21:06:23 WIB — INFO

- Cabang created: d98c5b3a-6c3c-481c-addb-c5474ded3f49


### 2025-09-09 21:06:23 WIB — INFO

- InventarisMaster created: item-hpp-1757426783316


### 2025-09-09 21:06:23 WIB — INFO

- Stock IN processed: item-hpp-1757426783316@d98c5b3a-6c3c-481c-addb-c5474ded3f49 +10


### 2025-09-09 21:06:23 WIB — INFO

- Stock IN processed: item-hpp-1757426783316@d98c5b3a-6c3c-481c-addb-c5474ded3f49 +5


### 2025-09-09 21:06:23 WIB — INFO

- Cabang deleted: d98c5b3a-6c3c-481c-addb-c5474ded3f49


### 2025-09-09 21:06:23 WIB — INFO

- Kedai deleted: 6de16a42-1f37-456c-a85e-0c9ae77adfb8


### 2025-09-09 21:06:23 WIB — INFO

- Kedai created: 0b7dad09-d02d-405a-b7ed-4c2a8d44014d


### 2025-09-09 21:06:23 WIB — INFO

- Cabang created: 733be3f9-9597-4bca-8e1d-de5002508d3b


### 2025-09-09 21:06:23 WIB — INFO

- InventarisMaster created: item-so-1757426783316


### 2025-09-09 21:06:23 WIB — INFO

- Stock IN processed: item-so-1757426783316@733be3f9-9597-4bca-8e1d-de5002508d3b +20


### 2025-09-09 21:06:23 WIB — INFO

- Cabang deleted: 733be3f9-9597-4bca-8e1d-de5002508d3b


### 2025-09-09 21:06:23 WIB — INFO

- Kedai deleted: 0b7dad09-d02d-405a-b7ed-4c2a8d44014d


### 2025-09-09 21:06:24 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:24 WIB — INFO

- Kedai created: 931d515b-0929-407d-bc78-73e55e625c49


### 2025-09-09 21:06:24 WIB — INFO

- Cabang created: 40f9e27a-3993-4106-ba4d-7c5ab0fb6799


### 2025-09-09 21:06:24 WIB — INFO

- Pengguna created: 8f3681b8-e8d9-4179-96d5-85dcc34617a4


### 2025-09-09 21:06:24 WIB — INFO

- Pengguna updated: 8f3681b8-e8d9-4179-96d5-85dcc34617a4


### 2025-09-09 21:06:24 WIB — INFO

- Pengguna deleted: 8f3681b8-e8d9-4179-96d5-85dcc34617a4


### 2025-09-09 21:06:24 WIB — INFO

- Cabang deleted: 40f9e27a-3993-4106-ba4d-7c5ab0fb6799


### 2025-09-09 21:06:24 WIB — INFO

- Kedai deleted: 931d515b-0929-407d-bc78-73e55e625c49


### 2025-09-09 21:06:24 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:24 WIB — INFO

- Kedai created: c07799a0-6016-4c29-ae14-380b88df93d5


### 2025-09-09 21:06:24 WIB — INFO

- Cabang created: 3051253b-5a93-41bc-81d1-ef3f11ea1c4a


### 2025-09-09 21:06:24 WIB — INFO

- InventarisMaster created: item-1757426784822


### 2025-09-09 21:06:24 WIB — INFO

- Stock IN processed: item-1757426784822@3051253b-5a93-41bc-81d1-ef3f11ea1c4a +10


### 2025-09-09 21:06:24 WIB — INFO

- Cabang deleted: 3051253b-5a93-41bc-81d1-ef3f11ea1c4a


### 2025-09-09 21:06:24 WIB — INFO

- Kedai deleted: c07799a0-6016-4c29-ae14-380b88df93d5


### 2025-09-09 21:06:25 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:25 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 21:06:25 WIB — INFO

- Kedai created: 19686d33-22ca-465d-b73b-0a57638b85c8


### 2025-09-09 21:06:25 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:06:26 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 21:10:24 WIB — INFO

- Checkpoint: inspected be and updated docs/to_do.md

- meta: {"action":"checkpoint","updated_files":["docs/to_do.md"]}


### 2025-09-09 21:18:25 WIB — INFO

- Updated docs/currentTask.md: normalize mandatory steps and add run-from-root note

- meta: {"action":"update_currentTask","files":["docs/currentTask.md"]}


### 2025-09-09 21:21:26 WIB — INFO

- Automated checkpoint: read docs and ran backend tests

- meta: {"action":"auto_checkpoint","files":["currentTask.md","log_aktifitas.md","perencanaan.md","struktur_proyek.md","to_do.md","urutan_pekerjaan_teknis.md"],"tests":"failed","summary":"\n"}


### 2025-09-09 21:22:48 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:48 WIB — INFO

- Kedai created: efe80739-77a2-432e-91c7-9c7e9cb904ff


### 2025-09-09 21:22:48 WIB — INFO

- Cabang created: 6f943899-93fa-4883-893c-8ac197661b72


### 2025-09-09 21:22:48 WIB — INFO

- InventarisMaster created: item-neg-1757427768382


### 2025-09-09 21:22:48 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 21:22:48 WIB — INFO

- Cabang deleted: 6f943899-93fa-4883-893c-8ac197661b72


### 2025-09-09 21:22:48 WIB — INFO

- Kedai deleted: efe80739-77a2-432e-91c7-9c7e9cb904ff


### 2025-09-09 21:22:48 WIB — INFO

- Kedai created: 924afd96-5423-4ddc-a0af-93fc9bc8fade


### 2025-09-09 21:22:48 WIB — INFO

- InventarisMaster created: item-neg2-1757427768382


### 2025-09-09 21:22:48 WIB — INFO

- Kedai deleted: 924afd96-5423-4ddc-a0af-93fc9bc8fade


### 2025-09-09 21:22:49 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:49 WIB — INFO

- Kedai created: 6516b6ad-aba0-4ff6-92fa-d778ffcc781c


### 2025-09-09 21:22:49 WIB — INFO

- Cabang created: 95214c6a-3b6b-479d-b956-624651d2835d


### 2025-09-09 21:22:49 WIB — INFO

- Pengguna created: 085fecdc-0244-4df7-a740-b309ee95dd81


### 2025-09-09 21:22:49 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 21:22:49 WIB — INFO

- Pengguna deleted: 085fecdc-0244-4df7-a740-b309ee95dd81


### 2025-09-09 21:22:49 WIB — INFO

- Cabang deleted: 95214c6a-3b6b-479d-b956-624651d2835d


### 2025-09-09 21:22:49 WIB — INFO

- Kedai deleted: 6516b6ad-aba0-4ff6-92fa-d778ffcc781c


### 2025-09-09 21:22:50 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:50 WIB — INFO

- Kedai created: b7c8b41b-f665-41f4-8bb0-207ab4254a36


### 2025-09-09 21:22:50 WIB — INFO

- Cabang created: 785c11c5-2d57-4e56-8881-cb2ea2b9d18d


### 2025-09-09 21:22:50 WIB — INFO

- InventarisMaster created: item-con-1757427770047


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-con-1757427770047@785c11c5-2d57-4e56-8881-cb2ea2b9d18d +10


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-con-1757427770047@785c11c5-2d57-4e56-8881-cb2ea2b9d18d +10


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-con-1757427770047@785c11c5-2d57-4e56-8881-cb2ea2b9d18d +10


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-con-1757427770047@785c11c5-2d57-4e56-8881-cb2ea2b9d18d +10


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-con-1757427770047@785c11c5-2d57-4e56-8881-cb2ea2b9d18d +10


### 2025-09-09 21:22:50 WIB — INFO

- Cabang deleted: 785c11c5-2d57-4e56-8881-cb2ea2b9d18d


### 2025-09-09 21:22:50 WIB — INFO

- Kedai deleted: b7c8b41b-f665-41f4-8bb0-207ab4254a36


### 2025-09-09 21:22:50 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:50 WIB — INFO

- Kedai created: d7a72624-755f-42b2-a6e0-0b05f7e55256


### 2025-09-09 21:22:50 WIB — INFO

- Cabang created: b81cf3ba-1fed-49d0-8aa2-9d98569e15d9


### 2025-09-09 21:22:50 WIB — INFO

- InventarisMaster created: item-hpp-1757427770842


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-hpp-1757427770842@b81cf3ba-1fed-49d0-8aa2-9d98569e15d9 +10


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-hpp-1757427770842@b81cf3ba-1fed-49d0-8aa2-9d98569e15d9 +5


### 2025-09-09 21:22:50 WIB — INFO

- Cabang deleted: b81cf3ba-1fed-49d0-8aa2-9d98569e15d9


### 2025-09-09 21:22:50 WIB — INFO

- Kedai deleted: d7a72624-755f-42b2-a6e0-0b05f7e55256


### 2025-09-09 21:22:50 WIB — INFO

- Kedai created: dfcc8ed8-a19c-49dd-9a85-2829ac49a3b5


### 2025-09-09 21:22:50 WIB — INFO

- Cabang created: 9cdfc1a6-be83-4b8f-a1bd-dc42350ea0b4


### 2025-09-09 21:22:50 WIB — INFO

- InventarisMaster created: item-so-1757427770842


### 2025-09-09 21:22:50 WIB — INFO

- Stock IN processed: item-so-1757427770842@9cdfc1a6-be83-4b8f-a1bd-dc42350ea0b4 +20


### 2025-09-09 21:22:51 WIB — INFO

- Cabang deleted: 9cdfc1a6-be83-4b8f-a1bd-dc42350ea0b4


### 2025-09-09 21:22:51 WIB — INFO

- Kedai deleted: dfcc8ed8-a19c-49dd-9a85-2829ac49a3b5


### 2025-09-09 21:22:51 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:51 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 21:22:51 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 21:22:52 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:52 WIB — INFO

- Kedai created: c8f6991b-e723-4af2-933f-6d71b1ce4336


### 2025-09-09 21:22:52 WIB — INFO

- Cabang created: 8cecb7c8-a6f2-401d-b896-f108ccd51801


### 2025-09-09 21:22:52 WIB — INFO

- Pengguna created: 0b9afd26-94a5-4db2-bb4e-35eb5309e39c


### 2025-09-09 21:22:52 WIB — INFO

- Pengguna updated: 0b9afd26-94a5-4db2-bb4e-35eb5309e39c


### 2025-09-09 21:22:52 WIB — INFO

- Pengguna deleted: 0b9afd26-94a5-4db2-bb4e-35eb5309e39c


### 2025-09-09 21:22:52 WIB — INFO

- Cabang deleted: 8cecb7c8-a6f2-401d-b896-f108ccd51801


### 2025-09-09 21:22:52 WIB — INFO

- Kedai deleted: c8f6991b-e723-4af2-933f-6d71b1ce4336


### 2025-09-09 21:22:53 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:53 WIB — INFO

- Kedai created: 04d025d5-3f1b-4534-8641-7568f0b127ca


### 2025-09-09 21:22:53 WIB — INFO

- Cabang created: cdc3b6dd-dae5-41b2-bcf8-60c3de2239cb


### 2025-09-09 21:22:53 WIB — INFO

- InventarisMaster created: item-1757427773077


### 2025-09-09 21:22:53 WIB — INFO

- Stock IN processed: item-1757427773077@cdc3b6dd-dae5-41b2-bcf8-60c3de2239cb +10


### 2025-09-09 21:22:53 WIB — INFO

- Cabang deleted: cdc3b6dd-dae5-41b2-bcf8-60c3de2239cb


### 2025-09-09 21:22:53 WIB — INFO

- Kedai deleted: 04d025d5-3f1b-4534-8641-7568f0b127ca


### 2025-09-09 21:22:53 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:53 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 21:22:53 WIB — INFO

- Kedai created: 1c9d8372-ab9e-4687-b0cf-05a77b0b446d


### 2025-09-09 21:22:54 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:22:54 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 21:23:32 WIB — INFO

- Re-run tests in be: all tests passed

- meta: {"action":"rerun_tests","tests":"passed","summary":"9 suites, 22 tests"}


### 2025-09-09 21:26:37 WIB — INFO

- Automated checkpoint: read docs and ran backend tests

- meta: {"action":"auto_checkpoint","files":["currentTask.md","log_aktifitas.md","perencanaan.md","struktur_proyek.md","to_do.md","urutan_pekerjaan_teknis.md"],"tests":"failed","attempts":3,"log_file":"logs\\checkpoint-20250909-212637.log","summary":"--- ATTEMPT 1 ---\n\n\n--- ATTEMPT 2 ---\n\n\n--- ATTEMPT 3 ---\n\n\n"}


### 2025-09-09 21:27:26 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:27 WIB — INFO

- Kedai created: 0fbd33ee-0eb8-4f25-bdaa-8ef1c4c43f3d


### 2025-09-09 21:27:27 WIB — INFO

- Cabang created: d79a6e04-cb99-4cac-96f0-79537f9cf9b8


### 2025-09-09 21:27:27 WIB — INFO

- InventarisMaster created: item-neg-1757428047030


### 2025-09-09 21:27:27 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 21:27:27 WIB — INFO

- Cabang deleted: d79a6e04-cb99-4cac-96f0-79537f9cf9b8


### 2025-09-09 21:27:27 WIB — INFO

- Kedai deleted: 0fbd33ee-0eb8-4f25-bdaa-8ef1c4c43f3d


### 2025-09-09 21:27:27 WIB — INFO

- Kedai created: a3d5f166-8971-4fd8-93e0-d767e95876c4


### 2025-09-09 21:27:27 WIB — INFO

- InventarisMaster created: item-neg2-1757428047030


### 2025-09-09 21:27:27 WIB — INFO

- Kedai deleted: a3d5f166-8971-4fd8-93e0-d767e95876c4


### 2025-09-09 21:27:27 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:27 WIB — INFO

- Kedai created: 900de821-d14a-47a1-9f7c-3170c9dbf25e


### 2025-09-09 21:27:27 WIB — INFO

- Cabang created: 137ea479-6b4b-4017-9510-6b1dc26c4071


### 2025-09-09 21:27:27 WIB — INFO

- Pengguna created: 6647e9e1-6374-4d1e-bc0b-ab9d5d400aaa


### 2025-09-09 21:27:28 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 21:27:28 WIB — INFO

- Pengguna deleted: 6647e9e1-6374-4d1e-bc0b-ab9d5d400aaa


### 2025-09-09 21:27:28 WIB — INFO

- Cabang deleted: 137ea479-6b4b-4017-9510-6b1dc26c4071


### 2025-09-09 21:27:28 WIB — INFO

- Kedai deleted: 900de821-d14a-47a1-9f7c-3170c9dbf25e


### 2025-09-09 21:27:28 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:28 WIB — INFO

- Kedai created: 86e760dd-5089-4421-ac36-93b504c405dc


### 2025-09-09 21:27:28 WIB — INFO

- Cabang created: e6d8d18c-f261-487c-b825-2a98e080fb68


### 2025-09-09 21:27:28 WIB — INFO

- InventarisMaster created: item-con-1757428048674


### 2025-09-09 21:27:28 WIB — INFO

- Stock IN processed: item-con-1757428048674@e6d8d18c-f261-487c-b825-2a98e080fb68 +10


### 2025-09-09 21:27:28 WIB — INFO

- Stock IN processed: item-con-1757428048674@e6d8d18c-f261-487c-b825-2a98e080fb68 +10


### 2025-09-09 21:27:28 WIB — INFO

- Stock IN processed: item-con-1757428048674@e6d8d18c-f261-487c-b825-2a98e080fb68 +10


### 2025-09-09 21:27:28 WIB — INFO

- Stock IN processed: item-con-1757428048674@e6d8d18c-f261-487c-b825-2a98e080fb68 +10


### 2025-09-09 21:27:28 WIB — INFO

- Stock IN processed: item-con-1757428048674@e6d8d18c-f261-487c-b825-2a98e080fb68 +10


### 2025-09-09 21:27:28 WIB — INFO

- Cabang deleted: e6d8d18c-f261-487c-b825-2a98e080fb68


### 2025-09-09 21:27:28 WIB — INFO

- Kedai deleted: 86e760dd-5089-4421-ac36-93b504c405dc


### 2025-09-09 21:27:29 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:29 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 21:27:29 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 21:27:30 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:30 WIB — INFO

- Kedai created: 2257f812-affc-4c4a-898e-0d9f45117a3b


### 2025-09-09 21:27:30 WIB — INFO

- Cabang created: 73a75a2e-ce00-4a5e-9fb4-e3757e524476


### 2025-09-09 21:27:30 WIB — INFO

- Pengguna created: 7cf4507b-03ac-43c3-bfdd-63bc72b77529


### 2025-09-09 21:27:30 WIB — INFO

- Pengguna updated: 7cf4507b-03ac-43c3-bfdd-63bc72b77529


### 2025-09-09 21:27:30 WIB — INFO

- Pengguna deleted: 7cf4507b-03ac-43c3-bfdd-63bc72b77529


### 2025-09-09 21:27:30 WIB — INFO

- Cabang deleted: 73a75a2e-ce00-4a5e-9fb4-e3757e524476


### 2025-09-09 21:27:30 WIB — INFO

- Kedai deleted: 2257f812-affc-4c4a-898e-0d9f45117a3b


### 2025-09-09 21:27:30 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:30 WIB — INFO

- Kedai created: ff62c017-6290-4e2b-a7eb-2507851b5e32


### 2025-09-09 21:27:30 WIB — INFO

- Cabang created: 7df8ecc8-f0a5-4662-a1a2-6681022769a4


### 2025-09-09 21:27:30 WIB — INFO

- InventarisMaster created: item-hpp-1757428050849


### 2025-09-09 21:27:30 WIB — INFO

- Stock IN processed: item-hpp-1757428050849@7df8ecc8-f0a5-4662-a1a2-6681022769a4 +10


### 2025-09-09 21:27:30 WIB — INFO

- Stock IN processed: item-hpp-1757428050849@7df8ecc8-f0a5-4662-a1a2-6681022769a4 +5


### 2025-09-09 21:27:30 WIB — INFO

- Cabang deleted: 7df8ecc8-f0a5-4662-a1a2-6681022769a4


### 2025-09-09 21:27:30 WIB — INFO

- Kedai deleted: ff62c017-6290-4e2b-a7eb-2507851b5e32


### 2025-09-09 21:27:30 WIB — INFO

- Kedai created: 1eb065d0-2c5d-46bf-937a-08ea43ef1859


### 2025-09-09 21:27:31 WIB — INFO

- Cabang created: 383c8716-25a6-40b9-b79e-5667ca5f37cb


### 2025-09-09 21:27:31 WIB — INFO

- InventarisMaster created: item-so-1757428050849


### 2025-09-09 21:27:31 WIB — INFO

- Stock IN processed: item-so-1757428050849@383c8716-25a6-40b9-b79e-5667ca5f37cb +20


### 2025-09-09 21:27:31 WIB — INFO

- Cabang deleted: 383c8716-25a6-40b9-b79e-5667ca5f37cb


### 2025-09-09 21:27:31 WIB — INFO

- Kedai deleted: 1eb065d0-2c5d-46bf-937a-08ea43ef1859


### 2025-09-09 21:27:31 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:31 WIB — INFO

- Kedai created: 466a8f3f-1808-41a9-a5d8-bdea89f6bbc3


### 2025-09-09 21:27:31 WIB — INFO

- Cabang created: 32a10983-e07e-44e3-ab43-21aced1a55bf


### 2025-09-09 21:27:31 WIB — INFO

- InventarisMaster created: item-1757428051674


### 2025-09-09 21:27:31 WIB — INFO

- Stock IN processed: item-1757428051674@32a10983-e07e-44e3-ab43-21aced1a55bf +10


### 2025-09-09 21:27:31 WIB — INFO

- Cabang deleted: 32a10983-e07e-44e3-ab43-21aced1a55bf


### 2025-09-09 21:27:31 WIB — INFO

- Kedai deleted: 466a8f3f-1808-41a9-a5d8-bdea89f6bbc3


### 2025-09-09 21:27:32 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:32 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 21:27:32 WIB — INFO

- Kedai created: 8835d3bf-1052-4590-be7f-92761e13ad16


### 2025-09-09 21:27:32 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:27:32 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 21:27:33 WIB — INFO

- Automated checkpoint: read docs and ran backend tests

- meta: {"action":"auto_checkpoint","files":["currentTask.md","log_aktifitas.md","perencanaan.md","struktur_proyek.md","to_do.md","urutan_pekerjaan_teknis.md"],"tests":"passed","attempts":1,"log_file":"logs\\checkpoint-20250909-212733.log","summary":"--- ATTEMPT 1 ---\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 53.258 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 9.415 ms - 217\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 8.201 ms - 138\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[31m500\u001b[0m 28.223 ms - 30\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/d79a6e04-cb99-4cac-96f0-79537f9cf9b8 \u001b[32m200\u001b[0m 8.089 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/0fbd33ee-0eb8-4f25-bdaa-8ef1c4c43f3d \u001b[32m200\u001b[0m 7.134 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 5.401 ms - 148\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 5.133 ms - 140\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[33m422\u001b[0m 3.025 ms - 141\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/a3d5f166-8971-4fd8-93e0-d767e95876c4 \u001b[32m200\u001b[0m 6.651 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[33m422\u001b[0m 2.269 ms - 174\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[33m422\u001b[0m 1.651 ms - 94\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[33m422\u001b[0m 2.493 ms - 410\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 22.498 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 6.293 ms - 217\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[32m201\u001b[0m 72.125 ms - 89\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[33m400\u001b[0m 110.493 ms - 28\u001b[0m\n\u001b[0mDELETE /api/mgmt/pengguna/6647e9e1-6374-4d1e-bc0b-ab9d5d400aaa \u001b[32m200\u001b[0m 7.047 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/137ea479-6b4b-4017-9510-6b1dc26c4071 \u001b[32m200\u001b[0m 6.705 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/900de821-d14a-47a1-9f7c-3170c9dbf25e \u001b[32m200\u001b[0m 6.237 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 19.787 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 5.912 ms - 217\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 4.275 ms - 138\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 78.362 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 148.192 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 149.084 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 157.581 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 165.928 ms - 11\u001b[0m\n\u001b[0mGET /api/inventory/stok?item_id=item-con-1757428048674&cabang_id=e6d8d18c-f261-487c-b825-2a98e080fb68 \u001b[32m200\u001b[0m 1.859 ms - 233\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/e6d8d18c-f261-487c-b825-2a98e080fb68 \u001b[32m200\u001b[0m 5.557 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/86e760dd-5089-4421-ac36-93b504c405dc \u001b[32m200\u001b[0m 6.069 ms - 16\u001b[0m\n\u001b[0mPOST /api/auth/register \u001b[33m400\u001b[0m 136.921 ms - 28\u001b[0m\n\u001b[0mPOST /api/auth/login \u001b[32m200\u001b[0m 70.300 ms - 387\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 28.897 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 5.855 ms - 217\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[32m201\u001b[0m 69.830 ms - 89\u001b[0m\n\u001b[0mGET /api/mgmt/pengguna/7cf4507b-03ac-43c3-bfdd-63bc72b77529 \u001b[32m200\u001b[0m 4.083 ms - 295\u001b[0m\n\u001b[0mPUT /api/mgmt/pengguna/7cf4507b-03ac-43c3-bfdd-63bc72b77529 \u001b[32m200\u001b[0m 6.534 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/pengguna/7cf4507b-03ac-43c3-bfdd-63bc72b77529 \u001b[32m200\u001b[0m 6.316 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/73a75a2e-ce00-4a5e-9fb4-e3757e524476 \u001b[32m200\u001b[0m 5.220 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/2257f812-affc-4c4a-898e-0d9f45117a3b \u001b[32m200\u001b[0m 5.304 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 36.826 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 6.353 ms - 217\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 5.320 ms - 138\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 11.015 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 9.572 ms - 11\u001b[0m\n\u001b[0mGET /api/inventory/stok?item_id=item-hpp-1757428050849&cabang_id=7df8ecc8-f0a5-4662-a1a2-6681022769a4 \u001b[32m200\u001b[0m 1.529 ms - 233\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/7df8ecc8-f0a5-4662-a1a2-6681022769a4 \u001b[32m200\u001b[0m 6.354 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/ff62c017-6290-4e2b-a7eb-2507851b5e32 \u001b[32m200\u001b[0m 6.833 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 4.685 ms - 146\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 6.189 ms - 216\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 4.176 ms - 136\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 7.484 ms - 11\u001b[0m\n\u001b[0mGET /api/inventory/sto"}


### 2025-09-09 21:42:13 WIB — INFO

- Added Swagger UI route at /api/docs/swagger and OpenAPI YAML

- meta: {"action":"add_swagger_ui","files":["be/index.js","docs/openapi.yaml"]}


### 2025-09-09 21:45:22 WIB — INFO

- Seed script updated to hash passwords and added npm script seed:test

- meta: {"action":"seed_update","files":["be/scripts/seed_test_users.js","be/package.json","be/README.md"]}


### 2025-09-09 21:52:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:42 WIB — INFO

- Kedai created: bada345b-0008-425b-902d-bf40e981a51a


### 2025-09-09 21:52:42 WIB — INFO

- Cabang created: a0d87bf9-fae4-4a63-b146-36f5513afd8a


### 2025-09-09 21:52:42 WIB — INFO

- InventarisMaster created: item-neg-1757429562598


### 2025-09-09 21:52:42 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 21:52:43 WIB — INFO

- Cabang deleted: a0d87bf9-fae4-4a63-b146-36f5513afd8a


### 2025-09-09 21:52:43 WIB — INFO

- Kedai deleted: bada345b-0008-425b-902d-bf40e981a51a


### 2025-09-09 21:52:43 WIB — INFO

- Kedai created: 7c976b32-2ebf-414e-93d4-f8c1cb451b2f


### 2025-09-09 21:52:43 WIB — INFO

- InventarisMaster created: item-neg2-1757429562598


### 2025-09-09 21:52:43 WIB — INFO

- Kedai deleted: 7c976b32-2ebf-414e-93d4-f8c1cb451b2f


### 2025-09-09 21:52:44 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:44 WIB — INFO

- Kedai created: 80f45d2f-b393-4760-b3ca-f461ff8d89fa


### 2025-09-09 21:52:44 WIB — INFO

- Cabang created: 7b2006ab-7bf3-4e43-a349-2cbacb8cc5eb


### 2025-09-09 21:52:44 WIB — INFO

- Pengguna created: 548db21f-4fce-4e20-a3c9-4b52326db511


### 2025-09-09 21:52:44 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 21:52:44 WIB — INFO

- Pengguna deleted: 548db21f-4fce-4e20-a3c9-4b52326db511


### 2025-09-09 21:52:44 WIB — INFO

- Cabang deleted: 7b2006ab-7bf3-4e43-a349-2cbacb8cc5eb


### 2025-09-09 21:52:44 WIB — INFO

- Kedai deleted: 80f45d2f-b393-4760-b3ca-f461ff8d89fa


### 2025-09-09 21:52:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:45 WIB — INFO

- Kedai created: c6a2612c-a46b-4ad8-9646-5b5fa066e023


### 2025-09-09 21:52:45 WIB — INFO

- Cabang created: 7c46eef6-d307-4443-a901-7580f675cf12


### 2025-09-09 21:52:45 WIB — INFO

- InventarisMaster created: item-con-1757429565059


### 2025-09-09 21:52:45 WIB — INFO

- Stock IN processed: item-con-1757429565059@7c46eef6-d307-4443-a901-7580f675cf12 +10


### 2025-09-09 21:52:45 WIB — INFO

- Stock IN processed: item-con-1757429565059@7c46eef6-d307-4443-a901-7580f675cf12 +10


### 2025-09-09 21:52:45 WIB — INFO

- Stock IN processed: item-con-1757429565059@7c46eef6-d307-4443-a901-7580f675cf12 +10


### 2025-09-09 21:52:45 WIB — INFO

- Stock IN processed: item-con-1757429565059@7c46eef6-d307-4443-a901-7580f675cf12 +10


### 2025-09-09 21:52:45 WIB — INFO

- Stock IN processed: item-con-1757429565059@7c46eef6-d307-4443-a901-7580f675cf12 +10


### 2025-09-09 21:52:45 WIB — INFO

- Cabang deleted: 7c46eef6-d307-4443-a901-7580f675cf12


### 2025-09-09 21:52:45 WIB — INFO

- Kedai deleted: c6a2612c-a46b-4ad8-9646-5b5fa066e023


### 2025-09-09 21:52:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:46 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 21:52:46 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 21:52:46 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:46 WIB — INFO

- Kedai created: 38264d99-41c5-47bf-a211-11c685847075


### 2025-09-09 21:52:46 WIB — INFO

- Cabang created: 42eb99b6-a63f-4aca-8f27-eb96fbda865a


### 2025-09-09 21:52:46 WIB — INFO

- InventarisMaster created: item-1757429566895


### 2025-09-09 21:52:46 WIB — INFO

- Stock IN processed: item-1757429566895@42eb99b6-a63f-4aca-8f27-eb96fbda865a +10


### 2025-09-09 21:52:47 WIB — INFO

- Cabang deleted: 42eb99b6-a63f-4aca-8f27-eb96fbda865a


### 2025-09-09 21:52:47 WIB — INFO

- Kedai deleted: 38264d99-41c5-47bf-a211-11c685847075


### 2025-09-09 21:52:47 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:47 WIB — INFO

- Kedai created: 58809b3d-3379-4cc7-8c4e-e44bd8041f76


### 2025-09-09 21:52:47 WIB — INFO

- Cabang created: c8e3861e-6965-4d1b-8e94-640dc9b2e312


### 2025-09-09 21:52:47 WIB — INFO

- InventarisMaster created: item-hpp-1757429567680


### 2025-09-09 21:52:47 WIB — INFO

- Stock IN processed: item-hpp-1757429567680@c8e3861e-6965-4d1b-8e94-640dc9b2e312 +10


### 2025-09-09 21:52:47 WIB — INFO

- Stock IN processed: item-hpp-1757429567680@c8e3861e-6965-4d1b-8e94-640dc9b2e312 +5


### 2025-09-09 21:52:47 WIB — INFO

- Cabang deleted: c8e3861e-6965-4d1b-8e94-640dc9b2e312


### 2025-09-09 21:52:47 WIB — INFO

- Kedai deleted: 58809b3d-3379-4cc7-8c4e-e44bd8041f76


### 2025-09-09 21:52:47 WIB — INFO

- Kedai created: 885efea7-857b-4f12-a73f-f8762b1870c6


### 2025-09-09 21:52:47 WIB — INFO

- Cabang created: a6db4d7a-9a20-408b-acc7-8bcf836f228a


### 2025-09-09 21:52:47 WIB — INFO

- InventarisMaster created: item-so-1757429567680


### 2025-09-09 21:52:47 WIB — INFO

- Stock IN processed: item-so-1757429567680@a6db4d7a-9a20-408b-acc7-8bcf836f228a +20


### 2025-09-09 21:52:47 WIB — INFO

- Cabang deleted: a6db4d7a-9a20-408b-acc7-8bcf836f228a


### 2025-09-09 21:52:47 WIB — INFO

- Kedai deleted: 885efea7-857b-4f12-a73f-f8762b1870c6


### 2025-09-09 21:52:48 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:48 WIB — INFO

- Kedai created: f5ca833b-5993-45f5-ba90-bab838c6e456


### 2025-09-09 21:52:48 WIB — INFO

- Cabang created: e93d050a-af8a-4442-b6c2-ac1ce1541d4c


### 2025-09-09 21:52:48 WIB — INFO

- Pengguna created: d2fbf6a2-7b24-4702-a5fb-ba3eea4300a0


### 2025-09-09 21:52:48 WIB — INFO

- Pengguna updated: d2fbf6a2-7b24-4702-a5fb-ba3eea4300a0


### 2025-09-09 21:52:48 WIB — INFO

- Pengguna deleted: d2fbf6a2-7b24-4702-a5fb-ba3eea4300a0


### 2025-09-09 21:52:48 WIB — INFO

- Cabang deleted: e93d050a-af8a-4442-b6c2-ac1ce1541d4c


### 2025-09-09 21:52:48 WIB — INFO

- Kedai deleted: f5ca833b-5993-45f5-ba90-bab838c6e456


### 2025-09-09 21:52:49 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:49 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 21:52:50 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 21:52:50 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 21:52:50 WIB — INFO

- Kedai created: 02308e21-573e-4c94-98f0-5430a15937c5


### 2025-09-09 21:52:50 WIB — INFO

- Automated checkpoint: read docs and ran backend tests

- meta: {"action":"auto_checkpoint","files":["currentTask.md","log_aktifitas.md","perencanaan.md","struktur_proyek.md","to_do.md","urutan_pekerjaan_teknis.md"],"tests":"passed","attempts":1,"log_file":"logs\\checkpoint-20250909-215250.log","summary":"--- ATTEMPT 1 ---\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 72.235 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 16.281 ms - 217\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 12.728 ms - 138\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[31m500\u001b[0m 116.558 ms - 30\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/a0d87bf9-fae4-4a63-b146-36f5513afd8a \u001b[32m200\u001b[0m 17.499 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/bada345b-0008-425b-902d-bf40e981a51a \u001b[32m200\u001b[0m 29.605 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 33.629 ms - 148\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 33.937 ms - 140\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[33m422\u001b[0m 6.357 ms - 141\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/7c976b32-2ebf-414e-93d4-f8c1cb451b2f \u001b[32m200\u001b[0m 13.302 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[33m422\u001b[0m 2.592 ms - 174\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[33m422\u001b[0m 2.005 ms - 94\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[33m422\u001b[0m 3.056 ms - 410\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 22.746 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 10.239 ms - 217\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[32m201\u001b[0m 69.763 ms - 89\u001b[0m\n\u001b[0mPOST /api/mgmt/pengguna \u001b[33m400\u001b[0m 115.855 ms - 28\u001b[0m\n\u001b[0mDELETE /api/mgmt/pengguna/548db21f-4fce-4e20-a3c9-4b52326db511 \u001b[32m200\u001b[0m 10.337 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/7b2006ab-7bf3-4e43-a349-2cbacb8cc5eb \u001b[32m200\u001b[0m 7.524 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/80f45d2f-b393-4760-b3ca-f461ff8d89fa \u001b[32m200\u001b[0m 6.737 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 28.201 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 8.015 ms - 217\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 5.548 ms - 138\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 79.114 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 145.842 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 159.591 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 162.109 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 170.617 ms - 11\u001b[0m\n\u001b[0mGET /api/inventory/stok?item_id=item-con-1757429565059&cabang_id=7c46eef6-d307-4443-a901-7580f675cf12 \u001b[32m200\u001b[0m 1.608 ms - 233\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/7c46eef6-d307-4443-a901-7580f675cf12 \u001b[32m200\u001b[0m 6.537 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/c6a2612c-a46b-4ad8-9646-5b5fa066e023 \u001b[32m200\u001b[0m 6.223 ms - 16\u001b[0m\n\u001b[0mPOST /api/auth/register \u001b[33m400\u001b[0m 162.377 ms - 28\u001b[0m\n\u001b[0mPOST /api/auth/login \u001b[32m200\u001b[0m 68.149 ms - 387\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 30.697 ms - 149\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 8.278 ms - 219\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 6.345 ms - 135\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 13.309 ms - 11\u001b[0m\n\u001b[0mGET /api/inventory/stok?item_id=item-1757429566895&cabang_id=42eb99b6-a63f-4aca-8f27-eb96fbda865a \u001b[32m200\u001b[0m 2.211 ms - 230\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[33m422\u001b[0m 1.801 ms - 261\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[33m422\u001b[0m 1.909 ms - 199\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/42eb99b6-a63f-4aca-8f27-eb96fbda865a \u001b[32m200\u001b[0m 7.137 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/38264d99-41c5-47bf-a211-11c685847075 \u001b[32m200\u001b[0m 9.323 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 22.527 ms - 147\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 7.465 ms - 217\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 7.106 ms - 138\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 17.483 ms - 11\u001b[0m\n\u001b[0mPOST /api/inventory/tx/stock-in \u001b[32m200\u001b[0m 11.032 ms - 11\u001b[0m\n\u001b[0mGET /api/inventory/stok?item_id=item-hpp-1757429567680&cabang_id=c8e3861e-6965-4d1b-8e94-640dc9b2e312 \u001b[32m200\u001b[0m 1.771 ms - 233\u001b[0m\n\u001b[0mDELETE /api/mgmt/cabang/c8e3861e-6965-4d1b-8e94-640dc9b2e312 \u001b[32m200\u001b[0m 6.332 ms - 16\u001b[0m\n\u001b[0mDELETE /api/mgmt/kedai/58809b3d-3379-4cc7-8c4e-e44bd8041f76 \u001b[32m200\u001b[0m 7.711 ms - 16\u001b[0m\n\u001b[0mPOST /api/mgmt/kedai \u001b[32m201\u001b[0m 5.540 ms - 146\u001b[0m\n\u001b[0mPOST /api/mgmt/cabang \u001b[32m201\u001b[0m 6.026 ms - 216\u001b[0m\n\u001b[0mPOST /api/inventory/inventaris \u001b[32m201\u001b[0m 3.940 ms - 136\u001b[0m\n\u001b[0mPOST /api/inventory/tx"}


### 2025-09-09 21:55:48 WIB — INFO

- Added seed:undo script and updated be/README.md

- meta: {"action":"seed_undo_added","files":["be/scripts/seed_undo_test_users.js","be/package.json","be/README.md"]}


### 2025-09-09 21:55:57 WIB — INFO

- Added checkpoint summary file and linked log

- meta: {"action":"checkpoint_summary","files":["docs/checkpoint_summary_20250909-215250.md","logs/checkpoint-20250909-215250.log"]}


### 2025-09-09 21:59:08 WIB — INFO

- Added CI workflow .github/workflows/ci.yml

- meta: {"action":"ci_added","files":[".github/workflows/ci.yml"]}


### 2025-09-09 22:21:36 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:36 WIB — INFO

- Kedai created: 2bda40f9-c5dd-4b5e-8ba2-a37224f52906


### 2025-09-09 22:21:36 WIB — INFO

- Cabang created: b4d2a1d1-5f6b-47be-b023-89c995a65e7b


### 2025-09-09 22:21:36 WIB — INFO

- InventarisMaster created: item-neg-1757431296587


### 2025-09-09 22:21:36 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 22:21:36 WIB — INFO

- Cabang deleted: b4d2a1d1-5f6b-47be-b023-89c995a65e7b


### 2025-09-09 22:21:36 WIB — INFO

- Kedai deleted: 2bda40f9-c5dd-4b5e-8ba2-a37224f52906


### 2025-09-09 22:21:36 WIB — INFO

- Kedai created: d23733fa-4989-4dd0-82f1-2013818fdde7


### 2025-09-09 22:21:36 WIB — INFO

- InventarisMaster created: item-neg2-1757431296587


### 2025-09-09 22:21:36 WIB — INFO

- Kedai deleted: d23733fa-4989-4dd0-82f1-2013818fdde7


### 2025-09-09 22:21:37 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:37 WIB — INFO

- Kedai created: 6d0d8d08-ffa9-46ba-a30f-492b66f948b7


### 2025-09-09 22:21:37 WIB — INFO

- Cabang created: cc432f4d-4d73-47b6-a75d-5c060d741b17


### 2025-09-09 22:21:37 WIB — INFO

- Pengguna created: 704372cd-353b-41f9-a1c3-650f692ad353


### 2025-09-09 22:21:38 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 22:21:38 WIB — INFO

- Pengguna deleted: 704372cd-353b-41f9-a1c3-650f692ad353


### 2025-09-09 22:21:38 WIB — INFO

- Cabang deleted: cc432f4d-4d73-47b6-a75d-5c060d741b17


### 2025-09-09 22:21:38 WIB — INFO

- Kedai deleted: 6d0d8d08-ffa9-46ba-a30f-492b66f948b7


### 2025-09-09 22:21:38 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:38 WIB — INFO

- Kedai created: 9a6fdca5-f374-4a98-82e8-d67a681b86f4


### 2025-09-09 22:21:38 WIB — INFO

- Cabang created: d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6


### 2025-09-09 22:21:38 WIB — INFO

- InventarisMaster created: item-con-1757431298748


### 2025-09-09 22:21:38 WIB — INFO

- Stock IN processed: item-con-1757431298748@d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6 +10


### 2025-09-09 22:21:38 WIB — INFO

- Stock IN processed: item-con-1757431298748@d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6 +10


### 2025-09-09 22:21:38 WIB — INFO

- Stock IN processed: item-con-1757431298748@d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6 +10


### 2025-09-09 22:21:38 WIB — INFO

- Stock IN processed: item-con-1757431298748@d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6 +10


### 2025-09-09 22:21:39 WIB — INFO

- Stock IN processed: item-con-1757431298748@d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6 +10


### 2025-09-09 22:21:39 WIB — INFO

- Cabang deleted: d5ce0131-e4c2-4f03-a820-ab2cb6b8abd6


### 2025-09-09 22:21:39 WIB — INFO

- Kedai deleted: 9a6fdca5-f374-4a98-82e8-d67a681b86f4


### 2025-09-09 22:21:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:39 WIB — INFO

- Kedai created: 2479dec3-c493-40b5-8a76-d80b3ec09ac0


### 2025-09-09 22:21:39 WIB — INFO

- Cabang created: 47d92827-a628-45e3-9137-96a8808b710d


### 2025-09-09 22:21:39 WIB — INFO

- Pengguna created: d99b2267-912b-417d-b2a6-ae71cf0f76f9


### 2025-09-09 22:21:39 WIB — INFO

- Pengguna updated: d99b2267-912b-417d-b2a6-ae71cf0f76f9


### 2025-09-09 22:21:39 WIB — INFO

- Pengguna deleted: d99b2267-912b-417d-b2a6-ae71cf0f76f9


### 2025-09-09 22:21:39 WIB — INFO

- Cabang deleted: 47d92827-a628-45e3-9137-96a8808b710d


### 2025-09-09 22:21:39 WIB — INFO

- Kedai deleted: 2479dec3-c493-40b5-8a76-d80b3ec09ac0


### 2025-09-09 22:21:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:40 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 22:21:40 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 22:21:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:41 WIB — INFO

- Kedai created: afb736c7-4052-4021-86a4-8a2d87e5e538


### 2025-09-09 22:21:41 WIB — INFO

- Cabang created: e562350a-cc75-4edc-bc5d-720e9514b6b0


### 2025-09-09 22:21:41 WIB — INFO

- InventarisMaster created: item-hpp-1757431301559


### 2025-09-09 22:21:41 WIB — INFO

- Stock IN processed: item-hpp-1757431301559@e562350a-cc75-4edc-bc5d-720e9514b6b0 +10


### 2025-09-09 22:21:41 WIB — INFO

- Stock IN processed: item-hpp-1757431301559@e562350a-cc75-4edc-bc5d-720e9514b6b0 +5


### 2025-09-09 22:21:41 WIB — INFO

- Cabang deleted: e562350a-cc75-4edc-bc5d-720e9514b6b0


### 2025-09-09 22:21:41 WIB — INFO

- Kedai deleted: afb736c7-4052-4021-86a4-8a2d87e5e538


### 2025-09-09 22:21:41 WIB — INFO

- Kedai created: d9b6b994-d506-4f8d-a6af-cf24996698ea


### 2025-09-09 22:21:41 WIB — INFO

- Cabang created: a11c64cc-841b-4149-b75d-8aece0c5a4c3


### 2025-09-09 22:21:41 WIB — INFO

- InventarisMaster created: item-so-1757431301559


### 2025-09-09 22:21:41 WIB — INFO

- Stock IN processed: item-so-1757431301559@a11c64cc-841b-4149-b75d-8aece0c5a4c3 +20


### 2025-09-09 22:21:41 WIB — INFO

- Cabang deleted: a11c64cc-841b-4149-b75d-8aece0c5a4c3


### 2025-09-09 22:21:41 WIB — INFO

- Kedai deleted: d9b6b994-d506-4f8d-a6af-cf24996698ea


### 2025-09-09 22:21:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:42 WIB — INFO

- Kedai created: 7863e1bb-fc9a-43d0-ae39-1890d4561de3


### 2025-09-09 22:21:42 WIB — INFO

- Cabang created: 650ffc2b-4dc2-465c-ac61-112652b61ff5


### 2025-09-09 22:21:42 WIB — INFO

- InventarisMaster created: item-1757431302425


### 2025-09-09 22:21:42 WIB — INFO

- Stock IN processed: item-1757431302425@650ffc2b-4dc2-465c-ac61-112652b61ff5 +10


### 2025-09-09 22:21:42 WIB — INFO

- Cabang deleted: 650ffc2b-4dc2-465c-ac61-112652b61ff5


### 2025-09-09 22:21:42 WIB — INFO

- Kedai deleted: 7863e1bb-fc9a-43d0-ae39-1890d4561de3


### 2025-09-09 22:21:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:43 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 22:21:43 WIB — INFO

- Kedai created: 0a9c320b-ea02-474c-baf3-7034d525e300


### 2025-09-09 22:21:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:21:43 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 22:22:48 WIB — INFO

- Ran test suite (local): all tests passed

- meta: {"suites":9,"tests":22,"status":"all passed"}


### 2025-09-09 22:30:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:30:43 WIB — INFO

- Kedai created: 8843740c-e3a2-4938-a76f-b11fef380b21


### 2025-09-09 22:30:44 WIB — INFO

- Cabang created: 8a162c89-03a1-4748-b632-0c7a95b5071a


### 2025-09-09 22:30:44 WIB — INFO

- InventarisMaster created: item-neg-1757431843871


### 2025-09-09 22:30:44 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 22:30:44 WIB — INFO

- Cabang deleted: 8a162c89-03a1-4748-b632-0c7a95b5071a


### 2025-09-09 22:30:44 WIB — INFO

- Kedai deleted: 8843740c-e3a2-4938-a76f-b11fef380b21


### 2025-09-09 22:30:44 WIB — INFO

- Kedai created: e30ff556-ac2a-4b1f-a7f9-504ac344b630


### 2025-09-09 22:30:44 WIB — INFO

- InventarisMaster created: item-neg2-1757431843871


### 2025-09-09 22:30:44 WIB — INFO

- Kedai deleted: e30ff556-ac2a-4b1f-a7f9-504ac344b630


### 2025-09-09 22:30:44 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:30:44 WIB — INFO

- Kedai created: 5f24a95e-0aa9-446e-82e1-94d4a84d3acc


### 2025-09-09 22:30:44 WIB — INFO

- Cabang created: 9ebfcc19-1066-44ec-8a18-0c358ea22a48


### 2025-09-09 22:30:44 WIB — INFO

- InventarisMaster created: item-con-1757431844842


### 2025-09-09 22:30:45 WIB — INFO

- Stock IN processed: item-con-1757431844842@9ebfcc19-1066-44ec-8a18-0c358ea22a48 +10


### 2025-09-09 22:30:45 WIB — INFO

- Stock IN processed: item-con-1757431844842@9ebfcc19-1066-44ec-8a18-0c358ea22a48 +10


### 2025-09-09 22:30:45 WIB — INFO

- Stock IN processed: item-con-1757431844842@9ebfcc19-1066-44ec-8a18-0c358ea22a48 +10


### 2025-09-09 22:30:45 WIB — INFO

- Stock IN processed: item-con-1757431844842@9ebfcc19-1066-44ec-8a18-0c358ea22a48 +10


### 2025-09-09 22:30:45 WIB — INFO

- Stock IN processed: item-con-1757431844842@9ebfcc19-1066-44ec-8a18-0c358ea22a48 +10


### 2025-09-09 22:30:45 WIB — INFO

- Cabang deleted: 9ebfcc19-1066-44ec-8a18-0c358ea22a48


### 2025-09-09 22:30:45 WIB — INFO

- Kedai deleted: 5f24a95e-0aa9-446e-82e1-94d4a84d3acc


### 2025-09-09 22:30:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:30:46 WIB — INFO

- Kedai created: 1efa6e60-a58a-434d-8346-d56c954f1a9a


### 2025-09-09 22:30:46 WIB — INFO

- Cabang created: 3b4cecf7-756e-4f24-b6c7-f8613572cfaf


### 2025-09-09 22:30:46 WIB — INFO

- InventarisMaster created: item-hpp-1757431845973


### 2025-09-09 22:30:46 WIB — INFO

- Stock IN processed: item-hpp-1757431845973@3b4cecf7-756e-4f24-b6c7-f8613572cfaf +10


### 2025-09-09 22:30:46 WIB — INFO

- Stock IN processed: item-hpp-1757431845973@3b4cecf7-756e-4f24-b6c7-f8613572cfaf +5


### 2025-09-09 22:30:46 WIB — INFO

- Cabang deleted: 3b4cecf7-756e-4f24-b6c7-f8613572cfaf


### 2025-09-09 22:30:46 WIB — INFO

- Kedai deleted: 1efa6e60-a58a-434d-8346-d56c954f1a9a


### 2025-09-09 22:30:46 WIB — INFO

- Kedai created: 41dca3a2-383e-4498-bd41-9c6752b2e6b4


### 2025-09-09 22:30:46 WIB — INFO

- Cabang created: 954486da-62d0-43cd-9b64-f56847001334


### 2025-09-09 22:30:46 WIB — INFO

- InventarisMaster created: item-so-1757431845973


### 2025-09-09 22:30:46 WIB — INFO

- Stock IN processed: item-so-1757431845973@954486da-62d0-43cd-9b64-f56847001334 +20


### 2025-09-09 22:30:46 WIB — INFO

- Cabang deleted: 954486da-62d0-43cd-9b64-f56847001334


### 2025-09-09 22:30:46 WIB — INFO

- Kedai deleted: 41dca3a2-383e-4498-bd41-9c6752b2e6b4


### 2025-09-09 22:30:46 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:30:46 WIB — INFO

- Kedai created: 6db5dbe9-b036-4fd8-8b6b-8eb01787ac30


### 2025-09-09 22:30:46 WIB — INFO

- Cabang created: 2856d42a-f627-4951-b2a5-e40c371443ac


### 2025-09-09 22:30:46 WIB — INFO

- InventarisMaster created: item-1757431846860


### 2025-09-09 22:30:46 WIB — INFO

- Stock IN processed: item-1757431846860@2856d42a-f627-4951-b2a5-e40c371443ac +10


### 2025-09-09 22:30:46 WIB — INFO

- Cabang deleted: 2856d42a-f627-4951-b2a5-e40c371443ac


### 2025-09-09 22:30:46 WIB — INFO

- Kedai deleted: 6db5dbe9-b036-4fd8-8b6b-8eb01787ac30


### 2025-09-09 22:32:50 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:32:51 WIB — INFO

- Kedai created: 2d405160-e1d3-4da9-b6e2-46ce98d26a58


### 2025-09-09 22:32:51 WIB — INFO

- Cabang created: 23a0f737-c8f8-4149-9160-67fecf1ed2d9


### 2025-09-09 22:32:51 WIB — INFO

- InventarisMaster created: item-neg-1757431971437


### 2025-09-09 22:32:51 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 22:32:51 WIB — INFO

- Cabang deleted: 23a0f737-c8f8-4149-9160-67fecf1ed2d9


### 2025-09-09 22:32:51 WIB — INFO

- Kedai deleted: 2d405160-e1d3-4da9-b6e2-46ce98d26a58


### 2025-09-09 22:32:51 WIB — INFO

- Kedai created: e0a0a62b-30d7-4d0f-af7f-dccd25af8e48


### 2025-09-09 22:32:51 WIB — INFO

- InventarisMaster created: item-neg2-1757431971437


### 2025-09-09 22:32:51 WIB — INFO

- Kedai deleted: e0a0a62b-30d7-4d0f-af7f-dccd25af8e48


### 2025-09-09 22:32:52 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:32:52 WIB — INFO

- Kedai created: 1d659553-9edd-40db-bc98-d29db2dec230


### 2025-09-09 22:32:52 WIB — INFO

- Cabang created: a0d565c1-5ccb-4c32-91b0-e0355488d228


### 2025-09-09 22:32:52 WIB — INFO

- InventarisMaster created: item-hpp-1757431972596


### 2025-09-09 22:32:52 WIB — INFO

- Stock IN processed: item-hpp-1757431972596@a0d565c1-5ccb-4c32-91b0-e0355488d228 +10


### 2025-09-09 22:32:52 WIB — INFO

- Stock IN processed: item-hpp-1757431972596@a0d565c1-5ccb-4c32-91b0-e0355488d228 +5


### 2025-09-09 22:32:52 WIB — INFO

- Cabang deleted: a0d565c1-5ccb-4c32-91b0-e0355488d228


### 2025-09-09 22:32:52 WIB — INFO

- Kedai deleted: 1d659553-9edd-40db-bc98-d29db2dec230


### 2025-09-09 22:32:52 WIB — INFO

- Kedai created: 6be53c13-fc9c-4b4a-b7ee-7d27350d9edc


### 2025-09-09 22:32:52 WIB — INFO

- Cabang created: ef85cd66-06f7-4dcd-b294-d442540273cf


### 2025-09-09 22:32:52 WIB — INFO

- InventarisMaster created: item-so-1757431972596


### 2025-09-09 22:32:52 WIB — INFO

- Stock IN processed: item-so-1757431972596@ef85cd66-06f7-4dcd-b294-d442540273cf +20


### 2025-09-09 22:32:52 WIB — INFO

- Cabang deleted: ef85cd66-06f7-4dcd-b294-d442540273cf


### 2025-09-09 22:32:52 WIB — INFO

- Kedai deleted: 6be53c13-fc9c-4b4a-b7ee-7d27350d9edc


### 2025-09-09 22:32:53 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:32:53 WIB — INFO

- Kedai created: 1deb82aa-9721-4527-8273-45a0c5dcf626


### 2025-09-09 22:32:53 WIB — INFO

- Cabang created: c23239e6-094c-4e6f-939f-6eb863c2f070


### 2025-09-09 22:32:53 WIB — INFO

- InventarisMaster created: item-con-1757431973719


### 2025-09-09 22:32:53 WIB — INFO

- Stock IN processed: item-con-1757431973719@c23239e6-094c-4e6f-939f-6eb863c2f070 +10


### 2025-09-09 22:32:53 WIB — INFO

- Stock IN processed: item-con-1757431973719@c23239e6-094c-4e6f-939f-6eb863c2f070 +10


### 2025-09-09 22:32:53 WIB — INFO

- Stock IN processed: item-con-1757431973719@c23239e6-094c-4e6f-939f-6eb863c2f070 +10


### 2025-09-09 22:32:53 WIB — INFO

- Stock IN processed: item-con-1757431973719@c23239e6-094c-4e6f-939f-6eb863c2f070 +10


### 2025-09-09 22:32:53 WIB — INFO

- Stock IN processed: item-con-1757431973719@c23239e6-094c-4e6f-939f-6eb863c2f070 +10


### 2025-09-09 22:32:53 WIB — INFO

- Cabang deleted: c23239e6-094c-4e6f-939f-6eb863c2f070


### 2025-09-09 22:32:54 WIB — INFO

- Kedai deleted: 1deb82aa-9721-4527-8273-45a0c5dcf626


### 2025-09-09 22:32:54 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:32:54 WIB — INFO

- Kedai created: bccce648-6f51-42ff-bfc1-e26cf213d2ff


### 2025-09-09 22:32:54 WIB — INFO

- Cabang created: 59ae00bc-00ad-4365-b0d2-96de373f8e45


### 2025-09-09 22:32:54 WIB — INFO

- InventarisMaster created: item-1757431974711


### 2025-09-09 22:32:54 WIB — INFO

- Stock IN processed: item-1757431974711@59ae00bc-00ad-4365-b0d2-96de373f8e45 +10


### 2025-09-09 22:32:54 WIB — INFO

- Cabang deleted: 59ae00bc-00ad-4365-b0d2-96de373f8e45


### 2025-09-09 22:32:54 WIB — INFO

- Kedai deleted: bccce648-6f51-42ff-bfc1-e26cf213d2ff


### 2025-09-09 22:35:02 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:02 WIB — INFO

- Kedai created: b80ff4c6-45cf-469e-b47e-38849b6f6c4a


### 2025-09-09 22:35:02 WIB — INFO

- Cabang created: e1e6937e-e768-41bf-9e6b-837a84cb86e5


### 2025-09-09 22:35:02 WIB — INFO

- InventarisMaster created: item-neg-1757432102722


### 2025-09-09 22:35:02 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 22:35:02 WIB — INFO

- Cabang deleted: e1e6937e-e768-41bf-9e6b-837a84cb86e5


### 2025-09-09 22:35:02 WIB — INFO

- Kedai deleted: b80ff4c6-45cf-469e-b47e-38849b6f6c4a


### 2025-09-09 22:35:02 WIB — INFO

- Kedai created: d7e3b47f-1d2a-4ff3-99e6-aeef826ac658


### 2025-09-09 22:35:02 WIB — INFO

- InventarisMaster created: item-neg2-1757432102722


### 2025-09-09 22:35:02 WIB — INFO

- Kedai deleted: d7e3b47f-1d2a-4ff3-99e6-aeef826ac658


### 2025-09-09 22:35:03 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:03 WIB — INFO

- Kedai created: 250a55e6-0077-4eff-80e0-1fc1c91b52a5


### 2025-09-09 22:35:03 WIB — INFO

- Cabang created: ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63


### 2025-09-09 22:35:03 WIB — INFO

- InventarisMaster created: item-con-1757432103680


### 2025-09-09 22:35:03 WIB — INFO

- Stock IN processed: item-con-1757432103680@ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63 +10


### 2025-09-09 22:35:03 WIB — INFO

- Stock IN processed: item-con-1757432103680@ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63 +10


### 2025-09-09 22:35:03 WIB — INFO

- Stock IN processed: item-con-1757432103680@ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63 +10


### 2025-09-09 22:35:03 WIB — INFO

- Stock IN processed: item-con-1757432103680@ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63 +10


### 2025-09-09 22:35:03 WIB — INFO

- Stock IN processed: item-con-1757432103680@ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63 +10


### 2025-09-09 22:35:03 WIB — INFO

- Cabang deleted: ab66ebc3-c3e0-4471-9cb8-6f5a212a5b63


### 2025-09-09 22:35:03 WIB — INFO

- Kedai deleted: 250a55e6-0077-4eff-80e0-1fc1c91b52a5


### 2025-09-09 22:35:04 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:04 WIB — INFO

- Kedai created: 5b4eecaf-3664-42df-b28a-e2372e9e8e5a


### 2025-09-09 22:35:04 WIB — INFO

- Cabang created: a668e0b0-d0eb-400f-bbaa-52680bb432c9


### 2025-09-09 22:35:04 WIB — INFO

- Pengguna created: d0de28ec-246e-419f-8468-016c3beccf15


### 2025-09-09 22:35:04 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 22:35:05 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:05 WIB — INFO

- Kedai created: fa41a333-6b07-4641-af8a-ffcb68eb5df4


### 2025-09-09 22:35:05 WIB — INFO

- Cabang created: d380509a-23e1-4770-b05e-bd7fdfaaf83f


### 2025-09-09 22:35:05 WIB — INFO

- InventarisMaster created: item-hpp-1757432105570


### 2025-09-09 22:35:05 WIB — INFO

- Stock IN processed: item-hpp-1757432105570@d380509a-23e1-4770-b05e-bd7fdfaaf83f +10


### 2025-09-09 22:35:05 WIB — INFO

- Stock IN processed: item-hpp-1757432105570@d380509a-23e1-4770-b05e-bd7fdfaaf83f +5


### 2025-09-09 22:35:05 WIB — INFO

- Cabang deleted: d380509a-23e1-4770-b05e-bd7fdfaaf83f


### 2025-09-09 22:35:05 WIB — INFO

- Kedai deleted: fa41a333-6b07-4641-af8a-ffcb68eb5df4


### 2025-09-09 22:35:05 WIB — INFO

- Kedai created: 99c8166f-228b-47dc-9968-ac764a199ec2


### 2025-09-09 22:35:05 WIB — INFO

- Cabang created: 86e5e137-d5e2-41c5-96de-90b6985e5cae


### 2025-09-09 22:35:05 WIB — INFO

- InventarisMaster created: item-so-1757432105570


### 2025-09-09 22:35:05 WIB — INFO

- Stock IN processed: item-so-1757432105570@86e5e137-d5e2-41c5-96de-90b6985e5cae +20


### 2025-09-09 22:35:05 WIB — INFO

- Cabang deleted: 86e5e137-d5e2-41c5-96de-90b6985e5cae


### 2025-09-09 22:35:05 WIB — INFO

- Kedai deleted: 99c8166f-228b-47dc-9968-ac764a199ec2


### 2025-09-09 22:35:06 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:06 WIB — INFO

- Kedai created: f8ea786f-5c89-41d3-85db-9d83c9a06e37


### 2025-09-09 22:35:06 WIB — INFO

- Cabang created: 59030259-75a4-4c6f-9394-f89bf51da58e


### 2025-09-09 22:35:06 WIB — INFO

- Pengguna created: 9334c14e-a0d1-4ce3-880f-46fc8be6b3a2


### 2025-09-09 22:35:06 WIB — INFO

- Pengguna updated: 9334c14e-a0d1-4ce3-880f-46fc8be6b3a2


### 2025-09-09 22:35:06 WIB — INFO

- Pengguna deleted: 9334c14e-a0d1-4ce3-880f-46fc8be6b3a2


### 2025-09-09 22:35:06 WIB — INFO

- Cabang deleted: 59030259-75a4-4c6f-9394-f89bf51da58e


### 2025-09-09 22:35:06 WIB — INFO

- Kedai deleted: f8ea786f-5c89-41d3-85db-9d83c9a06e37


### 2025-09-09 22:35:07 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:07 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 22:35:07 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 22:35:08 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:08 WIB — INFO

- Kedai created: 2de99a19-cf98-4341-bc78-b238d44368df


### 2025-09-09 22:35:08 WIB — INFO

- Cabang created: e10c0ef2-fa83-4901-9871-b5fd783258e0


### 2025-09-09 22:35:08 WIB — INFO

- InventarisMaster created: item-1757432108340


### 2025-09-09 22:35:08 WIB — INFO

- Stock IN processed: item-1757432108340@e10c0ef2-fa83-4901-9871-b5fd783258e0 +10


### 2025-09-09 22:35:08 WIB — INFO

- Cabang deleted: e10c0ef2-fa83-4901-9871-b5fd783258e0


### 2025-09-09 22:35:08 WIB — INFO

- Kedai deleted: 2de99a19-cf98-4341-bc78-b238d44368df


### 2025-09-09 22:35:09 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:09 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 22:35:09 WIB — INFO

- Kedai created: 9cd606e0-c554-4853-aeb6-d8e31ea6cc3f


### 2025-09-09 22:35:09 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:35:09 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 22:37:21 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:21 WIB — INFO

- Kedai created: a08cf2dd-9a2b-467e-8e5b-5c6734538f33


### 2025-09-09 22:37:21 WIB — INFO

- Cabang created: bb1984c7-cc3d-4cad-b504-2101f044dbba


### 2025-09-09 22:37:21 WIB — INFO

- Pengguna created: 5622801d-9c16-439d-808a-ceb49450a074


### 2025-09-09 22:37:22 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 22:37:22 WIB — INFO

- Pengguna deleted: 5622801d-9c16-439d-808a-ceb49450a074


### 2025-09-09 22:37:22 WIB — INFO

- Cabang deleted: bb1984c7-cc3d-4cad-b504-2101f044dbba


### 2025-09-09 22:37:22 WIB — INFO

- Kedai deleted: a08cf2dd-9a2b-467e-8e5b-5c6734538f33


### 2025-09-09 22:37:22 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:23 WIB — INFO

- Kedai created: 433aec98-4819-403d-80ed-b2f62bf12ff1


### 2025-09-09 22:37:23 WIB — INFO

- Cabang created: fc39f931-170d-45d3-b37d-cc0ac1235b54


### 2025-09-09 22:37:23 WIB — INFO

- InventarisMaster created: item-neg-1757432242957


### 2025-09-09 22:37:23 WIB — ERROR

- WHAT: Stock IN failed
- WHY: simulated db error
- HOW: Error: simulated db error |     at Function.<anonymous> (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\tests\stockTransaction_negative.test.js:34:15) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\jest-mock\build\index.js:397:39
- PLAN: retry

- DETAILS: stockIn


### 2025-09-09 22:37:23 WIB — INFO

- Cabang deleted: fc39f931-170d-45d3-b37d-cc0ac1235b54


### 2025-09-09 22:37:23 WIB — INFO

- Kedai deleted: 433aec98-4819-403d-80ed-b2f62bf12ff1


### 2025-09-09 22:37:23 WIB — INFO

- Kedai created: a5be8430-4301-479e-8d36-09eafb75666b


### 2025-09-09 22:37:23 WIB — INFO

- InventarisMaster created: item-neg2-1757432242957


### 2025-09-09 22:37:23 WIB — INFO

- Kedai deleted: a5be8430-4301-479e-8d36-09eafb75666b


### 2025-09-09 22:37:23 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:24 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 22:37:24 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 22:37:24 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:24 WIB — INFO

- Kedai created: 01332b4e-0ba1-456e-98f4-776b76e389ac


### 2025-09-09 22:37:24 WIB — INFO

- Cabang created: 8f5a82b5-feba-49a7-88fc-2fca078a0be4


### 2025-09-09 22:37:24 WIB — INFO

- InventarisMaster created: item-con-1757432244904


### 2025-09-09 22:37:25 WIB — INFO

- Stock IN processed: item-con-1757432244904@8f5a82b5-feba-49a7-88fc-2fca078a0be4 +10


### 2025-09-09 22:37:25 WIB — INFO

- Stock IN processed: item-con-1757432244904@8f5a82b5-feba-49a7-88fc-2fca078a0be4 +10


### 2025-09-09 22:37:25 WIB — INFO

- Stock IN processed: item-con-1757432244904@8f5a82b5-feba-49a7-88fc-2fca078a0be4 +10


### 2025-09-09 22:37:25 WIB — INFO

- Stock IN processed: item-con-1757432244904@8f5a82b5-feba-49a7-88fc-2fca078a0be4 +10


### 2025-09-09 22:37:25 WIB — INFO

- Stock IN processed: item-con-1757432244904@8f5a82b5-feba-49a7-88fc-2fca078a0be4 +10


### 2025-09-09 22:37:25 WIB — INFO

- Cabang deleted: 8f5a82b5-feba-49a7-88fc-2fca078a0be4


### 2025-09-09 22:37:25 WIB — INFO

- Kedai deleted: 01332b4e-0ba1-456e-98f4-776b76e389ac


### 2025-09-09 22:37:25 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:25 WIB — INFO

- Kedai created: 8732ab38-7348-49a6-bec4-3c200a2646a8


### 2025-09-09 22:37:25 WIB — INFO

- Cabang created: 9b4f3815-e500-497d-824f-ddba1357ba94


### 2025-09-09 22:37:25 WIB — INFO

- InventarisMaster created: item-hpp-1757432245928


### 2025-09-09 22:37:26 WIB — INFO

- Stock IN processed: item-hpp-1757432245928@9b4f3815-e500-497d-824f-ddba1357ba94 +10


### 2025-09-09 22:37:26 WIB — INFO

- Stock IN processed: item-hpp-1757432245928@9b4f3815-e500-497d-824f-ddba1357ba94 +5


### 2025-09-09 22:37:26 WIB — INFO

- Cabang deleted: 9b4f3815-e500-497d-824f-ddba1357ba94


### 2025-09-09 22:37:26 WIB — INFO

- Kedai deleted: 8732ab38-7348-49a6-bec4-3c200a2646a8


### 2025-09-09 22:37:26 WIB — INFO

- Kedai created: 291191fb-0162-4d99-8db7-1a9d1b328041


### 2025-09-09 22:37:26 WIB — INFO

- Cabang created: cae6bc10-0a5e-4535-a7d8-6ef93633adfb


### 2025-09-09 22:37:26 WIB — INFO

- InventarisMaster created: item-so-1757432245928


### 2025-09-09 22:37:26 WIB — INFO

- Stock IN processed: item-so-1757432245928@cae6bc10-0a5e-4535-a7d8-6ef93633adfb +20


### 2025-09-09 22:37:26 WIB — INFO

- Cabang deleted: cae6bc10-0a5e-4535-a7d8-6ef93633adfb


### 2025-09-09 22:37:26 WIB — INFO

- Kedai deleted: 291191fb-0162-4d99-8db7-1a9d1b328041


### 2025-09-09 22:37:26 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:26 WIB — INFO

- Kedai created: 781dee05-dec1-4615-8e07-d5615b104ee3


### 2025-09-09 22:37:26 WIB — INFO

- Cabang created: f50981ab-1a97-4f65-b65c-d2559d5ebb60


### 2025-09-09 22:37:26 WIB — INFO

- Pengguna created: eda7c35a-6804-48e7-938a-25b9f33a330c


### 2025-09-09 22:37:26 WIB — INFO

- Pengguna updated: eda7c35a-6804-48e7-938a-25b9f33a330c


### 2025-09-09 22:37:27 WIB — INFO

- Pengguna deleted: eda7c35a-6804-48e7-938a-25b9f33a330c


### 2025-09-09 22:37:27 WIB — INFO

- Cabang deleted: f50981ab-1a97-4f65-b65c-d2559d5ebb60


### 2025-09-09 22:37:27 WIB — INFO

- Kedai deleted: 781dee05-dec1-4615-8e07-d5615b104ee3


### 2025-09-09 22:37:27 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:27 WIB — INFO

- Kedai created: 54eeed84-2ca5-405a-b5f3-91a9dead60d4


### 2025-09-09 22:37:27 WIB — INFO

- Cabang created: b99b9b26-dcbd-42ed-abad-ca5f53ea7594


### 2025-09-09 22:37:27 WIB — INFO

- InventarisMaster created: item-1757432247698


### 2025-09-09 22:37:27 WIB — INFO

- Stock IN processed: item-1757432247698@b99b9b26-dcbd-42ed-abad-ca5f53ea7594 +10


### 2025-09-09 22:37:27 WIB — INFO

- Cabang deleted: b99b9b26-dcbd-42ed-abad-ca5f53ea7594


### 2025-09-09 22:37:27 WIB — INFO

- Kedai deleted: 54eeed84-2ca5-405a-b5f3-91a9dead60d4


### 2025-09-09 22:37:28 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:28 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 22:37:28 WIB — INFO

- Kedai created: b85c2728-dbae-4de8-a1cb-eeba4feb19a5


### 2025-09-09 22:37:29 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:37:29 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 22:38:35 WIB — INFO

- Reviewed docs/currentTask.md

- meta: {"action":"review_currentTask.md","files":["docs/currentTask.md"]}


### 2025-09-09 22:40:26 WIB — INFO

- Pushed fixes to remote

- meta: {"action":"push_fixes","commit":"5a70111fd34cdf0e947f8752927de60d062b5391","files":[".tmp_log_test_result.js","be/controllers/inventarisController.js","be/controllers/penggunaController.js","be/package.json","be/scripts/seed_undo_test_users.js","be/tests/helpers.js","docs/log_aktifitas.md"]}


### 2025-09-09 22:57:57 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:57:58 WIB — INFO

- Kedai created: 90d1d067-ebb0-4b63-bfd6-891eb49d288b


### 2025-09-09 22:57:58 WIB — INFO

- Cabang created: b5fa72f1-4ea2-40c2-99fa-e3aa9f5606e6


### 2025-09-09 22:57:58 WIB — INFO

- Pengguna created: b250426a-c0e9-4a89-88e4-59f4ad8d8a74


### 2025-09-09 22:57:58 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 22:57:58 WIB — INFO

- Pengguna deleted: b250426a-c0e9-4a89-88e4-59f4ad8d8a74


### 2025-09-09 22:57:58 WIB — INFO

- Cabang deleted: b5fa72f1-4ea2-40c2-99fa-e3aa9f5606e6


### 2025-09-09 22:57:58 WIB — INFO

- Kedai deleted: 90d1d067-ebb0-4b63-bfd6-891eb49d288b


### 2025-09-09 22:57:59 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:57:59 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 22:57:59 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 22:58:00 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:00 WIB — INFO

- Kedai created: c89e0f12-a958-4e32-a755-7353dd728d8a


### 2025-09-09 22:58:00 WIB — INFO

- Cabang created: 5333750a-f625-4822-a850-e09e34fba6fa


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — INFO

- Kedai created: 6ae769db-ad5d-47eb-87db-46370bfbb9b0


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:00 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:01 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:01 WIB — INFO

- Kedai created: c74f3d84-6f72-49af-80b8-3ba0cedeee8e


### 2025-09-09 22:58:01 WIB — INFO

- Cabang created: b4d31262-b581-4922-a57f-b563fa078ff0


### 2025-09-09 22:58:01 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:01 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:01 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:02 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:02 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:02 WIB — INFO

- Kedai created: 9a68ba72-f5eb-4cc1-99f1-86e3bcf5bc2d


### 2025-09-09 22:58:02 WIB — INFO

- Cabang created: 9c960736-f7a2-4c60-982e-05da9aaa9d8f


### 2025-09-09 22:58:02 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:02 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:03 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:03 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:03 WIB — INFO

- Kedai created: 210706fa-c344-40e5-a113-5b698aa64c34


### 2025-09-09 22:58:03 WIB — INFO

- Cabang created: 2eacb8f5-dc4e-49fa-88ec-f77f24fe5b8f


### 2025-09-09 22:58:03 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:03 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:03 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:03 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:04 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:04 WIB — INFO

- Kedai created: 8b483eed-3af4-4995-ba76-a50db21b93be


### 2025-09-09 22:58:04 WIB — INFO

- Cabang created: e90fc3ff-923e-444d-b2d5-13cf083b064f


### 2025-09-09 22:58:04 WIB — INFO

- Pengguna created: ecceafbf-e7b7-4b31-bcd8-94fb5c782a02


### 2025-09-09 22:58:04 WIB — INFO

- Pengguna updated: ecceafbf-e7b7-4b31-bcd8-94fb5c782a02


### 2025-09-09 22:58:04 WIB — INFO

- Pengguna deleted: ecceafbf-e7b7-4b31-bcd8-94fb5c782a02


### 2025-09-09 22:58:04 WIB — INFO

- Cabang deleted: e90fc3ff-923e-444d-b2d5-13cf083b064f


### 2025-09-09 22:58:04 WIB — INFO

- Kedai deleted: 8b483eed-3af4-4995-ba76-a50db21b93be


### 2025-09-09 22:58:05 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:05 WIB — INFO

- Kedai created: 498e5e28-521c-4dca-acb8-cd76146360cc


### 2025-09-09 22:58:05 WIB — INFO

- Cabang created: 7d821487-1b3d-4878-907e-cc19f2c13bc7


### 2025-09-09 22:58:05 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:05 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:05 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:05 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:05 WIB — INFO

- Cabang deleted: 7d821487-1b3d-4878-907e-cc19f2c13bc7


### 2025-09-09 22:58:05 WIB — INFO

- Kedai deleted: 498e5e28-521c-4dca-acb8-cd76146360cc


### 2025-09-09 22:58:06 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:06 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 22:58:06 WIB — INFO

- Kedai created: 3fddb04a-0321-48cc-b055-fc197f4e103b


### 2025-09-09 22:58:06 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:07 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 22:58:39 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:39 WIB — INFO

- Kedai created: bd55b66f-12d6-4e25-9c56-70929498bc49


### 2025-09-09 22:58:39 WIB — INFO

- Cabang created: 18b2898f-4866-4090-9be8-a6d821f1e4b5


### 2025-09-09 22:58:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:40 WIB — INFO

- Kedai created: 425c1820-d2ad-4499-8ace-98f3b9d49874


### 2025-09-09 22:58:40 WIB — INFO

- Cabang created: e64f01fd-93b8-4122-bd92-0a269cdddbfd


### 2025-09-09 22:58:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:41 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:41 WIB — INFO

- Kedai created: 29a3deba-103c-4a39-ab28-6b87e4904145


### 2025-09-09 22:58:41 WIB — INFO

- Cabang created: 3e17e872-227c-4d47-90e7-58307c62680d


### 2025-09-09 22:58:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:41 WIB — INFO

- Kedai created: 4239ad8b-6774-41b6-9a06-b47153842e4f


### 2025-09-09 22:58:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:42 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:42 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:42 WIB — INFO

- Kedai created: 043ab82f-f974-4759-aff2-2dfff302f156


### 2025-09-09 22:58:42 WIB — INFO

- Cabang created: 610fe2e9-2b6d-47d2-92b8-ef46b1c021df


### 2025-09-09 22:58:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:43 WIB — INFO

- Cabang deleted: 610fe2e9-2b6d-47d2-92b8-ef46b1c021df


### 2025-09-09 22:58:43 WIB — INFO

- Kedai deleted: 043ab82f-f974-4759-aff2-2dfff302f156


### 2025-09-09 22:58:44 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:44 WIB — INFO

- Kedai created: 790042fe-2e7a-4ad9-8649-583bfcf01cf2


### 2025-09-09 22:58:44 WIB — INFO

- Cabang created: 8da82f36-f36e-428e-998f-97e2045dd0af


### 2025-09-09 22:58:44 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:44 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:44 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:44 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:58:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:45 WIB — INFO

- Kedai created: 140e3719-a900-4746-8b1f-257ac8f719ee


### 2025-09-09 22:58:45 WIB — INFO

- Cabang created: 702a5760-6c18-4c7c-b78c-924d8e5682f5


### 2025-09-09 22:58:45 WIB — INFO

- Pengguna created: 7a65ccdb-5fc6-46af-8355-ec234c0a2493


### 2025-09-09 22:58:45 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 22:58:45 WIB — INFO

- Pengguna deleted: 7a65ccdb-5fc6-46af-8355-ec234c0a2493


### 2025-09-09 22:58:45 WIB — INFO

- Cabang deleted: 702a5760-6c18-4c7c-b78c-924d8e5682f5


### 2025-09-09 22:58:45 WIB — INFO

- Kedai deleted: 140e3719-a900-4746-8b1f-257ac8f719ee


### 2025-09-09 22:58:46 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:46 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 22:58:46 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 22:58:47 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:47 WIB — INFO

- Kedai created: a704c420-7669-47ed-a28a-1d98084dbba3


### 2025-09-09 22:58:47 WIB — INFO

- Cabang created: 266a65b0-d804-46b0-82fc-2fbbb12f5ffd


### 2025-09-09 22:58:47 WIB — INFO

- Pengguna created: 2b1a3f0d-cd65-4e9e-a3fd-9546ab041180


### 2025-09-09 22:58:47 WIB — INFO

- Pengguna updated: 2b1a3f0d-cd65-4e9e-a3fd-9546ab041180


### 2025-09-09 22:58:47 WIB — INFO

- Pengguna deleted: 2b1a3f0d-cd65-4e9e-a3fd-9546ab041180


### 2025-09-09 22:58:47 WIB — INFO

- Cabang deleted: 266a65b0-d804-46b0-82fc-2fbbb12f5ffd


### 2025-09-09 22:58:47 WIB — INFO

- Kedai deleted: a704c420-7669-47ed-a28a-1d98084dbba3


### 2025-09-09 22:58:47 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:48 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 22:58:48 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:58:48 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 22:58:48 WIB — INFO

- Kedai created: eb7c308b-f777-490f-8d4b-389b63c3ddba


### 2025-09-09 22:59:38 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:38 WIB — INFO

- Kedai created: 3c9a7242-dcf2-4481-b249-22df3f28e895


### 2025-09-09 22:59:38 WIB — INFO

- Cabang created: 5c9dafad-4cb7-438a-af40-8ea32d69eebf


### 2025-09-09 22:59:38 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — INFO

- Kedai created: 58467279-6d26-4dda-9aa3-7138c5f2d23f


### 2025-09-09 22:59:39 WIB — INFO

- Cabang created: 6ce5d83d-27b6-4f36-907d-0eef92a2ec21


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:39 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:40 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:40 WIB — INFO

- Kedai created: c0574ae8-4a02-4708-8a0b-8b804bd800fc


### 2025-09-09 22:59:40 WIB — INFO

- Cabang created: 448a341f-6543-413f-bba2-7d978d78bf1e


### 2025-09-09 22:59:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:40 WIB — INFO

- Kedai created: 5f549269-d831-48e0-84c5-28e5982b25d4


### 2025-09-09 22:59:40 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:41 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:42 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:42 WIB — INFO

- Kedai created: 36637d8a-63b6-423e-8799-5b1b2988b948


### 2025-09-09 22:59:42 WIB — INFO

- Cabang created: aeea1468-d4dc-4d98-af25-ddef9c14f2aa


### 2025-09-09 22:59:42 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:42 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:42 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:42 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:42 WIB — INFO

- Cabang deleted: aeea1468-d4dc-4d98-af25-ddef9c14f2aa


### 2025-09-09 22:59:42 WIB — INFO

- Kedai deleted: 36637d8a-63b6-423e-8799-5b1b2988b948


### 2025-09-09 22:59:43 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:43 WIB — INFO

- Kedai created: a19c912a-17d8-4c3e-a401-ed2d8209d575


### 2025-09-09 22:59:43 WIB — INFO

- Cabang created: a0e4bea0-6cbf-4056-a701-5ab7ea302cc4


### 2025-09-09 22:59:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:43 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 22:59:44 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:44 WIB — INFO

- Kedai created: ef67fafe-20a7-4de3-ace7-948ee5e26dd1


### 2025-09-09 22:59:44 WIB — INFO

- Cabang created: a4d9406b-2939-4454-a620-14247ebbc671


### 2025-09-09 22:59:44 WIB — INFO

- Pengguna created: b47d0806-dd02-4da5-a867-650e175f3952


### 2025-09-09 22:59:44 WIB — ERROR

- WHAT: Pengguna create failed
- WHY: Validation error
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: TBD

- DETAILS: createPengguna


### 2025-09-09 22:59:44 WIB — INFO

- Pengguna deleted: b47d0806-dd02-4da5-a867-650e175f3952


### 2025-09-09 22:59:44 WIB — INFO

- Cabang deleted: a4d9406b-2939-4454-a620-14247ebbc671


### 2025-09-09 22:59:44 WIB — INFO

- Kedai deleted: ef67fafe-20a7-4de3-ace7-948ee5e26dd1


### 2025-09-09 22:59:45 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:45 WIB — INFO

- Auth: register failed Validation error


### 2025-09-09 22:59:45 WIB — INFO

- Auth: login testuser+ci@test.local


### 2025-09-09 22:59:46 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:46 WIB — INFO

- Kedai created: 1688c029-c090-4301-802d-a9f786b64c87


### 2025-09-09 22:59:46 WIB — INFO

- Cabang created: 91d7d900-5c6f-44ff-bb5b-b65b56d2c41c


### 2025-09-09 22:59:46 WIB — INFO

- Pengguna created: 9f317230-fac3-424b-88c8-a6d4ccfb57d8


### 2025-09-09 22:59:46 WIB — INFO

- Pengguna updated: 9f317230-fac3-424b-88c8-a6d4ccfb57d8


### 2025-09-09 22:59:46 WIB — INFO

- Pengguna deleted: 9f317230-fac3-424b-88c8-a6d4ccfb57d8


### 2025-09-09 22:59:46 WIB — INFO

- Cabang deleted: 91d7d900-5c6f-44ff-bb5b-b65b56d2c41c


### 2025-09-09 22:59:46 WIB — INFO

- Kedai deleted: 1688c029-c090-4301-802d-a9f786b64c87


### 2025-09-09 22:59:47 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:47 WIB — ERROR

- WHAT: Auth: missing token
- WHY: No token provided
- HOW: Error: No token provided |     at verifyToken (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\verifyToken.js:10:14) |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: provide Authorization header

- DETAILS: verifyToken


### 2025-09-09 22:59:48 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 22:59:48 WIB — ERROR

- WHAT: RBAC: forbidden
- WHY: Forbidden: insufficient role
- HOW: Error: Forbidden: insufficient role |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\middleware\requireRole.js:10:21 |     at Layer.handle [as handle_request] (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\express\lib\router\layer.js:95:5)
- PLAN: allowed: Pemilik

- DETAILS: requireRole


### 2025-09-09 22:59:48 WIB — INFO

- Kedai created: 0acaef07-f589-4f9d-8ced-a335b23f5740


### 2025-09-09 23:02:33 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 23:02:34 WIB — INFO

- Kedai created: 0d800573-fbc6-49eb-8703-b66b9bb779bd


### 2025-09-09 23:02:34 WIB — INFO

- Cabang created: 50a2847d-9de3-4a99-98c3-80ac129ed213


### 2025-09-09 23:02:34 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:02:34 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:02:34 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:02:34 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:02:34 WIB — INFO

- Cabang deleted: 50a2847d-9de3-4a99-98c3-80ac129ed213


### 2025-09-09 23:02:34 WIB — INFO

- Kedai deleted: 0d800573-fbc6-49eb-8703-b66b9bb779bd


### 2025-09-09 23:04:22 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 23:04:22 WIB — INFO

- Kedai created: ee48d898-e66e-40a2-bb86-feeea07b0453


### 2025-09-09 23:04:22 WIB — INFO

- Cabang created: bc745513-5257-43e9-bb7e-7f5af02cfc28


### 2025-09-09 23:04:23 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:04:23 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:04:23 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:04:23 WIB — ERROR

- WHAT: Inventaris create failed
- WHY: Unknown column 'dibuat_pada' in 'field list'
- HOW: Error:  |     at Query.run (F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\dialects\mysql\query.js:46:25) |     at F:\MIIT2024\PROJECTS\eezeeKedai_t2\be\node_modules\sequelize\src\sequelize.js:650:28
- PLAN: inspect payload / constraints

- DETAILS: createInventaris


### 2025-09-09 23:04:23 WIB — INFO

- Cabang deleted: bc745513-5257-43e9-bb7e-7f5af02cfc28


### 2025-09-09 23:04:23 WIB — INFO

- Kedai deleted: ee48d898-e66e-40a2-bb86-feeea07b0453


### 2025-09-09 23:05:51 WIB — INFO

- Server started at http://192.168.1.188:5151


### 2025-09-09 23:05:51 WIB — INFO

- Kedai created: 4d024cd6-6f0a-4d3a-ab42-9eac3c2b7889


### 2025-09-09 23:05:51 WIB — INFO

- Cabang created: b93d3515-57ed-4183-a5d0-85e2f790ac12


### 2025-09-09 23:05:51 WIB — INFO

- InventarisMaster created: item-1757433951804


### 2025-09-09 23:05:51 WIB — INFO

- Stock IN processed: item-1757433951804@b93d3515-57ed-4183-a5d0-85e2f790ac12 +10


### 2025-09-09 23:05:52 WIB — INFO

- Cabang deleted: b93d3515-57ed-4183-a5d0-85e2f790ac12


### 2025-09-09 23:05:52 WIB — INFO

- Kedai deleted: 4d024cd6-6f0a-4d3a-ab42-9eac3c2b7889


### 2025-09-09 23:32:12 WIB — INFO

- Added migration idempotent guide and example template; pushed directly to main

- meta: {"action":"docs:add-migration-guidelines","files":["docs/migration-idempotent.md","be/migrations/20250911-template-add-column-idempotent.js"]}


### 2025-09-09 23:33:56 WIB — INFO

- Scanned migrations for risky DDL operations; only found add/remove column migration (already fixed) and template

- meta: {"action":"scan:migrations","files":["be/migrations/*"]}


### 2025-09-09 23:36:00 WIB — INFO

- Added idempotent change/rename migration docs and template; pushed to main

- meta: {"action":"docs:add-change-rename-templates","files":["docs/migration-idempotent.md","be/migrations/20250912-template-change-rename-idempotent.js"]}


### 2025-09-09 23:37:58 WIB — INFO

- Added migration linter and CI workflow step; lint passes locally and changes pushed to main

- meta: {"action":"ci:add-migration-linter","files":["be/scripts/lint_migrations.js","be/package.json",".github/workflows/ci.yml"]}


### 2025-09-09 23:41:43 WIB — INFO

- Made migration templates tolerant (try/catch) and pushed to main; lint passes locally

- meta: {"action":"docs:fix-templates-trycatch","files":["be/migrations/20250911-template-add-column-idempotent.js","be/migrations/20250912-template-change-rename-idempotent.js"]}

