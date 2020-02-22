/*
Character Set
Token ini mendefinisikan sekelompok karakter yang ingin kita cari. Sintaksnya pake kurung siku [ ]. 
Set bisa berisi pilihan beberapa karakter atau range seperti huruf a-z , angka 1-100, dll.
*/

function panggilRegexp(value){

    let ambilKalimat = value.match(/programmer/g);  //g adalah flag (global) yang berarti cari semua yang cocok
    console.log(ambilKalimat);
    let ambilKata = value.match(/[jadi]/g); //ini artinya cari semua huruf j,a,d,i
    console.log(ambilKata);
}

panggilRegexp("ya Allah hamba ingin jadi programmer sukses, jika engkau yang berkehenda pasti jadi");


//output
/*
[ 'programmer' ]
[
  'a', 'a', 'a', 'a', 'i',
  'i', 'j', 'a', 'd', 'i',
  'a', 'j', 'i', 'a', 'a',
  'a', 'd', 'a', 'a', 'i',
  'j', 'a', 'd', 'i'
]*/