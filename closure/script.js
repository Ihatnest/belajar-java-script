// Closure
// "Menurut ku Closur adalah sebuah function yang memiliki data dan bisa mengambil data/variable dari parent function." -ihat

// contoh 1

function init(){ // parent function
    let nama = 'ihat'; // local variable
    function tampilanNama(){ // inner function (closure)
        console.log(nama); // akses ke parent variable
    }
    console.dir(tampilanNama)
    
}
init()

// kenapa mengunakan closure 
// kata MDN-"untuk membuat private method"

// contoh 2

function init2(){
    return function(nama){
        console.log(nama);
    }
}
// init2() jadi kalo pake ini aja ngga akan jalan karna ini ibarat nya tereksekusi setengah maka nya ditambah argument baru yaitu panggilNama ;
let panggilNama = init2();
panggilNama('uhat')
panggilNama('shat')

// contoh 3

function init3(waktu){
    return function(nama){
        console.log(`selamat ${waktu} ${nama}`)
    }
}

let pagi = init3('pagi');
let malam = init3('malam');
let sore = init3('sore');
let siang = init3('siang');

malam('ihat')

// contoh 4

let test = function(){
    let nomor = 0;
    return function(){
        return ++nomor
    }
}

let nomor = 100; // pengacau nya
let a = test(); // mengunakan ini nah di bawah ngga menggunakan ini tinggal pakai func hitung() doang
console.log(a())
console.log(a())

let test1 = (function(){
    let nomor1 = 0;
    return function(){
        return ++nomor1
    }
})(); // jadi ini kita tamabahkan () di sebelum func dan sesudah dana kita tamabahka  lagi () sesudah ) ajr bisa dapat jalan dengan sendiri nya  

let nomor1 = 100; // pengacau nomor1
// lihat kita tidak perlu manambahkan sebuah variable baru untuk memanggil pertama ngga pake setengah stengah jadi jala ke variale biasa nya saja
console.log(test1())
console.log(test1())
