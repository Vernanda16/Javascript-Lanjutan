//regular expression test()
/*
The test() metode adalah metode ekspresi RegExp.
Ini mencari string untuk pola, dan mengembalikan benar atau salah, tergantung pada hasil.
Contoh berikut pencarian string untuk karakter "e" :
*/

var kalimat = "aku sayang dan cinta kamu";
cek = /sayang/.test(kalimat);
console.log(cek);
//output : true  karena kata sayang ada dalam string variable kalimat


var contoh2 = /k/;
cek2 = contoh2.test("aku ingin kau jadi milikku");
console.log(cek2);


//output : true karena huruf k ada pada string 