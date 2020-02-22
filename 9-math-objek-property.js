//math objek property
/*
Objek Math memiliki beberapa konstanta matematika yang bisa digunakan di dalam proses pembuatan program. 
Untuk menggunakan konstanta objek Math, kita tinggal menulis: Math.nama_konstanta.
*/


console.log(Math.E)        //Berisi nilai dari logaritma natural e, dengan nilai 2.718281828459045
console.log(Math.LN10)     //Berisi nilai dari logaritma natural 10, dengan nilai 2.302585092994046
console.log(Math.LN2)      //Berisi nilai dari logaritma natural 2, dengan nilai 0.6931471805599453
console.log(Math.LOG10E)   //Berisi nilai dari logaritma natural e basis 10, dengan nilai 0.4342944819032518
console.log(Math.LOG2E)    //Berisi nilai dari logaritma natural e basis 2, dengan nilai 1.4426950408889634
console.log(Math.PI)       //Berisi nilai dari pi (π) dengan nilai 3.141592653589793
console.log(Math.SQRT1_2)  //Berisi hasil dari 1 dibagi dengan akar kuadrat 2, dengan nilai 0.707106781186
console.log(Math.SQRT2)    //Berisi hasil akar kuadrat dari 2, dengan nilai 1.4142135623730951

console.log("\n");


//contoh penggunaan objek math dengan property PI
var jari2 = 7;
var luas_lingkaran = Math.PI * jari2 * jari2;   //Math.PI digunakan untuk mengambil nilai PI
console.log("Luas Lingkaran adalah =", luas_lingkaran);


//output
/*
2.718281828459045
2.302585092994046
0.6931471805599453
0.4342944819032518
1.4426950408889634
3.141592653589793
0.7071067811865476
1.4142135623730951


Luas Lingkaran adalah = 153.93804002589985
*/