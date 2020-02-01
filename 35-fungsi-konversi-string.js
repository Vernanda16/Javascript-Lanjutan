//untuk mengkonversi tipe data ke string ada dua cara
//menggunakan fungsi toString()
//menggunakan fungsi valueOf()


function konversi(){
    var contoh = new String("ini contoh saja");

    console.log(typeof(contoh));  //mengecek tipe
    console.log(contoh);

    var konvert = contoh.toString(); //konversi objek ke string
    console.log(typeof konvert); //cek tipe setelah di konvert
    console.log(konvert);


}
konversi();


console.log("\n");


//contoh konversi ke string menggunakan valueOf()
function contoh2(){
    var contoh = new String("ini contoh penggunaan valueOf()");

    console.log(typeof contoh);
    console.log(contoh);

    var konvert = contoh.valueOf();
    console.log(typeof konvert);
    console.log(konvert);
}
contoh2();