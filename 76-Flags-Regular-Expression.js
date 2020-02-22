//flag  pada regular expression
/*
flag artinya huruf g(global) yang kita tambahkan setelah garis miring pada pola yang di cari fungsinya untuk 
menampilkan semua huruf yang dicari dengan REgExp
*/

let huruf = "abcbhfadoofhalidjjhfojsho;shgsf;ojghsjgbsfjfdhduj";

hasil = huruf.match(/h/g);  //huruf g adalah flag yang berfungsi untuk menampilkan semua huruf h yang ada, kalau g dihilangkan maka huruf h yang akan di cetak hanya satu

console.log(hasil);





//output, karena kita menggunakan flag pada ResgExp maka huruf h yang kita cari semuanya akan di tampilkan
/*
[
  'h', 'h', 'h',
  'h', 'h', 'h',
  'h'
]
*/


/*
javaScript nyediain 3 modifier yang bisa kita pake yaitu :

g : global, cari semua yang cocok.
i : ignore case, huruf besar & huruf kecil sama aja
m : multiline, cari di semua baris teks, jangan berenti biarpun ketemu karakter line-break.
*/