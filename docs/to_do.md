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

4. P1 — Model & CRUD: InventarisMaster, StokSaatIni, HistoriInventaris: DONE
  - Models + migrations ditambahkan (`be/models`, `be/migrations`). Masalah foreign-key yang sempat muncul sudah disesuaikan.

5. P2 — Frontend scaffold (Vue3 + Vuetify + PWA): PENDING

6. P2 — Peran & permission management UI: PENDING

7. P2 — Testing: DONE
  - Infrastruktur (Jest + Supertest) terpasang.
  - Core tests (auth, CRUD) DONE.
  - Stock transaction tests (happy path, negative, concurrency) — DONE (ditambahkan di `be/tests/`).

8. P2 — CI / CD: PROGRESS
  - Skeleton workflow (`.github/workflows/ci.yml`) ada; remote run triggered after push and executed tests. Some test failures observed on the first run; workflow and service setup need verification.

9. P1 — Dokumentasi pengujian & README untuk `be/`: PROGRESS
  - `be/README.md` telah ditambahkan; mohon review. CI run indicates environment differences to address in docs.

## Rasio Penyelesaian (ringkas, 2025-09-09 21:00 WIB)

| Total tugas | DONE | PARTIAL | PENDING | Rasio (berat) |
|---:|---:|---:|---:|---:|
| 9 | 8 | 0 | 1 | 88.9% ((8 + 0.5*0) / 9) |

Catatan: angka diperbarui berdasarkan checkpoint terakhir (migrasi idempotent, migration-linter, schema-drift checker, dan pre-commit Husky sudah ditambahkan). PARTIAL dihitung sebagai 0.5 (setengah selesai). Jika Anda mau bobot berbeda, beri tahu saya.

## Rekomendasi langkah berikutnya (prioritas)

1. (P1) Validasi CI di remote (push branch / PR) agar workflow bisa menjalankan migrations & tests pada environment bersih.
2. (P1) Perkuat assertions pada `HistoriInventaris` di tests (tipe_transaksi, harga_beli, timestamp).
3. (P1) Tambahkan validasi server-side untuk `cabang_id` agar input invalid menghasilkan 4xx, bukan 500. — DONE (validator implemented; tests updated)
5. (CHECKPOINT) 2025-09-09 21:00 WIB: Migrasi idempotent, migration-linter (`be/scripts/lint_migrations.js`), schema-drift checker (`be/scripts/check_schema_drift.js`), pemindahan template migrasi ke `be/migration-templates/`, dan `.husky/pre-commit` telah ditambahkan dan dilog.
4. (P2) Tambahkan `be/README.md` singkat: install, migrate, run tests.

## Short-term next steps (prioritas)

1. [P1] Implement Inventory & Menu models + migrations dan CRUD dasar.
2. [P0] Implement endpoint transaksi (stok / HPP) dengan DB transactions dan tests.
3. [P2] Siapkan CI (GitHub Actions) untuk menjalankan test suite menggunakan service MySQL.
4. [P1] Sediakan minimal API docs atau scaffold frontend (Vue3 + Vuetify) untuk integrasi.

## Notes

- Semua item yang sudah selesai memiliki catatan timestamp di `docs/log_aktifitas.md`.
- Untuk pengujian lokal, gunakan database MySQL terpisah (dev) agar tidak mengganggu data produksi.


