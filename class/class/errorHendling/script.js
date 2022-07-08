// class tambah{
//     static sum(...nomor){
//         if(nomor.length === 0){
//             throw new Error("error tidak bisa")
//         }
//         let total = 0;
//         for(let no of nomor) {
//             total += no
//         }
//         return total
//     }
// }
// // 1
// try {
//     console.log(tambah.sum())
//     console.log('test') // jadi ini tidak di jalankan ketika error
// } catch (error) {
//     console.log(`error: ${error.message}`) // ini yang tereksekusi ketika error
// }
// console.log('naga') // tetap akan jalan

// jadi ketika terjadi error program lain tetep akan jalan di hanya menangkap error saja tapi yang di dalam try dia akan berhenti program nya ketika error




// 2 kata kunci finally
// ini akan tetap di eksekusi maju error atau pun tidak 
// try {
//     console.log(tambah.sum())
//     console.log('test1') // jadi ini tidak di jalankan ketika error
// } catch (error) {
//     console.log(`error1: ${error.message}`) // ini yang tereksekusi ketika error
// } finally {
//     console.log('sapu') // tetap akan jalan
// }
// console.log('sapi') // tetap akan jalan


//try finally
class test{
    #nilai = 1;

    test1(){
        // return this.#nilai++ // jadi ibarat nya ke gini tapi di pisah 
        // jadi kita bisa sekaligus dalam kondisi tertentu
        try {
            return this.#nilai; // kalo cuma ini dia bakal 1111
        } finally {
            this.#nilai++ // kalo ini dia bakal undiifine ketika dia aja yang sendiri di sini
        }
        // kalo ngga ke gini this.#nilai++ bernilai 1 1 1 karena keburu di return 
    }
}

const nama = new test()

console.log(nama.test1())
console.log(nama.test1())
console.log(nama.test1())
