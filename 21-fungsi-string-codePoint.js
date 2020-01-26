//string.fromCodePoint()

/*
    fungsi ini berfungsi untuk menerjemahkan sebuah inputan baik itu angka desiaml, hexa kedalam kode ASCII
*/

function kodePoint(){
    console.log(String.fromCodePoint(65)); //contoh kita isi dengan kode ASCII 65 dan outputnya adalah A
    console.log(String.fromCodePoint(0x2635)); //selain nagka kita juga bisa memasukkan bilangan HEXA
}

kodePoint();