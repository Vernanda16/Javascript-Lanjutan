//foreach

function contoh(){
    var data = ['a', 'b', 'c'];

    data.forEach(function(item, index, array){
        console.log(item);
        console.log(index);
        console.log(array);
    })
}

contoh();

//output
/*
a   item
0   index
[ 'a', 'b', 'c' ]   array
b
1
[ 'a', 'b', 'c' ]
c
2
[ 'a', 'b', 'c' ]
*/