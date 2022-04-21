// Object.create()

// object literal
// keelmahan dari ini adalah kita harus buar variable lagi dan itu dapat menamabah memori
// let user = {
//     nama : 'ihat',
//     darah : 100,
//     makan : function (porsi){
//         this.darah += porsi;
//     }
// };
// let use1 = {
//     nama : 'ihat',
//     darah : 100,
//     makan : function (porsi){
//         this.darah += porsi;
//     }
// };

// function declaration
// ini lumayan efetif tidak seperti diatas dicuman menulis argument saja tapi di disini setiap argument yang di panggil akan memciptakan function baru seperti data.makan untuk argument baru jadi ini masalah di memori
// masalah memori
// function user(nama,darah){
//     let data = {};
//     data.nama = nama;
//     data.darah = darah;
//     data.makan = function makan (porsi){
//         this.darah += porsi;
//     };
//     data.tidur = function tidur (jam){
//         this.darah += jam*2;
//     };
//     return data;
// }
// let ihat = user('ihat',100);
// let hat = user('uhat',100);
// penutup

// solusi
// kita pisah function nya
// ini juga ada masalah nya tapi ini labih efketif dari dia atas untuk mengatasi memori, tapi ini kita perlu mendaftarkan method baru lagi ketika kita buat function tapi adalagi yang lebih efektif lagi 
// const status = {
//     makan : function makan (porsi){
//         this.darah += porsi;
//     },
//     tidur : function tidur (jam){
//         this.darah += jam * 2;
//     },
//     war : function war (jam){
//         this.darah -= jam * 5;
//     },
    
// };
// function user(nama,darah){
//     let data = {};
//     data.nama = nama;
//     data.darah = darah;
//     data.makan = status.makan;
//     data.tidur = status.tidur;
//     data.war = status.war;
//     return data;
// }
// let ihat = user('ihat',100);
// let hat = user('uhat',100);

// jadi ini adalah yang sangat efektif mengunkan Object.create() 
const status = {
    makan : function makan (porsi){
        this.darah += porsi;
    },
    tidur : function tidur (jam){
        this.darah += jam * 2;
    },
    war : function war (jam){
        this.darah -= jam * 5;
    },
    
};
function user(nama,darah){
    let data = Object.create(status);
    data.nama = nama;
    data.darah = darah;
    return data;
}
let ihat = user('ihat',100);
let hat = user('uhat',100);
// penutup

// construtor function
// keyword new
// function user(nama, darah) {
//     this.nama = nama;
//     this.darah = darah;
//     this.makan = function makan(porsi) {
//         this.darah += porsi;
//     };
// }
// let ihat = new user('ihat',100)
