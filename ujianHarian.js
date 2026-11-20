const siswa = {
  nama: "aNdI",
  kelas: "x ict",
  email: "ANDI@GMAIL.COM"
};
const { nama: namaSiswa, kelas: kelasSiswa, email: emailSiswa } = siswa;
console.log(`Nama: ${namaSiswa.toUpperCase()}\nKelas: ${kelasSiswa.toUpperCase()}\nEmail: ${emailSiswa.toLowerCase()}`);

const siswa2 = [
    { nama: "Budi", umur: 17, email: "budi@gmail.com" },
    { nama: "Citra", umur: 17, email: "citra@yahoo.com" },
    { nama: "Dina", umur: 17, email: "dina@gmail.com" }
];

const siswa3 = siswa2.filter((siswa) => siswa.email.endsWith("gmail.com")); siswa3.forEach((siswa) => {
  console.log(`Nama: ${siswa.nama} Email: ${siswa.email}`);
});

