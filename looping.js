//for (let i = 11; i < 20; i += 2) {
  //  console.log(i);
//}


//for (let i = 1; i <= 10; i++) {
//    console.log(i + " x " + 1 + " = " + (i*1));
//}

//let total = 0;
//for (let i = 10; i <= 20; i += 2) {
    //total = total + i;
//console.log(`i=${i} -> total=${total}`);
//}

//let nama = ["Rizki", "Dwi", "Saputra", "Fajar", "Pratama", "Asa", "carmen", "lia", "siti", "budi"];
//for (let i = 0; i < nama.length; i++) {
//    console.log(`${i+1}. ${nama[i]}`);
//
//}

let nilai = [95, 90, 85, 80, 75, 70, 60, 65, 70, 75];
for (let i = 0; i < nilai.length; i++) {
  let status = "";
  if (nilai[i] >= 75) {
    status = "Lulus";
  } else {
    status = "Tidak Lulus";
  }
  let predikat = "";
  if (nilai[i] >= 90) {
    predikat = "Sangat bagus";
  } else if (nilai[i] >= 80) {
    predikat = "bagus";
  } else if (nilai[i] >= 70) {
    predikat = "Cukup";
  } else {
    predikat = "-";
  }
  console.log(`${i+1}. ${nilai[i]} = ${status}, ${predikat}`);
}
