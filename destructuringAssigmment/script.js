// destructuring assigment 

// "expression pada javascript yang membuat kita dapat membongkar niai dari arrayatau properti dari object ke dalam variable yang terpisah,"-MDN

// contoh
// array
// const coba = ['satu','dua','tiga'];
// const [a,b,c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// object
// const coba1 = {
//     nama: 'ihat',
//     umur: 30,
//     kelas: 'XI'
// };
// const {nama,umur,kelas} = coba1;
// console.log(nama);
// console.log(umur);
// console.log(kelas);

// destructuring variable/asigment
// destructuring array

// const coba = ['satu','dua','tiga'];
// const [a,b,c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// skipping item
// jadi ini untuk menskip assigment/varible yang tersedia di array
// const coba1 = ['satu','dua','tiga'];
// const [a,,c] = coba1;
// console.log(c);

// swap item
// let a = 1;
// let b = 2
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);
// jadi ini menukar item a jadi b b jadi a

// return value pada function
// function coba() {
//     return [1,2];
// }
// const [a,b] = coba();
// console.log(b)

// rest parameter 
// const [a,...nilai] = [1,2,3,4,5]
// console.log(a)
// console.log(nilai)


// destructuring object

// const data = {
//     nama: 'ihat',
//     umur: 1000
// };
// const {nama,umur} = data;
// console.log(nama)

// assingment tanpa deklarasi object

// ({nama,umur} = {nama: 'ihat',umur: 1000});
// console.log(nama)


// assingment ke variable baru

// const data = {
//     nama: 'ihat',
//     umur: 1000
// };
// const {nama: c,umur: a} = data;
// console.log(c)

// memberikan default value 
// const data = {
//     nama: 'ihat',
//     umur: 1000,
// };
// const {nama: c,umur: a,email = 'email@default.com'} = data;
// console.log(email)
// note kalo ada email di dalam object maka akan diisi yang ada di object

// memberi nilai default assiangment ke variable baru 

// const data = {
//     nama: 'ihat',
//     umur: 1000,
//     email: 'ihats@null.net'
// };
// const {nama: c, umur: a, email: e = 'email@default.com' } = data;
// console.log(e)

// rest paremeter
// let data = {
//     nama: 'ihat',
//     umur: 30,
//     kelas: 'XI'
// };

// const {nama,...value} = data;
// console.log(value)

// mengamabil filed pada object setelah dikirim sebagai paremeter untuk function 
// let data = {
//     id: 5636,
//     nama: 'ihat',
//     umur: 30,
//     kelas: 'XI'
// };
// function getId({id,nama}) {
//     return nama;
// }
// console.log(getId(data))











