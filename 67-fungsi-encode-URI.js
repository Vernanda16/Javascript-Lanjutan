//fungsi encodeURI()
/*
Kegunaan Javascript encodeURI itu adalah untuk mengeliminasi string di url sehingga bisa menjadi URL Friendly.
Fungsi ini mengkodekan semua karakter khusus, kecuali:, /? : @ & = + $ # (Gunakan encodeURIComponent () 
untuk menyandikan karakter ini).
*/

var uri = "my test.php?name=ståle&car=saab";
var res = encodeURI(uri);

console.log(res);



//output
//my%20test.php?name=st%C3%A5le&car=saab