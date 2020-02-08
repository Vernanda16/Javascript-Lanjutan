//fungsi find()
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



//fungsi findIndex()
//UNNTUK MENGEMBALIKAN INDEX ELEMENT PERTAMA DALAM ARRAY YANG TELAH MEMENUHI PENGUJIAN DALAM ARRAY
//JIKA TIDAK TERPENUHI MAKA AKAN MENGEMBALIKAN NILAI -1

var fungsi_findIndex = [2,5,1,9,20,45,19];

function contoh(element){
    return element > 5;
}

console.log(fungsi_findIndex.findIndex(contoh));