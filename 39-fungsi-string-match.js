/*
Method String.match() berfungsi untuk menemukan string menggunakan regular expression. Method ini membutuhkan 
buah argumen yang berisi format regular expression yang akan dicari. Hasil akhir method ini adalah array 
yang berisi data seluruh string yang ditemukan.
*/

function contoh(){
    var kalimat = "saya ingin menjadi programmer aamiin ya Allah";

    console.log(kalimat.match("programmer"));
    console.log(kalimat.match(/ya Allah/));  //mencari string berdasarkan regular expression
}

contoh();