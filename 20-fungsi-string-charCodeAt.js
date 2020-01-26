//fungsi string.charCodeAt()
/*
Method String.charCodeAt() berfungsi untuk mengambil nilai Unicode atau ASCII karakter dari String. Method ini 
membutuhkan 1 buah argumen angka yang diisi dengan posisi karakter yang akan diambil, dimulai dari urutan 0 
untuk karakter pertama, urutan 1 untuk karakter kedua, dan seterusnya. 
*/

function kodeAt(){
    var kalimat = " INi contohh kalimat biasa";

    console.log(kalimat.charCodeAt(5)) //ini artinya index ke 5 memiliki kode ASCII apa? lihat output
}

kodeAt();