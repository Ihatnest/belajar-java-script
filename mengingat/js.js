// object literal
// let user = {
//     nama : 'ihat',
//     darah : 100,
//     makan : function (porsi){
//         this.darah += porsi;
//     }
// }
// function declaration
// function user(nama,darah){
//     let data = {};
//     data.nama = nama;
//     data.darah = darah;
//     data.makan = function makan (porsi){
//         this.darah += porsi;
//     };
//     return data;
// }

// let ihat = user('ihat',100);
// let hat = user('uhat',100);

// construtor function
// keyword new
function user(nama, darah) {
    this.nama = nama;
    this.darah = darah;
    this.makan = function makan(porsi) {
        this.darah += porsi;
    };
}
let ihat = new user('ihat',100)
