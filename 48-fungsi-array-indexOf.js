/*
Untuk mengetaui posisi elemen dari suatu array kita dapat menggunakan fungsi indexOf(). 
Jika data yang dicari terdapat pada suatu array maka method akan menampilkan nomor indeks array 
yang pertama tempat ditemukan data tersebut. Tidak semua posisi dari data dalam array diberikan jika 
dalam array tersebut terdapat data yang sama.
*/

function contoh(){
    var hari = ["senin", "selasa", "rabu", "kamis", "jum'at", "sabtu"];

    console.log("sebelum menggunakan indexOf :", hari);
    hariIndex = hari.indexOf("jum'at");
    console.log("mencari index hari jum'at pada array :", hariIndex);  //artinya kita mencari hari jum'at terletak di index keberapa
}
contoh();

//output
/*
sebelum menggunakan indexOf : [ 'senin', 'selasa', 'rabu', 'kamis', "jum'at", 'sabtu' ]
mencari index hari jum'at pada array : 4
*/