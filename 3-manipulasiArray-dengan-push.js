//manipulasi array dengan push()
//push() digunakan untuk menambahkan isi array dari sebelah kanan paling ujung

function contohPush(){
    var angka = [1,2,3,4,5,6,7];

    console.log("sebelum menggunakan push");
    console.log(angka);

    console.log("\n");

    console.log("setelah menggunakan push");
    angka.push("bogor", 8,9);   //cara penggunaan push(), pertama menulis nama variabel kemudian sambung dengan titik, untuk nilai array yang ingin ditambahkan masukan dalam kurung

    return angka;
}

console.log(contohPush());


//output

/*

sebelum menggunakan push
[
  1, 2, 3, 4,
  5, 6, 7
]

setelah menggunakan push
[ 1, 2, 3, 4, 5, 6, 7, 'bogor', 8, 9 ]

*/