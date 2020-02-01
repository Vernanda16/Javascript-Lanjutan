/*
Method String. search() berfungsi untuk menemukan string menggunakan regular expression. 
Method ini membutuhkan 1 buah argumen yang berisi format regular expression yang akan dicari. 
Hasil akhir method ini adalah angka yang menunjukkan posisi kata yang dicari (huruf pertama dimulai 
dari index 0). Method ini mirip dengan String.indexOf(), namun perbedaan terletak pada argumen yang 
merupakan regular expression.
*/

function contoh(){
    var kalimat = "saya ingin menjdai programmer aamiin";

    console.log(kalimat.search("programmer"));
    console.log(kalimat.search(/programmer/));  //artinya mencari string menggunakan argumen regular expression
}

contoh();