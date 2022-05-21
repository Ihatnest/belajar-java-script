// this tehadap arrow function 
// kasus 1

const aapo = function(){// ini ngga bisa di ganti function kenarena dia ngga meiliki konsep this apa bila ini pake arrow func maka akan error dia juga ngga bisa jadi contrator function ketika  kita panggil mengunakan new dan function nya arrow dai akan error inti nya function
    console.log(this)
    this.nama = 'sapi';
    this.umur = 50;
    this.salam = function(){ // ini tidak ada beda nya dengan function biasa diatetap manggil di dalam juaga this nya
    // kaya nya di mathod tidak ada beda nya pake fuction arrow atau pun function biasa diatas itu method yak kawasan this nya didalam function
        console.log(`sss${this.nama}`)
        console.log(this)
    };

    setInterval(()=>{ // kalo ini harus pake arrow fungsition kalo pake function biasa this nya itu ke window kalo pake arrow dia akan mengambil di dalam function karena dia itu lah sifat nya thadap this karena selaian method dia ngga bisa pake function biasa harus arrow dan ini ngarus pada pemangil nya ya kalo pake new sebalik nya
        console.log(`${this.nama}`)
        console.log(this)
    },500);
}
let tes = new aapo()
tes.salam()
//kesimpulan yang kudapat kan ketika kita pangil function ini mengunakan construktor function yang naambah new itu maka kawasan this itu hanya didalam funtion itu saja tapi apabila kita mengunakan pemangil function biasa saja ngga pake new maka kawasan this itu sampe ke window jini juga mempengaruhi objct yang di bawah jadi apa bila kita tambah new maka function itu akan kek jadi privat gitu dia tidak akan keluar semua variable yang di baut 




// jadi ini akan berbeda ketika kita menggunakan sebuah object literal

const obj = {
    nama: 'naga',
    umur: 30,
    salam1: function(){// kalo menggunaka function biasa dia akan mengambil this di dalam objek saja karna ada this karena this.nama sama aja inti nya. object itu mini window kalo pake fuction biasa. tapi bila mengunakan arrow function dia tidak akan mengambil yang didalm karena this di dalam object tidak ada lalu dia akan mencari this di window dan menemukan this yang lain maka dia akan masukan this nya. coba saja ganti function itu dengan fuction arrow. jadi kesimpulan nya adalah ketika kita mletakan sebuah function arrow di dalam object literal dan mengunakan pemagilan this maka dia akan mengecek keluar yaitu window dan apabial mengunakan function biasa maka this akan bernilai ya didalam object saja kalo arrow kan window.jadi arrow itu akan mencari sesuatu yang bernama this di awal dan function biasa this nya adalah didalam object dan this nya arrow window adalah kawasan mencari nya karna tidak ada this di object
    // kini nah // function bisa. this.nama = nama // arrow fuction. this.nama tidak= nama karena ngga ada this.nama disini yang pure this.nama diaharus menemukan this.nama baru dia console oke
        console.log(`ini${this}`)
        console.log(`hai ${this.nama} kamu umur ${this.umur} ya `)
    }
}

obj.salam1()
// seperti itu lah kosep nya menurut ku okey 














