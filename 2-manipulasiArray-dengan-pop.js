//manipulasi array dengan pop()
//pop digunakan untuk menghapus / remove isi array paling akhir.

function contohPop(){
    var kota = ["jakarta", "depok", "jogja", "bandung", "bogor"];

    console.log("sebelum menggunakan pop");
    console.log(kota);

    console.log("\n");

    console.log("setelah menggunakan pop");
    kota.pop();     //cara penggunaan pop hampir sama dengan shift, dimana penulisannya diawali dengan variable kemudian disambung menggunakan titik

    return kota;
}

console.log(contohPop());


//output
/*

sebelum menggunakan pop
[ 'jakarta', 'depok', 'jogja', 'bandung', 'bogor' ]


setelah menggunakan pop
[ 'jakarta', 'depok', 'jogja', 'bandung' ]

*/