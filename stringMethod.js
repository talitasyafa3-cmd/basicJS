// const nama = "Andi" ;
// console.log(nama.toUpperCase()); //cara kerja toUpperCase adalah mengubah semua huruf dalam string menjadi huruf kapital. Dalam contoh ini, kita menggunakan toUpperCase untuk mengubah nama menjadi huruf kapital. Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.
// console.log(nama.toLowerCase()); //cara kerja toLowerCase adalah mengubah semua huruf dalam string menjadi huruf kecil. Dalam contoh ini, kita menggunakan toLowerCase untuk mengubah nama menjadi huruf kecil. Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.


// const username = "Andi";
// const usernameBaru = username.toLowerCase(); 
// console.log(usernameBaru);//cara kerja toLowerCase adalah mengubah semua huruf dalam string menjadi huruf kecil. Dalam contoh ini, kita menggunakan toLowerCase untuk mengubah username menjadi huruf kecil dan menyimpannya ke dalam variabel baru usernameBaru.


// const namaDepan = "Andi";
// console.log(namaDepan.charAt(0)); //cara kerja charAt adalah mengambil karakter pada indeks tertentu dalam string. Dalam contoh ini, kita menggunakan charAt untuk mengambil karakter pertama dari namaDepan, yaitu "A". Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.
// console.log(nama.trim()); //cara kerja trim adalah menghapus spasi di awal dan akhir string. Dalam contoh ini, kita menggunakan trim untuk menghapus spasi di awal dan akhir namaDepan. Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.

// const  email = "andi@gmail.com"; //cara kerja trim adalah menghapus spasi di awal dan akhir string. Dalam contoh ini, kita menggunakan trim untuk menghapus spasi di awal dan akhir namaBelakang dan menyimpannya ke dalam variabel baru namaBelakangBaru.    
// console.log(email.includes("@"));

// const nma = "Andi";
// console.log(nma.includes("di")); //cara kerja includes adalah untuk mengecek apakah sebuah string mengandung substring tertentu. Dalam contoh ini, kita menggunakan includes untuk mengecek apakah nma mengandung huruf "A". Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.
// console.log(nma.includes("xyz")); //cara kerja includes adalah untuk mengecek apakah sebuah string mengandung substring tertentu. Dalam contoh ini, kita menggunakan includes untuk mengecek apakah nma mengandung huruf "di". Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.

// const emaill = "andii@gmail.com";

// if (emaill.includes("andii@gmail.com")) {
//   console.log("Valid");
// } else {
//   console.log("Not valid");
// }

// const kode = "LT-001";
// if (kode.startsWith("PC")) {
//   console.log("barangnya komputer");
// } else {
//   console.log("barangnya bukan komputer");
// }

// const file = "document.docx";
// if (file.endsWith(".pdf")) {
//     console.log("file pdf");
// } else if (file.endsWith(".jpg")) {
//     console.log("file gambar");
// } else if (file.endsWith(".docx")) {
//   console. log("file dokumen word");
// } else {
//     console.log("file tidak didefinisakan");
// }


// const nama = "Andi";
// if (nama.indexOf("d") !== -1) { //!== -1 untuk mengecek apakah huruf "d" ada di dalam string nama. Jika indexOf mengembalikan nilai selain -1, itu berarti huruf tersebut ditemukan dalam string.
//   console.log("Huruf ditemukan");
// } else {
//   console.log("Huruf tidak ditemukan");
//   }

const numby = 2.15;
if (numby %2 === 0 && Number.isSafeInteger(numby)){ //Number.isSafeInteger(numby) digunakan untuk mengecek apakah numby adalah angka bulat. Jika numby adalah angka bulat, maka Number.isSafeInteger(numby) akan mengembalikan nilai true, dan jika numby bukan angka bulat, maka akan mengembalikan nilai false. 
    console.log("genap dan merupakan angka bulat");
}else{
    console.log("Ganjil atau bukan angka bulat");
}

const nama = "Andi";
console.log(nama.slice(0, 2));

const namaBarang = "PC - 001";
const kodeBarang = namaBarang.slice(5, 8);
console.log(kodeBarang); //cara kerja slice adalah untuk mengambil sebagian string dari indeks tertentu hingga indeks tertentu. Dalam contoh ini, kita menggunakan slice untuk mengambil karakter dari indeks ke-5 hingga indeks ke-8 dari namaBarang, yaitu "001". Namun, karena kita tidak menyimpan hasilnya ke dalam variabel baru atau menimpanya ke variabel yang sama, hasilnya tidak akan terlihat saat dicetak ke konsol.

const kalimat = "Saya belajar Java";
const hasil = kalimat.replace("Java", "JavaScript");
const hasil2 = hasil.replace("Saya", "Aku");


console.log(hasil2); //cara kerja replace adalah untuk mengganti substring tertentu dalam string dengan substring baru. Dalam contoh ini, kita menggunakan replace untuk mengganti kata "Java" dengan "JavaScript" dalam kalimat. Hasilnya disimpan ke dalam variabel hasil, dan kemudian dicetak ke konsol.

const warna = "Merah-Kuning-Hijau";
const warnaBaru = warna.split("-"); //cara kerja split adalah untuk memecah string menjadi array berdasarkan pemisah tertentu. Dalam contoh ini, kita menggunakan split untuk memecah string warna menjadi array dengan pemisah tanda hubung. Hasilnya disimpan ke dalam variabel warnaBaru, dan kemudian dicetak ke konsol.
console.log(warnaBaru);

const namaKelompok = ["Andi", "Budi", "Caca"];
const namaKelompokBaru = namaKelompok.join("- ");
console.log(namaKelompokBaru); //cara kerja join adalah untuk menggabungkan elemen-elemen dalam array menjadi string dengan pemisah tertentu. Dalam contoh ini, kita menggunakan join untuk menggabungkan elemen-elemen dalam array namaKelompok menjadi string dengan pemisah koma dan spasi. Hasilnya disimpan ke dalam variabel namaKelompokBaru, dan kemudian dicetak ke konsol.

const kasus1 = "Aku suka renang";
const hasilKasus1 = kasus1.replace("renang", "berenang");
const hasilKasus2 = hasilKasus1.replace("Aku", "Saya");
const hasilkasus3 = hasilKasus2.split(" ");
console.log(hasilkasus3);

const username = " AdMIN123 ";
const usernameBaru = username.trim().toLowerCase();
console.log(usernameBaru); //cara kerja trim adalah untuk menghapus spasi di awal dan akhir string, sedangkan toLowerCase digunakan untuk mengubah semua huruf dalam string menjadi huruf kecil. Dalam contoh ini, kita menggunakan trim untuk menghapus spasi di awal dan akhir username, kemudian menggunakan toLowerCase untuk mengubah username menjadi huruf kecil. Hasilnya disimpan ke dalam variabel usernameBaru, dan kemudian dicetak ke konsol.
