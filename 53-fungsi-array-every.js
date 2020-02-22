//fungsi array every 
//fungsinya untuk menentukan apakah sebuah data dalam sebuah array memenuhi kriteria tertentu
//fungsi ini akan mereturn nilai true jika semua datanya sesuai kriteria
/*
Method every() dan some() memiliki fungsi yang mirip. Keduanya sama-sama bertugas untuk menentukan apakah 
data dalam sebuah array memenuhi kriteria tertentu. Method every() hanya akan mereturn nilai true jika semua
datanya sesuai kriteria sedangkan some() akan mereturn nilai true ketika salah satu data sudah memenuhi
kriteria.
*/

function contoh(){
    let produk =  [
        {name : "aple", type : "PC"},
        {name : "asus", type: "laptop"},
        {name : "acer", type : "laptop"}
    ];

    hasil = produk.every(product=>product.type=== "laptop"); //ini akan menampilkan false karena tidak semua type laptop, sedangkan syarat dari every() semua kriteria harus terpenuhi

    console.log(hasil);
}

contoh();

//output  false