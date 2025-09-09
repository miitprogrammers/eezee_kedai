--
-- FILE: database_schema.sql
-- DESKRIPSI: Skrip SQL ini membuat semua tabel untuk aplikasi Eezee Kedai,
--            sesuai dengan skema yang telah didokumentasikan.
--            Pastikan Anda memiliki hak akses yang memadai untuk membuat tabel.
--

-- Buat database jika belum ada dan gunakan
CREATE DATABASE IF NOT EXISTS `eezee_kedai`;

USE `eezee_kedai`;

-- Nonaktifkan pemeriksaan kunci asing sementara untuk menghindari masalah urutan pembuatan tabel
SET foreign_key_checks = 0;

-- -----------------------------------------------------------------------------
-- Tabel `Kedai`
-- Deskripsi: Menyimpan informasi dasar tentang setiap kedai.
-- -----------------------------------------------------------------------------
CREATE TABLE Kedai (
    kedai_id VARCHAR(36) NOT NULL PRIMARY KEY,
    nama_kedai VARCHAR(255) NOT NULL,
    alamat VARCHAR(500),
    deskripsi TEXT,
    is_aktif BOOLEAN DEFAULT TRUE,
    dibuat_pada DATETIME NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `LanggananKedai`
-- Deskripsi: Mencatat status langganan per kedai.
-- -----------------------------------------------------------------------------
CREATE TABLE LanggananKedai (
    langganan_id VARCHAR(36) NOT NULL PRIMARY KEY,
    kedai_id VARCHAR(36) NOT NULL,
    tipe_langganan ENUM('Basic', 'Pro') NOT NULL,
    tanggal_mulai DATETIME NOT NULL,
    tanggal_berakhir DATETIME NOT NULL,
    status_langganan ENUM('Aktif', 'Kadaluarsa') NOT NULL,
    dibuat_pada DATETIME NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `Cabang`
-- Deskripsi: Menyimpan daftar cabang untuk setiap kedai.
-- -----------------------------------------------------------------------------
CREATE TABLE Cabang (
    cabang_id VARCHAR(36) NOT NULL PRIMARY KEY,
    nama_cabang VARCHAR(255) NOT NULL,
    alamat VARCHAR(500),
    kedai_id VARCHAR(36) NOT NULL,
    is_utama BOOLEAN DEFAULT FALSE,
    is_aktif BOOLEAN DEFAULT TRUE,
    dibuat_pada DATETIME NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `hakPeran`
-- Deskripsi: Menyimpan hak akses dalam format JSON untuk setiap peran.
-- -----------------------------------------------------------------------------
CREATE TABLE hakPeran (
    peran_id VARCHAR(36) NOT NULL PRIMARY KEY,
    nama_peran ENUM('Pemilik', 'Manajer', 'Kasir') NOT NULL UNIQUE,
    hak_akses JSON NOT NULL,
    is_default BOOLEAN DEFAULT TRUE
);

-- -----------------------------------------------------------------------------
-- Tabel `Pengguna`
-- Deskripsi: Menyimpan data pengguna, terhubung ke kedai dan cabang.
-- -----------------------------------------------------------------------------
CREATE TABLE Pengguna (
    user_id VARCHAR(36) NOT NULL PRIMARY KEY,
    nama_lengkap VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    peran ENUM('Pemilik', 'Manajer', 'Kasir') NOT NULL,
    kedai_id VARCHAR(36) NOT NULL,
    cabang_id VARCHAR(36) NOT NULL,
    dibuat_pada DATETIME NOT NULL,
    terakhir_login DATETIME
);

-- -----------------------------------------------------------------------------
-- Tabel `InventarisMaster`
-- Deskripsi: Master bahan baku di level kedai.
-- -----------------------------------------------------------------------------
CREATE TABLE InventarisMaster (
    item_id VARCHAR(36) NOT NULL PRIMARY KEY,
    nama_item VARCHAR(255) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    kedai_id VARCHAR(36) NOT NULL,
    is_aktif BOOLEAN DEFAULT TRUE
);

-- -----------------------------------------------------------------------------
-- Tabel `HistoriInventaris`
-- Deskripsi: Log pergerakan stok per cabang.
-- -----------------------------------------------------------------------------
CREATE TABLE HistoriInventaris (
    log_id VARCHAR(36) NOT NULL PRIMARY KEY,
    tanggal DATETIME NOT NULL,
    item_id VARCHAR(36) NOT NULL,
    jumlah INT NOT NULL,
    harga_beli DECIMAL(10, 2) NOT NULL,
    cabang_id VARCHAR(36) NOT NULL,
    kedai_id VARCHAR(36) NOT NULL,
    tipe_transaksi ENUM('Pembelian', 'Penjualan') NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `StokSaatIni`
-- Deskripsi: Stok terkini per cabang untuk performa yang lebih baik.
-- -----------------------------------------------------------------------------
CREATE TABLE StokSaatIni (
    stok_id VARCHAR(36) NOT NULL PRIMARY KEY,
    item_id VARCHAR(36) NOT NULL,
    cabang_id VARCHAR(36) NOT NULL,
    stok_saat_ini INT NOT NULL,
    harga_rata_rata DECIMAL(10, 2) NOT NULL,
    terakhir_diperbarui DATETIME NOT NULL,
    UNIQUE (item_id, cabang_id)
);

-- -----------------------------------------------------------------------------
-- Tabel `Menu`
-- Deskripsi: Daftar menu yang dijual oleh kedai.
-- -----------------------------------------------------------------------------
CREATE TABLE Menu (
    menu_id VARCHAR(36) NOT NULL PRIMARY KEY,
    nama_menu VARCHAR(255) NOT NULL,
    harga_jual DECIMAL(10, 2) NOT NULL,
    deskripsi TEXT,
    kedai_id VARCHAR(36) NOT NULL,
    is_aktif BOOLEAN DEFAULT TRUE,
    dibuat_pada DATETIME NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `Resep`
-- Deskripsi: Menghubungkan menu dengan bahan baku inventaris.
-- -----------------------------------------------------------------------------
CREATE TABLE Resep (
    resep_id VARCHAR(36) NOT NULL PRIMARY KEY,
    menu_id VARCHAR(36) NOT NULL,
    item_id VARCHAR(36) NOT NULL,
    jumlah_pemakaian FLOAT NOT NULL,
    kedai_id VARCHAR(36) NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `Transaksi`
-- Deskripsi: Menyimpan ringkasan setiap transaksi penjualan.
-- -----------------------------------------------------------------------------
CREATE TABLE Transaksi (
    transaksi_id VARCHAR(36) NOT NULL PRIMARY KEY,
    tanggal DATETIME NOT NULL,
    total_harga DECIMAL(10, 2) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    kedai_id VARCHAR(36) NOT NULL,
    cabang_id VARCHAR(36) NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `DetailTransaksi`
-- Deskripsi: Menyimpan detail item yang dibeli dalam sebuah transaksi.
-- -----------------------------------------------------------------------------
CREATE TABLE DetailTransaksi (
    detail_id VARCHAR(36) NOT NULL PRIMARY KEY,
    transaksi_id VARCHAR(36) NOT NULL,
    menu_id VARCHAR(36) NOT NULL,
    jumlah INT NOT NULL,
    harga_per_item DECIMAL(10, 2) NOT NULL
);

-- -----------------------------------------------------------------------------
-- Tabel `RingkasanHarian`
-- Deskripsi: Menyimpan ringkasan transaksi harian untuk laporan cepat.
-- -----------------------------------------------------------------------------
CREATE TABLE RingkasanHarian (
    ringkasan_id VARCHAR(36) NOT NULL PRIMARY KEY,
    tanggal DATE NOT NULL UNIQUE,
    total_pendapatan DECIMAL(10, 2) NOT NULL,
    total_hpp DECIMAL(10, 2) NOT NULL,
    jumlah_transaksi INT NOT NULL,
    cabang_id VARCHAR(36) NOT NULL,
    kedai_id VARCHAR(36) NOT NULL
);

-- -----------------------------------------------------------------------------
-- Pengaturan Kunci Asing (Foreign Keys)
-- -----------------------------------------------------------------------------

ALTER TABLE LanggananKedai
ADD CONSTRAINT FK_Langganan_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE Cabang
ADD CONSTRAINT FK_Cabang_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE Pengguna
ADD CONSTRAINT FK_Pengguna_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE Pengguna
ADD CONSTRAINT FK_Pengguna_Cabang FOREIGN KEY (cabang_id) REFERENCES Cabang (cabang_id) ON DELETE CASCADE;

ALTER TABLE Pengguna
ADD CONSTRAINT FK_Pengguna_hakPeran FOREIGN KEY (peran) REFERENCES hakPeran (nama_peran) ON DELETE CASCADE;

ALTER TABLE InventarisMaster
ADD CONSTRAINT FK_Inventaris_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE HistoriInventaris
ADD CONSTRAINT FK_Histori_Item FOREIGN KEY (item_id) REFERENCES InventarisMaster (item_id) ON DELETE CASCADE;

ALTER TABLE HistoriInventaris
ADD CONSTRAINT FK_Histori_Cabang FOREIGN KEY (cabang_id) REFERENCES Cabang (cabang_id) ON DELETE CASCADE;

ALTER TABLE HistoriInventaris
ADD CONSTRAINT FK_Histori_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE StokSaatIni
ADD CONSTRAINT FK_StokSaatIni_Item FOREIGN KEY (item_id) REFERENCES InventarisMaster (item_id) ON DELETE CASCADE;

ALTER TABLE StokSaatIni
ADD CONSTRAINT FK_StokSaatIni_Cabang FOREIGN KEY (cabang_id) REFERENCES Cabang (cabang_id) ON DELETE CASCADE;

ALTER TABLE Menu
ADD CONSTRAINT FK_Menu_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE Resep
ADD CONSTRAINT FK_Resep_Menu FOREIGN KEY (menu_id) REFERENCES Menu (menu_id) ON DELETE CASCADE;

ALTER TABLE Resep
ADD CONSTRAINT FK_Resep_Item FOREIGN KEY (item_id) REFERENCES InventarisMaster (item_id) ON DELETE CASCADE;

ALTER TABLE Resep
ADD CONSTRAINT FK_Resep_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

ALTER TABLE Transaksi
ADD CONSTRAINT FK_Transaksi_Pengguna FOREIGN KEY (user_id) REFERENCES Pengguna (user_id);

ALTER TABLE Transaksi
ADD CONSTRAINT FK_Transaksi_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id);

ALTER TABLE Transaksi
ADD CONSTRAINT FK_Transaksi_Cabang FOREIGN KEY (cabang_id) REFERENCES Cabang (cabang_id);

ALTER TABLE DetailTransaksi
ADD CONSTRAINT FK_DetailTransaksi_Transaksi FOREIGN KEY (transaksi_id) REFERENCES Transaksi (transaksi_id) ON DELETE CASCADE;

ALTER TABLE DetailTransaksi
ADD CONSTRAINT FK_DetailTransaksi_Menu FOREIGN KEY (menu_id) REFERENCES Menu (menu_id) ON DELETE CASCADE;

ALTER TABLE RingkasanHarian
ADD CONSTRAINT FK_Ringkasan_Cabang FOREIGN KEY (cabang_id) REFERENCES Cabang (cabang_id) ON DELETE CASCADE;

ALTER TABLE RingkasanHarian
ADD CONSTRAINT FK_Ringkasan_Kedai FOREIGN KEY (kedai_id) REFERENCES Kedai (kedai_id) ON DELETE CASCADE;

-- Aktifkan kembali pemeriksaan kunci asing
SET foreign_key_checks = 1;