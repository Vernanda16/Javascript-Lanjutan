/*
Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string. Sebuah argumen
bisa diinputkan kedalam method ini yang akan berfungsi sebagai karakter ’pembatas’ untuk menyatukan array
*/

function contoh(){
    var kota = ["palembang", "medan", "jakarta", "bandung", "pagar alam"];
    console.log("sebelum menggunakan join", kota);

    var hasil = kota.join();
    console.log("setelah menggunakan join : ", hasil);

    var hasil2 = kota.join("|");
    console.log("setelah menggunakan join :", hasil2);
}

contoh();

//output
/*
sebelum menggunakan join [ 'palembang', 'medan', 'jakarta', 'bandung', 'pagar alam' ]
setelah menggunakan join :  palembang,medan,jakarta,bandung,pagar alam
setelah menggunakan join : palembang|medan|jakarta|bandung|pagar alam
*/