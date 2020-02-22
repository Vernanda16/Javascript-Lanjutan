//fungsi matematika abs()
/*
Method Math.abs berfungsi untuk menghasilkan nilai absolut (nilai negatif akan menjadi positif, 
sedangkan nilai positif akan tetap positif). Fungsi ini membutuhkan 1 argumen angka. Berikut adalah contoh
pemanggilan fungsi abs():
*/
console.log("----Contoh Pertama----");
console.log(Math.abs(-5));      // hasilnya: 5
console.log(Math.abs(5));       // hasilnya: 5
console.log(Math.abs(-22.78));  // hasilnya: 22.78


console.log("----Contoh Ke dua----");
var x = 30;
var y = 40;

console.log("sebelum menggunkan fungsi Math.abs() :", x-y);
console.log("Setelah menggunakan fungsi Math.abs() :", Math.abs(x-y));


//output
/*
----Contoh Pertama----
5
5
22.78
----Contoh Ke dua----
sebelum menggunkan fungsi Math.abs() : -10
Setelah menggunakan fungsi Math.abs() : 10
*/
