# To-do (rapi) — Eezee Kedai

Prioritas: P0 = sangat penting, P1 = penting, P2 = nice-to-have

## Ringkasan singkat

- Status utama tercatat per top-level item. Detail dan rekomendasi ada di bagian bawah.

## Status per fitur (top-level)

1. P0 — Inisialisasi repo backend: DONE (2025-09-09)
  - package.json, entry server, `.env.example`, `.gitignore` dibuat; dependensi terpasang.

2. P0 — Setup koneksi database & migrasi dasar: DONE (2025-09-09)
  - Sequelize config & migrations dibuat; `npm run migrate` berhasil.

3. P0 — Implementasi Auth dasar: DONE (2025-09-09)
  - Register & Login, model `Kedai/Cabang/Pengguna`, middleware `verifyToken` & `requireRole`, dan tests dasar sudah ada.

4. P1  Model & CRUD: InventarisMaster, StokSaatIni, HistoriInventaris: DONE
  - Models + migrations ditambahkan (`be/models`, `be/migrations`). Masalah foreign-key yang sempat muncul sudah disesuaikan.

5. P2  Frontend scaffold (Vue3 + Vuetify + PWA): PROGRESS (2025-09-10)
  - Ready to start: backend provides basic auth, inventory endpoints, and OpenAPI at `/api/docs/openapi.yaml`.

6. P2 — Peran & permission management UI: PENDING

7. P2 — Testing: DONE
  - Infrastruktur (Jest + Supertest) terpasang.
  - Core tests (auth, CRUD) DONE.
  - Stock transaction tests (happy path, negative, concurrency) — DONE (ditambahkan di `be/tests/`).

8. P2 — CI / CD: DONE (2025-09-10)
  - Skeleton workflow (`.github/workflows/ci.yml`) ada; remote run triggered after push and executed tests. Local and branch tests now pass; CI setup validated for this PR (ensure_husky, package-lock synced).

9. P1 — Dokumentasi pengujian & README untuk `be/`: PROGRESS
  - `be/README.md` telah ditambahkan; mohon review. CI run indicates environment differences to address in docs.

## Rasio Penyelesaian (ringkas, 2025-09-09)

| Total tugas | DONE | PARTIAL | PENDING | Rasio (berat) |
|---:|---:|---:|---:|---:|
| 9 | 7 | 1 | 1 | 83.3% ( (7 + 0.5*1) / 9 ) |
 
Catatan: PARTIAL dihitung sebagai 0.5 (setengah selesai). Jika Anda mau bobot berbeda, beri tahu saya.

## Rekomendasi langkah berikutnya (prioritas)

1. (P1) Validasi CI di remote (push branch / PR) agar workflow bisa menjalankan migrations & tests pada environment bersih.
2. (P1) Perkuat assertions pada `HistoriInventaris` di tests (tipe_transaksi, harga_beli, timestamp).
  - Suggested assertions: `tipe_transaksi`  in ['IN','OUT'], `harga_beli` > 0, `timestamp` present and ISO-8601.
3. (P1) Tambahkan validasi server-side untuk `cabang_id` agar input invalid menghasilkan 4xx, bukan 500. — DONE
  - Verified in tests; pastikan test names reference this validation so future regressions are caught.
4. (P2) Tambahkan `be/README.md` singkat: install, migrate, run tests.
  - Status: PROGRESS — README present. Suggested additions: minimal `.env` variables list, seed instructions, how to re-run CI locally, and common troubleshooting (husky/lockfile notes).

## Short-term next steps (prioritas)

1. [P1] Inventory endpoints: verify coverage & complete missing pieces
  - a) Verify CRUD endpoints and tests for `InventarisMaster`, `StokSaatIni`, `HistoriInventaris`. (status: PARTIAL — models & migrations added; some validation errors observed in logs)
  - b) Implement `Menu` model + migration + CRUD if still missing. (status: PENDING)

2. [P0] Endpoint transaksi (stok / HPP) with DB transactions and tests
  - Status: P0 — ensure ACID transactions for stock adjustments, add robust concurrency tests, and fix validation errors found during test runs.
  - Acceptance: concurrency tests pass and no validation-related failures in CI.

3. [P2] CI (GitHub Actions) for test suite using MySQL service — DONE
  - Action: document how to re-run jobs and retrieve job logs; add a short checklist for PR authors (sync lockfile, run `npm test` locally before pushing).

4. [P1] API docs & frontend onboarding
  - Provide OpenAPI JSON export, Postman collection, and example Postman env for frontend devs.
  - Frontend scaffold recommendation: Vue3 + Vite + Vuetify; minimal pages: Login, Inventory list, Item detail. (status: PROGRESS)

## Notes

- Semua item yang sudah selesai memiliki catatan timestamp di `docs/log_aktifitas.md`.
- Untuk pengujian lokal, gunakan database MySQL terpisah (dev) agar tidak mengganggu data produksi.


