

//fungsi decode()
//Mengkodekan balik hasil dari function encodeURI

var a = "my%20test.php?name=st%C3%A5le&car=saa";
var b = decodeURI(a);

console.log(b);



//output
//my test.php?name=ståle&car=saa