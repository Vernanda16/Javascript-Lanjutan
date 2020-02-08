//fungsi some()
//akan mereturn nilai true jika salah satu saja data memiliki kriteria tersebut
/*
Method every() dan some() memiliki fungsi yang mirip. Keduanya sama-sama bertugas untuk menentukan apakah 
data dalam sebuah array memenuhi kriteria tertentu. Method every() hanya akan mereturn nilai true jika semua 
datanya sesuai kriteria sedangkan some() akan mereturn nilai true ketika salah satu data sudah memenuhi 
kriteria.
*/


function contoh(){
    let hewan = [
        {name : "anjing", type : "karnivora"},
        {name : "ayam", type : "omnivora"},
        {name : "kucing", type : "omnivora"},
        {name : "elang", type : "ovovivar"}
        
    ];

    hasil = hewan.some(hewann=>hewann.type==="ovovivar");  //ini akan menampilkan true, karena kriteria type===ovovivar ada, jadi untuk some cukup satu aja tidak perlu semua type bernilai ovovivar

    console.log(hasil);
};

contoh();
