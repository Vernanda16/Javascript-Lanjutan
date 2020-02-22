/*
Method Array.concat() berfungsi untuk ”penyambungan” array. Hasil akhir dari pemanggilan fungsi 
ini adalah array baru dengan penambahan dari method concat(). Elemen yang ditambahkan diinput sebagai 
argumen dari method concat().
*/

function contoh(){
    var kota = ["palembang", "prabumlih", "lubuk linggau", "baturaja"];
    var kabupaten = ["muara enim", "musi rawas", "muaratara", "lambar"];

    var gabungkan = kota.concat(kabupaten);  //ini artinya kita menggabungka antara isi array kota dengan kabupaten, perhatikan cara penulisan ya
    return gabungkan;
}
console.log(contoh());


//output
/*
[
  'palembang',
  'prabumlih',
  'lubuk linggau',
  'baturaja',
  'muara enim',
  'musi rawas',
  'muaratara',
  'lambar'
]
*/