//manipulasi array dengan splice()
//splice() digunakan untuk menambah dan menghapus isi array berdasarkan index tertentu
//cara penulisan splice(start, remove, add)
//start adalah index yang akan di edit
//remove isi yang akan dihapus, gunakan angka 1 atau lebih untuk menghapus jumlah isi yang ingin dihapus
//splice akan menghapus dari nilai index yang dipilih ke arah kanan
//add untuk menambahkan isi array berdasarkan index yang dipilih diawal



function contohSplice(){
    var kota =["jakarta", "depok", "bogor", "jogja", "bandung"];

    console.log("sebelum menggunakan splice");
    console.log(kota);

    console.log("\n")

    console.log("setelah menggunakan splice");
    kota.splice(3, 0, "palembang", "jambi");     //cara penulisan splice, nama variabel disambung dengan titik kemudian dalam kurung index yang dipilih, isi yang akan dihapus berdasarkan index, nilai yang akan ditambahkan berdasarkan index

    return kota;
}

console.log(contohSplice());


//output
/*
sebelum menggunakan splice
[ 'jakarta', 'depok', 'bogor', 'jogja', 'bandung' ]


setelah menggunakan splice
[
  'jakarta',
  'depok',
  'bogor',
  'palembang',
  'jambi',
  'jogja',
  'bandung'
]
*/