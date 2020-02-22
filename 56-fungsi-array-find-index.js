//fungsi array find()
/*
find digunakan untuk mempermudah kita mencari sebuah data dalam suatu array. Method find berbeda dengan 
filter. Fungsi filter akan melakukan penyaringan terhadap array dan mengembalikan nilai berupa list of data 
(array). Sedangkan find, hanya akan mencari 1 data saja sesuai dengan kriteria yang diberikan. Jika terdapat
 dua atau lebih data yang memenuhi kriteria, maka data yang pertamalah yang akan di return.
*/

var fungsiFind = [1,50,30,130,40,20,90,170];
var cari = fungsiFind.find(function(element){
    return element > 100;
});

console.log(cari);

//output  130 itu artinya 130 memenuhi syarat karena lebih besar dari 100, untuk method find hanya menampilkan satu saja jadi nilai 170 tida akan ditampilkan walau lebih besar dari 100 juga



//fungsi findIndex()
//UNNTUK MENGEMBALIKAN INDEX ELEMENT PERTAMA DALAM ARRAY YANG TELAH MEMENUHI PENGUJIAN DALAM ARRAY
//JIKA TIDAK TERPENUHI MAKA AKAN MENGEMBALIKAN NILAI -1

var array1= [5,12,8,130,44];

function isLargeNumber(element){
    return element > 13;
}

console.log(array1.findIndex(isLargeNumber));

//output 3   ini artinya isi array yang bernilai lebih besar dari 13 ada pada index ke 3 yaitu 130 


