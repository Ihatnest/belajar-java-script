function nama(nama){
    this.nama = nama;
}

function nama1(nama){
    this.nama = nama;
}
// kalo mengunakan ini dia tidak memariskan proto tapi mengantikan proto
// nama.prototype = nama1.prototype; // salah
// ini kita buat lagi object nya 
nama.prototype = Object.create(nama1.prototype); // benul


nama.prototype.sayHal = function (nama) {
    console.log(`hai nama saya ${this.nama} kamu ${nama} ya`)
}
nama1.prototype.sayHal = function (nama) {
    console.log(`hai nama1 saya ${this.nama} kamu ${nama} ya`)
}

const sapi = new nama('sapi');
sapi.sayHal('sapu')
const naga = new nama1('naga');
naga.sayHal('nago')

console.log(sapi)
console.log(naga)
