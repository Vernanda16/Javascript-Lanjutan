//fungsi slice
//menampilkan string dari karakter ke berapa sampai yang ke berapa
/* 
ada dua parameter yang harus di isi pada fungsi slice() yang pertama isikan dari urutan keberapa filter di mulai
dan parameter kedua sampai urutan keberapa batas filternya
*/


function slice(){
    var kalimat = "ini contoh kalimat saja gaes";

    console.log(kalimat.slice(5));

    console.log(kalimat.slice(10, 28));  //ini artinya tampilkan isi dari index ke 10 sampai 28
   
}

slice();

//output
/*
ontoh kalimat saja gaes
 kalimat saja gaes
 */