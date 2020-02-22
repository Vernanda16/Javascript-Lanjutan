//fungsi split() yaitu kebalikan dari fungsi joun()
//berfungsi untuk mengganti data string menjadi array

function contoh(){
    var kalimat = "saya ingin jadi sukses agar bisa bahagiakan ortu";
    console.log("sebelum menggunakan split :", kalimat);

    var hasil = kalimat.split(" "); //proses mengubah string kalimat menjadi array
    console.log("setelah menggunakan split :", hasil);

}
contoh();

//output
/*
sebelum menggunakan split : saya ingin jadi sukses agar bisa bahagiakan ortu
setelah menggunakan split : [
  'saya',       'ingin',
  'jadi',       'sukses',
  'agar',       'bisa',
  'bahagiakan', 'ortu'
]
*/