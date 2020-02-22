/*
avaScript nyediain 3 modifier yang bisa kita pake yaitu :

g : global, cari semua yang cocok.
i : ignore case, huruf besar & huruf kecil sama aja
m : multiline, cari di semua baris teks, jangan berenti biarpun ketemu karakter line-break.
*/

/*
Token Regex dikelompokkan berdasar fungsinya. Ada yg dipake untuk definisi jenis karakter, untuk nentuin batas
dan lain-lain
*/

/*
Token dalam kelompok ini mendefinisikan jenis karakter.

Token	Artinya
.	    Sebarang karakter
\d	    Sebarang angka, 1 digit, 0 – 9
\D	    Sebarang karakter yang bukan angka
\w	    Sebarang angka atau huruf kecil & besar termasuk underscore
\W	    Sebarang karakter yang bukan huruf, angka, atau underscore
\s	    Karakter whitespace, spasi, tab, line-break
*/

//Token . artinya sebarang karakter kecuali line-break (\n , \r).
var s = "Ini ibu Budi \n bukan bapaknya.";
var re = /./g;
console.log(s.match(re));

/*
Gimana kalo kita ingin cari tanda titik? Kita perlu pake \ di depan titik, 
jadi tanda titiknya dianggap karakter bukan token regex. Contohnya begini,
*/
var s = "sempurna..";
var re = /\./g;
console.log(s.match(re));

//kalo ga pake \ di depan .
var re2 = /./g;
console.log(s.match(re2));


//----Contoh untuk Character class lainnya:------
var s = 'abCD123 efg456 !@#$%^_';

//angka
console.log(s.match(/\d/g));

//selain angka
console.log(s.match(/\D/g));

//angka, huruf, underscore
console.log(s.match(/\w/g));

//selain angka, huruf, & underscore
console.log(s.match(/\W/g));

//whitespace
console.log(s.match(/\s/g));


//-----Character Set----
/*
Character Set
Token ini mendefinisikan sekelompok karakter yang ingin kita cari. Sintaksnya pake kurung siku [ ]. 
Set bisa berisi pilihan beberapa karakter atau range seperti huruf a-z , angka 1-100, dll.
*/
var s = "abcde 1234 fghij 5678 vwxyz";

//cari angka 3,4,5,6
console.log(s.match(/[3456]/g));

//cari angka 1 sampai 7
console.log(s.match(/[1-7]/g));

//cari semua karakter dalam kurung siku
console.log(s.match(/[aij12z]/g));

//cari semua karakter yang bukan angka 
console.log(s.match(/[^0-9]/g));

//-----Alternation------
/*
Alternation
Ini token sederhana, |. Fungsinya mirip dengan pencabangan if-else.
Kalo satu pola ga ketemu, cari pola satunya.
*/
var s1 = "Kuku kaki kakekku kaku-kaku ye";

//cari kuku atau kaku
console.log(s1.match(/kuku|kaku/gi))

//---Boundary / Anchor-----
/*
Token boundary mendefinisikan batas awal/akhir teks yang diproses.

Token	Artinya
^	Awal baris
$	Akhir baris
\b	Batas awal / akhir kata. Antara huruf/angka dan spasi
*/
var s = "Ini ibu Rudy\nIni bapak Rudy";

//semua i di awal baris
console.log(s.match(/^i/igm));

//semua y di akhir baris
console.log(s.match(/y$/igm));

//semua i di akhir kata
console.log(s.match(/i\b/igm));

//semua i di awal kata
console.log(s.match(/\bi/igm));
