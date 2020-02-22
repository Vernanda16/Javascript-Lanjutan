/*
Method String.indexOf() berfungsi untuk mencari karakter atau kata dalam sebuah String. Method ini
 membutuhkan 2 argumen: 1 argumen bertipe String yang diisi dengan karakter yang akan dicari, serta 1 
 buah argumen opsional yang berfungsi untuk menandai posisi awal pencarian. Jika argumen kedua tidak diisi, 
 maka pencarian akan dimulai dari awal String.
*/

function contoh(){
    var kalimat = "ini contoh kalimat";

    console.log(kalimat.indexOf("contoh")); //ini artinya kita ingin mengecek kata contoh dimulai dari index keberapa
}

contoh();


//output 4
