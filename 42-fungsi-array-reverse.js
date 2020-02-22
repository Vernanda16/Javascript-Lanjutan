/*
Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array. 
Method ini akan mengubah array asal.
*/

function contoh(){
    var kota = ["palembang", "bandun", "jogjakarta", "jakarta", "depok", "bogor"];
    console.log("sebelum di reverse : ", kota);

    var hasil =  kota.reverse();
    console.log("setelah di reverse :", hasil);
    return hasil;
}

contoh();


//output
/*
sebelum di reverse :  [ 'palembang', 'bandun', 'jogjakarta', 'jakarta', 'depok', 'bogor' ]
setelah di reverse : [ 'bogor', 'depok', 'jakarta', 'jogjakarta', 'bandun', 'palembang' ]
*/