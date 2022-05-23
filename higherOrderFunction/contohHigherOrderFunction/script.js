// jadi ini higher order functionn yang sering di gunakan 
// filter,map dan reduce
// array.prototype.filter()
// array.prototype.map()
// array.prototype.reduce()
const angka = [1,2,3,4,5,6,7,8,9,10]
console.log(angka)

// filter
const newAngka = angka.filter(a => a < 5)
console.log(newAngka)
// penjelasan
// jadi mengunakan arrow function ekperesion mengunakan fuction bisa juga bisa
// jadi ini fungsi dari filter ini adalah dia memfilter angka di atas catatan a adalah definisi dari setiap angka di array jadi dia adalah angka angka itu jadi function nya dia suruh mencari a < 5 jadi di dalam array itu mana angka yang kurang dari 5/a<5 

//map 
const newAngka1 = angka.map(a => a+2)
console.log(newAngka1)
// penjalasan 
// jadi mengunakan arrow function ekperesion mengunakan fuction bisa juga bisa
// jadi ini fungis dari map ini dia kan eksekusi ke +*-/ dia yang lakuin thadap angka di atas jadi analogi a adalah setiap anka di dalam array atau yang mewakili setiap isi dari array lalu dia tambah semua dengan 2 jadi lah hasil nya setiap isi array di tambah 2

// reduce
const newAngka2 = angka.reduce((accumulator,currentValue)=> accumulator+currentValue);
console.log(newAngka2)
// penjelasan
// jadi mengunakan arrow function ekperesion mengunakan fuction bisa juga bisa
// 0+1+2+3+4+5+6+7+8+9+10 ini adalah analogi nya jadi 0 itu dari ketika accumulator+currentValue nilai di akhir maka 0 jika seperti iini accumulator+currentValue,3 maka akan 0 akan jadi 3 jadi 3+1+2+3 dan sterusnya gitu jadi itu juga bisa pake +*/- bisa lah
// note 
// accumulator,currentValue bisa saja diganti apa pun nama nya tapi accumulator currentValue itu hanya istilah nya saja biar lebih mengerti
// accumulator itu adalah 0+1=2 lalu 2+2=4. 0 mungkin bisa disebut accumulator pertama lalu 0+1= meghasil kan accumulator baru lalu di tambah dengan currentValue nah kalo currentValue itu sama saja kaya a diatas tadi kan mewakili isi array

// method chaining
//cari angka < 5
// kalikan 2
// jumlahkan

const hasil = angka.filter(a => a<5).map(a => a * 2).reduce((acc,cur)=> acc+cur);
// .filter(a => a<5) menhasilkan angka yang a<5 = 1,2,3,4
// .map(a => a * 2) menhasilkan angka yang dapat dari filter tadi lalu di kali 2 = 1*2,2*2,3*2,4*2
// .reduce((acc,cur)=> acc+cur) lalu ini menambah dari 1*2+2*2+3*2+4*2 = 20
console.log(hasil)
// note jadi ini map atau filter atau reduce lebih dari satu bia yak 
// note lagi ini higher order fuction yang sering dipake ae ya dan masih banyak lagi higher order fuction yang lain jan lupa  blajar yang lain yak
