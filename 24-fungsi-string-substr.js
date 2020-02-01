//fungsi substr()
/*
Fungsi substr() adalah fungsi PHP untuk memotong string, atau untuk mengambil sebagian nilai dari sebuah 
string. Fitur ini cukup sering digunakan dalam proses pembuatan program PHP, terutama yang membutuhkan 
manipulasi string.
*/
/*
Sebagai contoh, misalkan kita memiliki sebuah string berbentuk tanggal: “14-09-2015”. Bagaimana caranya untuk 
mengambil nilai bulan dari string tersebut, yakni karakter “09” ?
*/

function substring(){
    var contoh = "14-09-2019";
    
    console.log(contoh.substr(3, 2));  //ini artinya ambil karakter dimulai dari index ke 3 dengan jumlah dua buah karakter
    console.log(contoh.substr(-3)); //ini artinya ambil tiga buah karakter dari sebelah kanan
    console.log(contoh.substr(3))   //ambil semua karakter dimulai dari index ke tiga
}

substring();

