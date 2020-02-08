//perulangan foreach
/*
Perulangan foreach biasanya digunakan untuk mencetak item di dalam array.
Perulangan ini termasuk dalam perulangan counted loop, karena jumlah perulangannya akan dituentukan oleh
panjang dari array.

Ada dua cara menggunakan perulangan foreach di Javascript:
1.Menggunakan for dengan operator in;
2.Mengguunakan method forEach().
*/

function contoh(){
    var data = ["a", "b", "c"];

     data.forEach(function(item, index, array){
        console.log(item);
        console.log(index);
        console.log(array);
    });  
}
contoh();