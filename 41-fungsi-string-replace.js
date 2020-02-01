/*
Method String.replace() berfungsi untuk pencarian string menggunakan regular expression,
 dan mengganti kata yang dicari. Method ini merupakan fungsi find and replace di dalam JavaScript. 
 Method String.replace() membutuhkan 2 buah argumen: argumen pertama adalah format regular expression
  yang akan dicari, dan argumen kedua adalah String (atau bisa juga berupa fungsi) yang akan menggantikan 
  text hasil pencarian. Hasil akhir method ini adalah sebuah String akhir yang telah diubah.
*/

function contoh(){
    var kalimat = "saya ingin jadi orang sukses aamiin";

    console.log("sebelum di replace : ", kalimat);
    console.log("setelah di replace : ", kalimat.replace("orang", "programmer"));  //ini artinya kita mengubah kata orang menjai programmer
}
contoh();