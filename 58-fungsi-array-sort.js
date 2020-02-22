//fungsi array sort
/*
Method Array.sort() digunakan untuk mengurutkan elemen dari array. Jika method ini dipanggil tanpa argumen, 
elemen dari array akan diurutkan berdasarkan abjad. Jika elemen di dalam array bukan huruf, maka akan 
dikonversi sementara menjadi string, baru kemudian dilakukan proses pengurutan. Jika ditemukan elemen dengan 
nilai null atau undefined, akan di tempatkan pada urutan akhir.
*/

    var kota = ['lampung', "palembang", "bali", "jogja", "bogor"];
    console.log("sebelum menggunakan sort :", kota);
    console.log("setelah menggunakan sort :", kota.sort())
    console.log("===========================================");
    var angka = [2,1,5,3,8,4,9,6,7];
    console.log("sebelum menggunakan sort :", angka);
    console.log("setelah menggunakan sort :", angka.sort());

    


    
//output
/*
sebelum menggunakan sort : [ 'lampung', 'palembang', 'bali', 'jogja', 'bogor' ]
setelah menggunakan sort : [ 'bali', 'bogor', 'jogja', 'lampung', 'palembang' ]
===========================================
sebelum menggunakan sort : [
  2, 1, 5, 3, 8,
  4, 9, 6, 7
]
setelah menggunakan sort : [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/