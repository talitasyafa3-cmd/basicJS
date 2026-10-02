const siswa = {
    nama: "talita",
    kelas: "X-2",
    umur: 16,
    alamat: { jalan: "Jl. Merdeka No. 123",
              kota: "Jakarta"
     },
    notelp: "08123456789"
};
const siswa2 = {
    nama: "budi",
    kelas: "X-3",
    umur: 17,
    alamat: { jalan: "Jl. Sudirman No. 456", kota: "Jakarta" },
    notelp: "08198765432"
};

const siswa3 = [
    { nama: "talita", kelas: "X-2", umur: 16, alamat: "Jl. Merdeka No. 173", notelp: "08123656779" },
    { nama: "budi", kelas: "X-3", umur: 17, alamat: "Jl. Sudirman No. 496", notelp: "08194725442" },
    { nama: "siti", kelas: "X-2", umur: 19, alamat: "Jl. Diponegoro No. 789", notelp: "08123456780" },
    { nama: "andi", kelas: "X-1", umur: 18, alamat: "Jl. Gatot Subroto No. 321", notelp: "08123456781" }
];

console.log("namanya:", siswa3[0].nama, "umurnya:", siswa3[0].umur);
console.log("namanya:", siswa3[1].nama, "umurnya:", siswa3[1].umur);


console.log(siswa2.notelp);

