//mencari bilangan genap dengan modulus
function contoh(){
   var bilGenap = [];

    for(var i =1; i<=10; i++){
        if (i%2===0) {
            bilGenap.push(i);
        }
    }

    return bilGenap;
}
console.log(contoh());

//output [ 2, 4, 6, 8, 10 ]



//mencari bilangan ganjil dengan modulus
contoh2 = ()=>{
     bilGanjil = [];

     for (let i = 1; i <=30; i++){
         if(i%2!==0){
            bilGanjil.push(i);
         }    
     }
     return bilGanjil;
}
console.log(contoh2());

//output
/*
[
    1,  3,  5,  7,  9, 11,
   13, 15, 17, 19, 21, 23,
   25, 27, 29
 ]
 */