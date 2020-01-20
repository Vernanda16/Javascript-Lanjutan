//manipulasi shift dengan array
//

function contohShift(){
    var kota = ["bandung", "bogor", "palembang", "depok", "jogja", "jakarta"];

    console.log(kota);
    console.log("===========");

    kota = kota.shift();
    return kota;
}
console.log(contohShift());