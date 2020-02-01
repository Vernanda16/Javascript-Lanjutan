/*
Method Array.slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ 
dari array asal. Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir 
pemotongan.

Jika hanya diberikan 1 argumen, maka method ini akan mengembalikan array baru dimulai dari posisi argumen
sampai dengan akhir array. Jika argumen bernilai negatif, maka perhitungan akan dimulai dari akhir array.
*/

function contoh(){
    var arr1 = ["1", "2", "3", "4", "5", "6"];

    var slicee = arr1.slice(2, 4);   //ini artinya kita mengcopy isi arr1 dari index ke 2 kedalam variable slice
    console.log(slicee);

    var slice2 = arr1.slice(-4); //ini artinya kita mengcopy dari sebelah kanan sebanyak 4 angka
    console.log(slice2);
}
contoh();