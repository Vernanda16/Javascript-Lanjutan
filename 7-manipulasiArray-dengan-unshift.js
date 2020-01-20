//manipulasi array dengan unshift
//unshift() digunakan untuk menambah isi ke sebuah array tetapi disimpan di paling awal / ujung kiri.


function contohUnshift(){
    var kota = ["bogor", "jogjakarta", "depok", "tebet", "bandung"];

    console.log("sebelum menggunakan unshift");
    console.log(kota);

    console.log("\n");

    console.log("setelah menambah isi array menggunakan unshift");
    kota.unshift("papua", "prabumulih");    //penggunaan unshift, pertama nama variabel disambung dengan titik isi array yang ingin ditambah dimasukkan kedalam kurung 

    return kota;
}

console.log(contohUnshift());