// arrow function
// menurut saya ini bentuk sinkat function dan lebihh fleksible

// contoh code nya

let nama = (nama) => {
    console.log(nama);
};
nama('ihat')

// cara cara buat nya

// 1
const tpnama = (nama) => {return `${nama}`}
console.log(tpnama('uhat'))

// 2
const tpnama1 = (nama,waktu) => {return `${nama} selamat ${waktu}`}
console.log(tpnama1('uhat','pagi'))

// implisit retun
// jadi ini sangat ringkas ini berlaku saat parameternya satu saja. dan isi nya hanya riten saja ngga ada yang lain

// contoh 1 tanapa () di paremeter nama dan {} di isi func itu sendiri 
const tpnama3 = nama => `hallo ihat`;
console.log(tpnama3())

// contoh 2 sama di seperti dia atas tapi ini tanpa nama paremater hanya ()
const tpnama4 = () => `hallo uhat`;
console.log(tpnama4())


// kasus 1 menggunakan array
let nama2 = ['ihat','sapi']
let jumlahNama = nama2.map(nama2 => nama2.length);
console.log(jumlahNama)

// kasus 2 mengunakan object
let nama3 = ['ihat','sapiw']
let jumlahNama3 = nama3.map(nama3 => ({nama:nama3, jumlahAngka:nama3.length}));
console.table(jumlahNama3)

// note jika properti sama dengan yanag di panggil itu bisa kita tulis propertinya saja contoh
let nama4 = ['ihat','sapiw']
let jumlahNama4 = nama4.map(nama4 => ({nama4, jumlahAngka:nama4.length}));
console.table(jumlahNama4)


// yanag bisa dibauat dengan ini adalah ya memepertsikat sebuah func yanag paremeternya hanya satu dan tedak perlu pake retun lagi ingat hanaya berlaku apa bila hanya tidaka ada akasi lain
