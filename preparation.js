const barang = [
    {
        kode : "kb-001",
        nama : "keyboard mechanical",
        harga : 450000
    },
    {
        kode :"ms-002",
        nama : "mouse gaming",
        harga : 250000
    },
    {
        kode : "hs-003",
        nama : "headset",
        harga : 350000
    }
];

const produk = barang[1];
const jumlah = 7;
const hargaAwal = produk.harga * jumlah;

let diskon;

if (jumlah >= 5) {
  diskon = hargaAwal * 0.10;
} else {
  diskon = 0;
}

const totalBayar = hargaAwal - diskon;

console.log(`Produk: ${produk.nama}
Jumlah: ${jumlah}
Harga awal: Rp${hargaAwal}
Diskon: Rp${diskon}
Total bayar: Rp${totalBayar}`);


const daftarSiswa = [
    {
        nama: "Andi",
        kelas: "XI SIJA",
        nilai: 85,
        kehadiran: 90
    },
    {
        nama: "Budi",
        kelas: "XI SIJA",
        nilai: 65,
        kehadiran: 85
    },
    {
        nama: "Citra",
        kelas: "XI SIJA",
        nilai: 92,
        kehadiran: 95
    },
    {
        nama: "Henry",
        kelas: "XI SIJA",
        nilai: 100,
        kehadiran: 94
    }
];

for (const siswa of daftarSiswa) {
    if (siswa.nilai >= 75 && siswa.kehadiran >= 80) {
        console.log(siswa);
    } else {
        
        
    }
}

const barangToko = [
    {
        nama: "kyboard",
        stok: 10
    },
    {
        nama: "mouse",
        stok: 3
    },
    {
        nama: "headset",
        stok: 0
    },
    {
        nama: "webcam",
        stok: 7
    },
    {
        nama: "USB Hub",
        stok: 2
    }
];

for (let i = 0; i < barangToko.length; i++) {
  if (barangToko[i].stok === 0) {
    console.log(barangToko[i].nama + " - stok habis");
  } else if (barangToko[i].stok <= 5) {
    console.log(barangToko[i].nama + " - stok sedikit");
  } else {
    console.log(barangToko[i].nama + " - stok tersedia");
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

