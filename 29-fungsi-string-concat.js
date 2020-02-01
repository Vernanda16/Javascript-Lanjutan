//fungsi concat()
//berguna untuk menyambung string
//fungsinya mirip dengan operator plus / +

function strConcat(){
    var kalimat = "saya";

    var kamu = kalimat.concat(" ingin");
    console.log(kamu);

    console.log(kamu.concat(" menjadi", " programmer", " hebat"));

}
strConcat();



//contoh penggunaan operator plus
function operatorPlus(){
    var kalimat = "aku ";
    var kalimat2 = "kamu";

    console.log(kalimat + kalimat2);
}
operatorPlus();