//fungsi array isFinite
//Digunakan untuk mengevaluasi apakah suatu bilangan finite atau infinite
//akan mereturn nilai false jika terdapat data dengan positif infinite, negatif infinite atau not number atau string


var a = isFinite( [1,2,3,4,5,6]);
var b = isFinite( ["palembang", "bandung", "jakarta"]);
var c = isFinite( [1,2,3, "bogor", "jogja"]);   //output ini akan bernilai false karena isi array masih terbatas
var d = isFinite( [-999924.24]);   //output ini akan bernilai true karena nila array tak terbatas

console.log(a);
console.log(b);
console.log(c);
console.log(d);




//output
/*
false
false
false
true
*/