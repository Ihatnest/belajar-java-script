// execution context,hoisting,scope

// cretion prase pada global context
// jadi ini ketika kita buat var/function si javascript akan mencari var/funcetion itu kalo ada dia akan membuat 
// var nama = undefined
// function = fun()  di isi dengan diri nya sendiri yaitu text fun itu sendiri
// jadi dua di atas ini termsuk kedalam teori hoisting
// contoh variable
// contoh 1
console.log(nama1);
var nama1 = 'ihat';

// contoh 2
var nama = 'ihat';
console.log(nama);

// contoh function

console.log(nama3);
function nama3() {
    console.log('sapi')
};
nama3()

// excuting phase 
// jadi contoh 1 itu gini ceritanya jadi javascript itu dia mencari dulu apakah ada var\fun di dalam kalo ada ia akan buat var nama1 = undefined lalu dia eksekusi consol.log(nama1) dan hasil undefined
// contoh 2 jadi javascript dia difinisikan bahwa var nama = undefined lalu dia lihat ada var nama = 'ihat' dia gnti lah undefend itu jadi 'ihat' lalu dia lihat ada nama dipangil oleh consol dana hasil nya ihat
// contoh function jadi java script itu dia mencek juga sebuah function lalu dia jadikan function itu menjadi isi func itu sendiri lihat pada console.log(nama3) itu di di atas func lo dia tau aja isi sunc di bawah nya ya karna yanag di hoisting itu masuk ke global/window. lalu nama3() di eksekusi jadilah sapi ingata ya yang di hoisting itu tidak masuk ke console log


// untuk membanatu lebih paham coba cari di google javascript visualzer

function  a () {
    console.log('a');
    function b () {
        console.log('b');
        function c () {
            console.log('c')
        };
        c()
    };
    b()
};
a()
// dan paste code ini

// scope

console.log(fungsi)
var name = 'ihat';
var umuur = 10;

function fungsi()
