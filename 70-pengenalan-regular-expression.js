//regular expression  https://masputih.com/2015/11/belajar-regular-expression
/*
Sebuah ekspresi reguler adalah urutan karakter yang membentuk pola pencarian. Ketika Anda mencari data dalam 
teks, Anda dapat menggunakan pola pencarian ini untuk menggambarkan apa yang Anda cari. Sebuah kalimat biasa 
dapat menjadi karakter tunggal, atau pola yang lebih rumit.Ekspresi reguler dapat digunakan untuk melakukan 
semua jenis pencarian teks dan teks menggantikan operasi

Ada dua cara untuk bikin regex di JavaScript. Kita bisa bikin objek RegExp atau pake string biasa.  */

var re1 = new RegExp(/\d/g);
var re2 = /\d/g;

var s = 'abc123def vwxyz456';

console.log(s.match(re1));
console.log(s.match(re2));
/*
Regex biasanya dipake untuk fungsi-fungsi String seperti match(), search(), replace().
Tapi Regex juga punya fungsi sendiri yang juga sering dipake seperti test() & exec().
*/

/*
Sintak : pattern/modifiers;
contoh : var patt = /w3schools/i;
penjelasan :
            / W3Schools / i   adalah ekspresi reguler.
            W3Schools   adalah pola (untuk digunakan dalam pencarian).
            i adalah pengubah (memodifikasi pencarian menjadi kasus-insensitive).
*/

let str = "abcdefghijklmnopqrstuvwxyz";
hasil = str.search(/c/);
console.log(hasil);
//output : 2  ini artinya huruf c ada di index ke 2


var kalimat = "aku sayang kamu";
var hasil2 = kalimat.replace("sayang", "cinta");  //replace artinya mengubah nilai string kata sayang di ubah jadi cinta
console.log(hasil2);


//output : aku cinta kamu  