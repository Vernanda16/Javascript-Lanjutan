//Math.pow()

/*
Method Math.pow() berfungsi untuk untuk mencari hasil pemangkatan. Fungsi ini membutuhkan 2 buah argumen. 
Argumen pertama adalah angka asal, dan argumen kedua adalah nilai pangkat. 
*/
console.log("----Contoh Pertama----");
console.log(Math.pow(1,100));   // 1^100, hasilnya: 1
console.log(Math.pow(5,3));   // 5^3, hasilnya: 125
console.log(Math.pow(50));   // hasilnya: 50

console.log("\n");

console.log("----Contoh Kedua----");
function pangkat(){
    var x = 5;
    console.log(Math.pow(x,3));
}

pangkat();

//output
/*
----Contoh Pertama----
1
125
NaN


----Contoh Kedua----
125
*/