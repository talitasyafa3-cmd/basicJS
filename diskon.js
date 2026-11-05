const barang = [
    { nama: "Mouse", harga: 100000 },
    { nama: "Keyboard", harga: 150000 },
    { nama: "Headset", harga: 200000 },
    { nama: "Flashdisk", harga: 50000 },
    { nama: "Webcam", harga: 250000 },
];

const hargadiskon = barang.map((item) => { 
    const diskon = item.harga * 0.1; 
    const hargasetelahdiskon = item.harga - diskon;
    return { nama: item.nama, harga: hargasetelahdiskon };
});



const calonAnggota = [
    { nama: "Andi", nilai: 85, kehadiran: 90 },
    { nama: "Budi", nilai: 75, kehadiran: 85 },
    { nama: "Citra", nilai: 90, kehadiran: 95 },
    { nama: "Dina", nilai: 80, kehadiran: 95 },
    { nama: "Eko", nilai: 88, kehadiran: 95 },
    { nama: "Fajar", nilai: 70, kehadiran: 95 }
];


const anggotaTerpilih = calonAnggota.filter((anggota) => {  //cara kerja filter adalah memfilter data dari array yang memenuhi kondisi tertentu. Dalam contoh ini, kita memfilter anggota yang memiliki nilai >= 80 dan kehadiran >= 80. Hasilnya adalah array baru yang hanya berisi anggota yang lolos seleksi berdasarkan kriteria tersebut.
  return anggota.nilai >= 80 && anggota.kehadiran >= 80; // Filter anggota dengan nilai >= 80 dan kehadiran >= 80
});

//console.log("Nama anggota yang lolos:"); 
anggotaTerpilih.forEach((anggota) => { //cara kerja forEach adalah melakukan iterasi pada setiap elemen dalam array dan menjalankan fungsi yang diberikan untuk setiap elemen. Dalam contoh ini, kita menggunakan forEach untuk mencetak nama anggota yang lolos seleksi ke konsol.
//  console.log(anggota.nama); // Cetak nama anggota yang lolos
});

//console.log("Jumlah anggota yang lolos:", anggotaTerpilih.length); //cara kerja length adalah menghitung jumlah elemen dalam array. Dalam contoh ini, kita menggunakan length untuk menghitung jumlah anggota yang lolos seleksi dan mencetaknya ke konsol.

const inventaris = [
    { kode: "PC001", nama: "Komputer 1", kondisi: "baik" },
    { kode: "PC002", nama: "Komputer 2", kondisi: "rusak" },
    { kode: "PC003", nama: "Komputer 3", kondisi: "baik" },
    { kode: "PC004", nama: "Komputer 4", kondisi: "perbaikan" },
    { kode: "PC005", nama: "Komputer 5", kondisi: "baik" }
];

const hasilCari = inventaris.find((item) => { //cara kerja find adalah mencari elemen pertama dalam array yang memenuhi kondisi tertentu. Dalam contoh ini, kita mencari item dengan kode "PC003". Hasilnya adalah objek item yang ditemukan atau undefined jika tidak ada yang cocok.
  return item.kode === "PC003"; // Cari item dengan kode "PC003"
});

if (hasilCari) { //cara kerja if adalah memeriksa kondisi tertentu. Dalam contoh ini, kita memeriksa apakah hasilCari tidak undefined (artinya item ditemukan). Jika kondisi terpenuhi, kita mencetak informasi item ke konsol.
  console.log("nama perangkat:", hasilCari.nama);
  console.log("kondisi:", hasilCari.kondisi); // Cetak informasi item yang ditemukan
} else {
  console.log("Item tidak ditemukan."); // Cetak pesan jika item tidak ditemukan
}