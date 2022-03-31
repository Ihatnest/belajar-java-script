// perbedaan function declaration dan function expression
// 1.function declaration
//  a.lebih fleksible dapat ditulis di mana pun 
//      1.karena konsep hoisting adalah konsep yang bisa membuat kita meletakan argument si function dimana pun mau di atas function nya atau pun di bawah nya 
//  b.mudaha dipahami pemula 
// 2.funcition expression
//  a.harus didefinisikan  terlebih dahulu sebelum di panggil
//  b.lebih paweerfull
//      1.sebagai closure
//      2.sebagai argument untuk function lain
//      3.IIFE(immeediately invoked funcition expression)


// 1.function declaration
nama('uhat');
function nama(nama){
    console.log('hai ' + nama)
};
nama('ihat');

// 2.funcition expression
var nama1 = function(nama){
    console.log('hai ' + nama)
};
nama1('khat');
