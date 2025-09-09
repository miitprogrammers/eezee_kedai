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

Developer setup (Husky):

Jika tim ingin mengaktifkan pre-commit hook lokal yang menjalankan lint migrations, jalankan di folder `be`:

```bash
npm ci
npm run prepare # installs husky hooks (one-time per machine)
```

Setelah itu, pre-commit akan menjalankan `npm run lint:migrations` sebelum commit.

Contoh idempotent untuk operasi `changeColumn` dan `renameColumn`

1) changeColumn (ubah tipe/atribut kolom) — idempotent pattern:

```javascript
// up
const table = await queryInterface.describeTable('MyTable');
if (table && table.some_column) {
   // optionally check current type/allowNull/defaultValue before applying
   await queryInterface.changeColumn('MyTable', 'some_column', {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
   });
}

// down
const tableDown = await queryInterface.describeTable('MyTable');
if (tableDown && tableDown.some_column) {
   await queryInterface.changeColumn('MyTable', 'some_column', {
      type: Sequelize.STRING(255),
      allowNull: true,
   });
}
```

Notes: untuk `changeColumn` Anda bisa menambahkan pemeriksaan ringan (mis. current type ada di `table.some_column.type`) sebelum memanggil `changeColumn` agar tidak melakukan perubahan yang tidak perlu.

2) renameColumn (ganti nama kolom) — idempotent pattern:

```javascript
// up: rename old_column -> new_column jika kondisi terpenuhi
const tableUp = await queryInterface.describeTable('MyTable');
if (tableUp && tableUp.old_column && !tableUp.new_column) {
   await queryInterface.renameColumn('MyTable', 'old_column', 'new_column');
}

// down: kembalikan jika perlu
const tableDown2 = await queryInterface.describeTable('MyTable');
if (tableDown2 && tableDown2.new_column && !tableDown2.old_column) {
   await queryInterface.renameColumn('MyTable', 'new_column', 'old_column');
}
```

Dengan pola ini, migrasi aman dijalankan ulang dan tidak menyebabkan error `Duplicate column` atau `column not found` ketika DB sudah berada pada state berbeda.
