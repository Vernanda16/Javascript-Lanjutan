//mencari bilangan kelipatan 5 dengan modulus

bilKelipatan = function(){
    var bil = [];
    for(let i=1; i<=50; i++){
        if(i%5===0){
            bil.push(i);
        }
    }

    return bil;
}

console.log(bilKelipatan());

//output
/*
[
   5, 10, 15, 20, 25,
  30, 35, 40, 45, 50
]
*/
