# Pedoman: Menulis Migration Idempotent

Tujuan: mencegah kegagalan CI karena migration mencoba menambah kolom yang sudah ada (Duplicate column) atau menghapus kolom yang tidak ada.

Prinsip singkat
- Selalu cek keadaan tabel sebelum melakukan DDL yang tidak idempotent seperti `addColumn`, `removeColumn`, `changeColumn`.
- Gunakan `queryInterface.describeTable('TableName')` untuk mengetahui daftar kolom yang ada.
- Jika memungkinkan, gunakan `createTable`/`dropTable` saja untuk migrasi awal; perubahan kolom gunakan pattern idempotent.

Pattern umum (idempotent addColumn)

1. Di `up()`:
   - panggil `const table = await queryInterface.describeTable('TableName')`
   - bila `!table || !table.my_column` => `await queryInterface.addColumn(...)`
   - else no-op
2. Di `down()`:
   - cek bila `table && table.my_column` => `await queryInterface.removeColumn(...)`

Contoh ringkas ada di `be/migrations/20250911-template-add-column-idempotent.js`.

Checklist review sebelum commit migration baru
- [ ] Apakah migration akan dijalankan di environment yang bersih? (dev/test/CI)
- [ ] Apakah migration menambah kolom yang juga didefinisikan langsung di migration `createTable` lain? (hindari duplikasi)
- [ ] Tambahkan test manual singkat di dev DB: `npx sequelize-cli db:migrate --env test` dan `npx sequelize-cli db:migrate:undo --env test`.

Catatan: file ini adalah panduan minimal. Terapkan pattern serupa untuk `removeColumn`, `changeColumn`, `renameColumn` bila diperlukan.
