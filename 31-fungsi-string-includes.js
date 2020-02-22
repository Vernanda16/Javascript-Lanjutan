//fungsi string includes
//berguna untuk mengecek apakah string ada di dalam kalimat
//fungsi ini akan mengecek secara case sensitif dan tipe data 


function strIncludes(){
    var kalimat = "ini contoh kalimat";

    console.log(kalimat.includes("contoh")); //ini artinya akan mengecek apakah ada kata contoh didalam variable kalimat, yang di cek tidak hanya tipe data tapi juga case sensitif
    console.log(kalimat.includes("mat")); //ini akan menampilkan nilai true karena mat ada pada kata kalimat
}

strIncludes();

//output
/*
true
true
*/
