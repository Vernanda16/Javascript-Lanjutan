//fungsi array reduce()
/*
reduce artinya mengurangi/memperkecil dari sumber google translate, Berarti reduce array jika di artikan
adalah mengurangi/memperkecil sebuah array, jadi lebih tepatnya metode reduce array berlaku fungsi secara 
bersamaan terhadap 2 nilai dari dalam array (dari kiri ke kanan) untuk mengurangi ke nilai tunggal.
*/


//fungsi reduce()
var arr1 = [1,2,3,4];
const reducer = (accumulator, currentvalue) => accumulator + currentvalue;

console.log(arr1.reduce(reducer));  //ini artinya akan menjumlahkan isi array dan outputnya adalah 10

console.log(arr1.reduce(reducer, 5)) //ini artinya menjumlahkan isi array yang ada di tambah 5


//fungsi reduceRight()
    const arr2 = [[1,2], [3,4], [4,5]];



    

//output yang dihasilkan akan menampilkan isi array dari kanan ke kiri  [4,5,3,4,1,2]
    hasil = arr2.reduceRight((accumulator, currentvalue) => accumulator.concat(currentvalue));

    console.log(hasil);