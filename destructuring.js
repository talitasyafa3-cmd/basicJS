const siswa = {
  nama: "Raihan",
  umur: 17,
  hobby: "catur",
  kelas: 7
};
delete siswa.kelas; //cara kerja delete adalah menghapus properti dari objek. Dalam contoh ini, kita menghapus properti "hobby" dari objek siswa. Setelah dihapus, properti tersebut tidak akan ada lagi dalam objek siswa.
// console.log(siswa);

const merklaptop = ["ASUS", "Dell", "HP", "Lenovo", "Acer"];
const [merk1, merk2, merk3, merk4, merk5] = merklaptop; //cara kerja destructuring array adalah mengambil nilai dari array dan menyimpannya ke dalam variabel. Dalam contoh ini, kita menggunakan destructuring untuk mengambil nilai dari array merklaptop и menyimpannya ke dalam variabel merk1, merk2, merk3, merk4, и merk5.
//  console.log(merk1, merk2, merk3, merk4, merk5)

 const siswaBaru = [
  { nama: "Andi", nilai: 85, umur: 16, kelas: 8 },
  { nama: "Budi", nilai: 65, umur: 15, kelas: 8 },
  { nama: "Citra", nilai: 90, umur: 16, kelas: 7 },
  { nama: "Dina", nilai: 70, umur: 17, kelas: 9 },
  { nama: "Eko", nilai: 85, umur: 18, kelas: 10 }
 ];

 const namaSaja = siswaBaru.map((namaDoang) => namaDoang.nama);
 const nilaiSaja = siswaBaru.map((nilaiDoang) => nilaiDoang.nilai);
// console.log(namaSaja);
// console.log(nilaiSaja);

const daftarHarga = [
  { nama: "Asus", harga: 14000000, kondisi: "baru" },
  { nama: "Lenovo", harga: 16000000, kondisi: "bekas" },
  { nama: "MSI", harga: 22000000, kondisi: "baru" }
];

const merkharga = daftarHarga.map(({ nama, harga }) => {
  return { nama, harga };
});






