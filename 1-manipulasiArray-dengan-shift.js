//manipulasi shift dengan array
//fungsi shif() digunkan untuk menghapus isi array yang berada pada urutan pertama

function contohShift(){
    var kota = ["bandung", "bogor", "palembang", "depok", "jogja", "jakarta"];

    console.log("sebelum menggunakan shift");
    console.log(kota);
    console.log("===========");

    console.log("setelah menggunakan shift");
    kota.shift();   //cara penggunaan shift(), penulisannya diawali dengan nama variable kemudian dismabnug menggunakan titik dengan shift()

    return kota;
}

console.log(contohShift());


//output
/*

sebelum menggunakan shift
[ 'bandung', 'bogor', 'palembang', 'depok', 'jogja', 'jakarta' ]
===========
setelah menggunakan shift
[ 'bogor', 'palembang', 'depok', 'jogja', 'jakarta' ]

*/