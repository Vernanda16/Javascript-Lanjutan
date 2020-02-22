//Math.min() dan Math.max()

/*
Method Math.min() berfungsi untuk mencari angka paling kecil diantara argumen yang diberikan. 
Fungsi ini membutuhkan 1 atau lebih argumen
*/

/*
Method Math.max() berfungsi untuk mencari angka paling besar diantara argumen yang diberikan. 
Fungsi ini membutuhkan 1 atau lebih argumen. 
*/

function MinMax(){
    var cthMin = Math.min(3,7,5,1,9,20,42,45);
    console.log("Ini contoh penggunaan min() :", cthMin);

    console.log("\n");

    var cthMax = (3,5,1,7,8,23,41,221);
    console.log("Ini conoth penggunaan max() :", Math.max(cthMax));
}

MinMax();

//output
/*
Ini contoh penggunaan min() : 1


Ini conoth penggunaan max() : 221
*/
