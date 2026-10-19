let angka = [12, 7, 20, 15, 8, 3, 14, 9];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 0 && angka[i] >= 10) {
    console.log(angka[i] + " - genap - >= 10");
  } else if (angka[i] % 2 === 0 && angka[i] < 10) {
    console.log(angka[i] + " - genap - < 10");
  } else if (angka[i] % 2 !== 0 && angka[i] >= 10) {
    console.log(angka[i] + " - ganjil - >= 10");
  } else {
    console.log(angka[i] + " - ganjil - < 10");
  }
}
