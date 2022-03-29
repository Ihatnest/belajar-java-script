// parameter/argument

function tambah(a,b){
    return a + b;
}
// retrun adalah sebuah penyelesai ibarat nya kaya gini dia berbicara. ini yang saya lakukan di function jadi dia adalah akhir. dan yang beritahu apa yang akan di eksekusi
console.log(tambah(2,4));
console.log(tambah(2*3,4*5));
console.log(tambah(2,4)+tambah(2,5));
// Kenapa mengunaknan parseInt karna kalo tidak mengunkana itu maka akan mrenjadi tipe data string dan hanya akan di gabung saja bukan di tambah
var a = parseInt(prompt('masukan nilai 1'));
var b = parseInt(prompt('masukan nilai 2'));
console.log(tambah(a,b));
console.log(tambah(a+2,b+2));
// /jadi ini ketika ada argument yang kelebihan maka akan di abaikan dab disimpan di variabel arry yang bernama arguments
