//trim() merupakan fungsi untuk menghapus 2 spasi atau lebih menjadi hanya 1 spasi.
//trim() menghapus spasi diawal dan di akhir kalimat

function cthTrim(){
    var kalimat = "     ini contoh kalimat    ";    //diawal dan akhir kalimat kita beri tab atau spasi

    console.log("Sebelum menggunakan trim()", kalimat);

    console.log("setelah menggunakan trim()", kalimat.trim());
}

cthTrim();