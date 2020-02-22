/*
Ada dua cara untuk bikin regex di JavaScript. Kita bisa bikin objek RegExp atau pake string biasa.

var re1 = new RegExp(/\d/g);
var re2 = /\d/g;

var s = 'abc123def vwxyz456';

console.log(s.match(re1));
console.log(s.match(re2));

Regex biasanya dipake untuk fungsi-fungsi String seperti match(), search(), replace().
Tapi Regex juga punya fungsi sendiri yang juga sering dipake seperti test() & exec().
*/

//regular expression exec
//digunkan untuk mengembalikan string yang menemukan kecocokan, jika tidak maka akan mengembalikan nilai null

let kalimat = "aku ingin jadi programmer sukses";
let str = new RegExp("programmer");

console.log(str.exec(kalimat));


//output
/*
[
  'programmer',
  index: 15,    //artiya kata programmer ada pada index ke 15
  input: 'aku ingin jadi programmer sukses',
  groups: undefined
]
*/

