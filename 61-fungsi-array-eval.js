//fungsi array eval
/*
Fungsi eval digunakan untuk mengevaluasi ekspresi atau pernyataan JavaScript. Fungsi ini banyak digunakan 
sebagai pengevaluasi ekspresi (dapat dianalogikan dengan parser). Selain itu dapat digunakan untuk 
mengeksekusi pernyataan. singkat kata sebuah ekspresi atau syntax dapat berjalan apabila dieksekusi 
menggunakan fungsi eval ini.
*/

var x = [1,2,3,4,5,6,7,8,9];
var total = 0;

for(i=0; i<x.length; i++){
    total += x[i];
}

console.log(eval(total));



//output
// 45  hasil dari penjumlahan isi array

