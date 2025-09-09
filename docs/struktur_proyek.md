# Struktur Proyek Backend Eezee Kedai

```
eezee-kedai-backend/
├── config/ # Pengaturan konfigurasi aplikasi
│   ├── database.js # Konfigurasi koneksi ke database MySQL
│   ├── constants.js # Variabel konstan, seperti role, nama, dsb
│   └── index.js # Mengelola konfigurasi dari file-file di dalamnya
├── controllers/ # Menangani permintaan HTTP (req, res)
│   ├── authController.js # Logika untuk login & registrasi
│   ├── cabangController.js # Logika untuk manajemen cabang
│   ├── kedaiController.js # Logika untuk manajemen kedai
│   ├── laporanController.js # Logika untuk laporan & ringkasan
│   ├── langgananController.js # Logika untuk manajemen langganan
│   ├── menuController.js # Logika untuk manajemen menu & resep
│   ├── penggunaController.js # Logika untuk manajemen pengguna & peran
│   └── transaksiController.js # Logika untuk transaksi & stok
├── models/ # Representasi tabel database (Object-Oriented)
│   ├── Cabang.js
│   ├── DetailTransaksi.js
│   ├── HakPeran.js
│   ├── HistoriInventaris.js
│   ├── InventarisMaster.js
│   ├── Kedai.js
│   ├── LanggananKedai.js
│   ├── Menu.js
│   ├── Pengguna.js
│   ├── Resep.js
│   ├── RingkasanHarian.js
│   ├── StokSaatIni.js
│   └── Transaksi.js
├── middlewares/ # Fungsi yang berjalan di antara req & res
│   ├── authMiddleware.js # Verifikasi JWT token
│   ├── permissionMiddleware.js # Cek hak akses & peran
│   └── errorHandler.js # Middleware untuk menangani error
├── routes/ # Mengelola endpoint API
│   ├── api/ # Endpoint utama
│   │   ├── authRoutes.js
│   │   ├── cabangRoutes.js
│   │   ├── kedaiRoutes.js
│   │   ├── laporanRoutes.js
│   │   ├── langgananRoutes.js
│   │   ├── menuRoutes.js
│   │   ├── penggunaRoutes.js
│   │   └── transaksiRoutes.js
│   └── index.js # Mengelola semua rute API
├── services/ # Logika bisnis yang kompleks, dipisahkan dari controller
│   ├── authService.js
│   ├── transaksiService.js
│   ├── laporanService.js
│   └── ... # Service untuk fitur lain
├── utils/ # Fungsi-fungsi bantu
│   ├── passwordUtils.js # Hashing password dengan bcrypt
│   ├── tokenUtils.js # Fungsi untuk JWT
│   └── databaseUtils.js # Fungsi bantu terkait database
├── .env.example # Contoh file variabel lingkungan
├── .env # Variabel lingkungan aktual
├── .gitignore # File yang diabaikan oleh Git
├── package.json # Dependensi proyek & skrip
├── server.js # Entry point aplikasi utama
└── README.md # Dokumentasi proyek
```
