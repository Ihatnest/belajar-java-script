// promise 
// promise adalah object yang memperesentsikan kerbehasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang

// janji (terpnuhi/ingkar)
// states(fulfilled/rejected/pending)
// callback(resolve/reject/finally)
// aksi(then/catch)
// jadi menurut ku then itu success di jquery kalo catch itu error
// contoh 1
// let ditepati = true;
// const janji = new Promise((resolve,reject)=>{
//     if(ditepati){
//         resolve('tertepati')
//     }else {
//         reject('tidak tertepati')
//     }
// });

// janji
// .then(response => console.log('oke ' + response))
// .catch(response => console.log('oke not ' + response))

// contoh 2

// let ditepati1 = false;
// const janji1 = new Promise((resolve,reject)=>{
//     if (ditepati1){
//         setTimeout(() =>{
//             resolve('tertepati')
//         }, 2000);
//     }else{
//         setTimeout(()=>{
//             reject('tidak tertepati')
//         }, 2000);
//     }
// });

// console.log('mulai')
// janji1
// .finally(()=> console.log('selesai menunggu'))
// .then(response => console.log('trpenuhi ' + response))
// .catch( response => console.log('tidak terpenuhi ' + response))
// console.log('selesai')

// contoh promise all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'ihat',
            pemeran: 'sapi'
        }])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            kota: 'marsh',
            temperatur: 26,
            kondisi: 'cerah'
        }])
    }, 500)
})

// film.then(renspon => console.log(renspon))
// cuaca.then(renspon => console.log(renspon))

// Promise.all([film,cuaca]).then(respon => console.log(respon));
// atau 

Promise.all([film,cuaca])
    .then( respon => {
        const [film,cuaca] = respon;
        console.log(film)
        console.log(cuaca)
    })

