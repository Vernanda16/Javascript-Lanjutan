//mencari bilangan ganjil dengan operator modulus

bilGanjil = ()=>{
    var bilangan = [];
    for(i=1; i<=10; i++){
        if(i%2!==0){
            bilangan.push(i);
        }
    }

    return bilangan;
}

console.log(bilGanjil());

//output [ 1, 3, 5, 7, 9 ]

