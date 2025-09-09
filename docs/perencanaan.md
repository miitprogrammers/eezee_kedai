# Perencanaan Pengembangan Eezee Kedai

Ringkasan singkat:
Proyek Eezee Kedai adalah web app PWA untuk manajemen kedai multi-tenant dan multi-cabang. Backend Node.js + MySQL; Frontend Vue.js + Vuetify (PWA). Fokus pada performa untuk perangkat low-end dan integritas data lewat transaksi database.

1. Kontrak singkat (Inputs / Outputs / Error modes / Success criteria)
- Inputs: request HTTP JSON (auth token, payload sesuai endpoint).
- Outputs: JSON responses dengan kode status (200/201/4xx/5xx) dan body terstruktur.
- Error modes: validasi input gagal, auth gagal, konflik data, kegagalan DB/transaction.
- Success criteria: endpoint mengembalikan status yang tepat dan state DB konsisten (DB transactions untuk alur kritis seperti transaksi penjualan).

2. Asumsi penting
- ORM yang dipilih: Sequelize (asumsi berdasarkan preferensi Node.js + MySQL dan struktur OOP di spesifikasi).
- Semua ID menggunakan UUID (VARCHAR(36)).
- Lingkungan dev: Node.js >= 16, MySQL 8.

3. Milestones tingkat tinggi
- M1: Setup proyek & CI dasar — inisialisasi repo backend, package.json, env example, koneksi DB, script migrasi awal.
- M2: Auth & multi-tenant dasar — register, login, model Kedai/Cabang/Pengguna, JWT middleware.
- M3: Inventaris & Menu — model InventarisMaster, StokSaatIni, Menu, Resep, API CRUD.
- M4: Kasir & Transaksi — endpoint transaksi (atomic), detail transaksi, histori inventaris, perhitungan HPP.
- M5: Laporan & job terjadwal — ringkasan harian, node-cron job, endpoint laporan.
- M6: Frontend PWA minimal — Vuetify scaffold, auth flow, halaman kasir, halaman menu, offline caching dasar.
- M7: Testing & QA — unit (Jest), integration (Supertest), e2e (Playwright/Cypress), linting, security checks.
- M8: Deployment & monitoring — build PWA, staging deployment, backup DB, monitoring sederhana.

4. Roadmap sprint (usulan cepat)
- Sprint 0 (1w): Repo + env + DB schema + README
- Sprint 1 (2w): Auth, models utama (Kedai, Cabang, Pengguna), migrations
- Sprint 2 (2w): CRUD Menu & InventarisMaster + StokSaatIni
- Sprint 3 (2w): Transaksi atomic + HistoriInventaris + testing unit dasar
- Sprint 4 (2w): Laporan harian & cron job
- Sprint 5 (2w): Frontend PWA scaffold + halaman kasir minimal
- Sprint 6 (2w): Polishing, tests, CI

5. Arsitektur singkat
- Backend: Node.js + Express, Sequelize sebagai ORM, pattern Controller-Service-Model.
- DB: MySQL, UUID PK, gunakan transaction untuk alur kritis.
- Auth: JWT dengan expiry; refresh token opsional di sprint berikutnya.
- Frontend: Vue 3 + Vuetify, Pinia untuk state management, PWA manifest + service worker.

6. Strategi pengembangan berorientasi kualitas
- Tulis unit test untuk service dan util (Jest).
- Gunakan integration test untuk endpoint penting (Supertest).
- Setiap PR harus lulus linting, unit tests, dan integrasi dasar.

7. Risiko & mitigasi
- Risiko: Inkonsistensi stok saat concurrent checkout. Mitigasi: gunakan DB transaction dan row-level locks (SELECT ... FOR UPDATE) saat mengurangi stok.
- Risiko: Performa pada device low-end. Mitigasi: minimalisasi payload API, aktifkan caching, dan buat frontend ringan.
- Risiko: Konflik multi-cabang. Mitigasi: sertakan kedai_id dan cabang_id di setiap query kritis.

8. Edge cases
- Transaksi dengan bahan resep yang stoknya tidak mencukupi.
- Perubahan resep setelah menu dijual (hingga HPP harus dihitung berdasarkan snapshot harga saat transaksi).
- Pengguna dengan hak akses berubah saat transaksi sedang berlangsung.

9. Kriteria 'done' untuk milestone utama
- API dan model dibuat + dokumentasi minimal (@route, @desc, @access).
- Transaksi penjualan dapat diproses end-to-end di lingkungan dev tanpa kesalahan integritas.
- Test coverage untuk service kritis >= 70% (target awal).

10. Next immediate actions (ini yang akan dikerjakan selanjutnya)
- Buat file `docs/to_do.md` dengan daftar tugas terinci.
- Siapkan migration SQL awal (db_scheme.sql sudah ada; koneksikan ke flow migrasi).

---
Dokumen ini adalah rencana awal; sesuaikan estimasi sprint berdasarkan kapasitas tim.
