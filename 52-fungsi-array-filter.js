//fungsi array filter 
//digunkan untuk filtering terhadap sebuah data fungsi ini melakukan return

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