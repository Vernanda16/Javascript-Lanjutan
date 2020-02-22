//fungsi split


function contoh1(){
    var kalimat= "ini contoh kalimat aku gaes";

    console.log(kalimat.split());
    console.log(kalimat.split(""));
}

contoh1();

console.log("\n");

function contoh2(){
    var kalimat = "ini contoh klaimat aku gaes";

    console.log(kalimat.split());
    console.log(kalimat.split(""));
}

contoh2();


//output
/*
[ 'ini contoh kalimat aku gaes' ]
[
  'i', 'n', 'i', ' ', 'c', 'o',
  'n', 't', 'o', 'h', ' ', 'k',
  'a', 'l', 'i', 'm', 'a', 't',
  ' ', 'a', 'k', 'u', ' ', 'g',
  'a', 'e', 's'
]


[ 'ini contoh klaimat aku gaes' ]
[
  'i', 'n', 'i', ' ', 'c', 'o',
  'n', 't', 'o', 'h', ' ', 'k',
  'l', 'a', 'i', 'm', 'a', 't',
  ' ', 'a', 'k', 'u', ' ', 'g',
  'a', 'e', 's'
]
*/