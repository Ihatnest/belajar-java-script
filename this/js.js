// this adalah keyword speciallyang secara otomatis mendifinisikan pada setiap function
// jadi this===window
// console.log(this);

// funcition declaration
function coba(){
    console.log(this);
    console.log('hellow');
}
coba();
// ini dia akan mengeluarakan yang this global
// object literal
var obj = {nama : 'ihat', a : 10};
obj.nama = function(){
    console.log(this);
    console.log('hallo');
};
obj.nama();
// ini dia akan mengeluarkan apa yanag ada di obj nya maksud nya itu this nya ya yang buat bisa seperti itu
// contrator
function halo(){
    console.log(this);
    console.log('hallo');
};
new halo()
// jadi ini sipat nya adalah dia akan mmengeluarkan new hello nya 
