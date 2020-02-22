//fungsi array isNan
/*
isNan() merupakan sebuah function yang menguji apakah nilai dari parameter expression itu adalah bukan angka.
 Kalau nilai expression tersebut adalah bukan angka maka fungsi ini akan mengembalikan nilai true. Jika nilai 
 nilai tersebut adalah angka maka fungsi ini akan akan mengembalikan nilai false.
*/
//akan mereturn nilai true jika terdapat data yang  bernilai not number

var a = isNaN([1,2,3,4,5]);  //output ini akan bernilai true karena tipe data bukan number biasa tapi array
var b = isNaN(1,2,3,4);  //output ini akan bernilai false karena nilainya adalah number

console.log(a);
console.log(b);



//output
/*
true
false
*/