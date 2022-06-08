// ascycronous function 
// "sebuah function yang bekerja secara ascycronous (melalui eventloop) ynag menghasilkan (implisit) promise sebagai return value nya tapi cara penulisan code nya menggunkan penulisan yang scrononous (setandar)"
// fungsi yang berjalan secara asyncronous
// menghaasikan (implisit) promise
// cara penulisannya sama sperti ayncronous function (function biasa)

// "sebuah async function dapat memilih keyword await di dalam nya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise nya selesai"

//  "async await menurut saya, async tugsa nya menadai bahwa didalam fungsi ada yang di await yaitu di tunggu dulu itu selesai baru dieksekusi"

// contoh 
// const test = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('done')
//     }, 1000);
// });

// test.then(test => console.log(test))

// ini adalah contoh mengunkana then tapi disini kita akan mengunaka async await

// function testt (){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('done')
//         }, 1000);
//     });
// }

// async function i(){
//     const test = await testt()
//     console.log(test)
// }
// i()
// jadi ini kalo dibaca gini oke function i async ada yang perlu kita tunggu dulu yaitu await testt() jadi tunggu sape selesai baru kita ekseskusi yak 
// jadi dia tunggu dulu fungi test sampai selesia baru eksekusi jadi dia itu lagi didalam callback 

function testt(){
    return new Promise((resolve, reject) => {
        let angka = 5000;
        if(angka < 5000) {
            setTimeout(() => {
                resolve('done')
            }, angka);
        } else {
            reject('kelamaan');
        }
    });
};

async function usapi() {
    try {
        const test = await testt();
        console.log(test);
    } catch (err) {
        console.error(err);
    }
};
usapi()