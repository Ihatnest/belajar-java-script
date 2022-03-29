// scop
// jadi scop adalah bagamana sebuah variabledapat diakses dalam program ada dua jenis scop
// a.block scop
// b.function scop
// a.block scop hanya berlaku di dalam block {} ini saja jadi variable yang ada didalam block  itu tidak dapat diakses
// b.function scop itu dapat mengakases suatu variable di dalam block tetapi tidak dapat/dapat mengakases variable di funcition lihat di bawah 

var a = 2; // ini nama nya variable global/window
function scop(){
    var b = 1; // ini nama nya local variable
};
console.log(a)
// console.log(b)
scop()
// kalo begini dia tidak bisa jadi ibarat nya itu lu punya sebuah mobil yang kaca filem nya gelap bet nah disitu kan lu bisa lihat luar tapi orang luar ngga bisa lihat lu didalam jadi angap ae funcition itu mobil

// jadi ini dia bisa akses variable di luar local nya atau disebut variable global/window
var a = 3;
function scop1(){
    var b = 1;
    console.log(a)
};
scop1()
// jadi teori nya sama kaya diatas tadi yang kaya mobil lihat ke luar 



// ini jadi ini ketika kita masukan pemangil nya ke dalam local/function maka akan mamangii variable yang dia panggil. jadi dia kan cek dulu ada tidak variable yang dia pangil di dalam funcition yang dia tempati kalo ada maka dia akan mengunakan itu meskipun ada variable di global yang nama nya sama deng yang dia panggil
var a = 100;
function scop4(){
    var a = 200;
    console.log(a)
};
scop4()
// nah ini untuk meberi spesifikasi baha wa yang dia panggil adaalah yang variable window/global jadi dengan menambahkan window untuk membuat nya 
var a = 300;
function scop5(){
    var a = 400;
    console.log(window.a) // ini
};
scop5()

// jadi ini sudah pasti ya ini akan akan ngesekui yang local ya karna paremeter it adalah variable di funciton local nya jadi prioritas gitu
var a = 3212;
function scop6(a){
    console.log(a);
};
scop6(44);
console.log(a);

// nah kalo ini bisa karena javascript akan membuat kan sebuah var b di global maeskipun itu tak telihat  ya;
var a = 4;
function scop7(){
    b = 1;
};
scop7()
console.log(a)
console.log(b)

// ini bdeda lagi ini dia akan bespusat dengan b global kaya nya yak ;) ntar wa riset lagi nanti
var b = 900; //global/widow
function scop8(b){ //local
    console.log(b) //local
};
scop8(b); //global/widow
console.log(b); //global/widow
