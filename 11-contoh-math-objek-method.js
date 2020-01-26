//di javascript ada banyak method obje math tapi kali ini kita akan contohkan beberapa saja
//cell, floor dan round

/*
Method Math.ceil() BERFUNGSI UNTUK PEMBULATAN KEATAS dari sebuah nilai desimal. Fungsi ini membutuhkan 
1 argumen, yaitu angka yang akan dibulatkan. Berikut adalah hasil pemanggilan fungsi ceil:
*/
console.log("Contoh Penggunaan Math.ceil()");
console.log(Math.ceil(1.99));     // hasilnya: 2
console.log(Math.ceil(1.01));         // hasilnya: 2
console.log(Math.ceil(1.0));        // hasilnya: 1
console.log(Math.ceil(-1.99));   // hasilnya: -1


 
/*
Method Math.floor() BERFUNGSI UNTUK PEMBULATAN KEBAWAH dari sebuah nilai desimal. Fungsi ini membutuhkan 
1 argumen, yaitu angka yang akan dibulatkan. Berikut adalah hasil pemanggilan fungsi floor:
*/
console.log("Contoh Penggunaan Math.floor()");
console.log(Math.floor(1.99));  // hasilnya: 1
console.log(Math.floor(1.01));  // hasilnya: 1
console.log(Math.floor(1.0));   // hasilnya: 1
console.log(Math.floor(-1.01)); // hasilnya: -2


/*
thod Math.round() berfungsi untuk membulatkan nilai angka ke bilangan terdekat. Jika nilai desimal dibawah 
0.5 maka akan dibulatkan ke bawah, namun jika nilai desimal bernilai 0.5 atau lebih, akan dibulatkan keatas.
 Fungsi ini membutuhkan 1 argumen, aitu angka yang akan dibulatkan. 
*/
console.log("Contoh penggunaan Math.round()");
console.log(Math.round(1.56));  // hasilnya: 2
console.log(Math.round(1.44));  // hasilnya: 1
console.log(Math.round(1.0));   // hasilnya: 1
console.log( Math.round(-1.6)); // hasilnya: -2
