//flag g
//berarti cari semua yang cocok

let doa = "ya Allah aku ingin menjadi programmer sukses, agar bisa membahagiakan kedua orang tua aamiin";
console.log(doa.match(/a/));       //jika kita tidak menyertakan flag maka karakter a yang ditampilkan hanya satu
console.log(doa.match(/a/g));  //jika kita menyertakan flag g (global) maka semua karakter a yang ada akan di tampilkan atau dicetak

//output
/*
[
  'a',
  index: 1,
  input: 'ya Allah aku ingin menjadi programmer sukses, agar bisa membahagiakan kedua orang tua aamiin',
  groups: undefined
]
[
  'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a', 'a',
  'a', 'a', 'a', 'a', 'a',
  'a', 'a'
]*/