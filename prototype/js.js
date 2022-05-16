// prototype kalo menurut ku adalah sebuah parent dari construtor function 


// construtor function
// function user(nama, darah) {
//     // yang terjadi sebernar nya tapi kita tidak perlu di tulis
//     // let this = Object.create(user.prototype);
//     this.nama = nama;
//     this.darah = darah;
    
//     // return this;
// }
// // analogi ku di sini adalah ketika let this = Object.create(user.prototype) di bawah ini dia masuk ke user trus cari user.prototype lalu dia Object.create makan ya sama kaya construtor function itu kan tugas Object.create itu dia buat sebuah object baru yang namannya makan. jadi kita di bawah ini cuman nambah prototype doang
// user.prototype.makan = function makan(porsi) {
//     this.darah += porsi + 2;
    // return`hai ${this.nama} oke kamu akan makan ${porsi} porsi`;
// };
// user.prototype.tidur = function makan(jam) {
//     this.darah += jam * 2;
    // return`hai ${this.nama} oke kamu akan makan ${porsi} porsi`;
// };

// let ihat = new user('ihat', 100)
// let uhat = new user('ihat', 150)
// penutup 


// kalo dalam class
// karna ini hampir sama saja seperti prototype beda nya cuman lebih mudah dan dan simpel serta lebih mudah di baca.cara kerja class dibalakang nya itu juga prototype juga cuman di sederhanakan.

class user {
    constructor(nama, darah) {
        this.nama = nama;
        this.darah = darah;
    }
    makan(porsi) {
        this.darah += porsi + 2;
        return`hai ${this.nama} oke kamu akan makan ${porsi} porsi`;
    };
    tidur(jam) {
        this.darah += jam * 2;
        return`hai ${this.nama} oke kamu akan tidur ${jam} jam`;
    };
}
let ihat = new user('ihat',100);
let uhat = new user('uhat',150);
// jadi ini prototype mengunakan class


// misal

// let angka = [];
// ini yang terjadi sebenar nya di dalam let angka = [] 
// let angka = new Array()
// function array(){
//   let this = Object.create(array.prototype)
// };

// misal 
let angka = [1,2,3];
console.log(angka.reverse())

// jadi reverse() itu function yak
