//Math.sqrt()

/*
Method Math.sqrt() digunakan untuk mencari hasil dari akar kuadrat sebuah angka. 
Fungsi ini membutuhkan 1 argumen, yaitu angka yang akan dihitung. 
*/

console.log("----Contoh Pertama----");
console.log(Math.sqrt(25));  // hasilnya: 5 karena akar dari 25 adalah 5
console.log(Math.sqrt(81));  // hasilnya: 9 karena akar dari 81 adalah 9
console.log(Math.sqrt(-3));   // hasilnya: NaN karena nila -3 adalah min

console.log("\n");

console.log("----Contoh kedua----");
function akar(){
    var x = 81;
    console.log(Math.sqrt(x));
}

akar();