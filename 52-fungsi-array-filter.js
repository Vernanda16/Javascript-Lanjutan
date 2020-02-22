//fungsi array filter 
/*
Method filter, digunakan untuk membantu kita melakukan filtering terhadap sebuah data. Untuk cara 
kerja dari method filter() ini sebenarnya mirip dengan map(). Kedua fungsi ini sama-sama melakukan return, 
bedanya adalah method filter() akan mereturn nilai boolean dalam setiap iterasinya. Setiap return yang 
bernilai true akan direturn pada result array.
*/

var orang = [
    {
        nama : "vernanda",
        jk : "pria"
    },
    {
        nama : "bila",
        jk : "pria"
    },
    {
        nama : "upie",
        jk : "perempuan"
    }
];

let kelamin = orang.filter(orang => {
    return orang.jk === "perempuan";
});

console.log(kelamin);


//output
/*
[ { nama: 'upie', jk: 'perempuan' } ]
*/