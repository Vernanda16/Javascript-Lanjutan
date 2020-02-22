//fungsi konversi 


//konversi tipe data string ke number dengan number()
function konversiNumber(){
    var a = "5";
    var b = 2;

    console.log("sebelum menggunakan method number :", a + b);
    console.log("setelah menggunakan method number :", Number(a) + b ); //tipe data variable a akan di ubah ke integer atau number
}

konversiNumber();
//output
/*
sebelum menggunakan method number : 52
setelah menggunakan method number : 7
*/


/*
JavaScript juga menyediakan fungsi global parseInt() dan parseFloat() untuk menkonversi tipe data string 
menjadi number. Sesuai dengan namanya, fungsi parseInt() akan mengkonversi tipe data menjadi integer dan 
membuang angka dibelakang tanda desimal. Sedangkan fungsi parseFloat() akan mengkonversi tipe data menjadi 
Float (nilai angka dengan desimal).
*/

//konversi float ke integer dengan parseInt()
function konversiparseInt(){
    var a = "13.78";
    var b = "9 naga";
    var c = "100.99 meter";

    hasil = parseInt(a);
    console.log("penggunaan parseInt :", hasil);   
    hasil2 = parseInt(b);
    console.log("penggunaan parseInt ke 2 :", hasil2);
    hasil3 = parseInt(c);
    console.log("penggunaan parseInt :", hasil3);
    hasil4 = parseFloat(a);
    console.log("penggunaan parseFloat :", hasil4);
}
konversiparseInt();



//output
/*
sebelum menggunakan method number : 52
setelah menggunakan method number : 7
penggunaan parseInt : 13
penggunaan parseInt ke 2 : 9
penggunaan parseInt : 100
penggunaan parseFloat : 13.78
*/