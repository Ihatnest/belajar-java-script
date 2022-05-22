// higher order function
// "function yang beroperasi pada function yang lain baik itu digunakan dalam argument maupun sebagai return value"
//"javascript memeperlakukan function sebagai object"
// callback adalah adalh paremeter yang menjadi function
// contoh
// function tugas() adalah higher order function
function tugas(mataPelajaran,selesai){// selesai itu dipanggil call back karena dia adalah paremeter yang function
    console.log(`mengrjakan tugas ${mataPelajaran}`);
    selesai(mataPelajaran)
}
 let selesai = function(mataPelajaran){
    console.log(`oke tugas ${mataPelajaran} selesai`)
}

tugas('mtk',selesai)

// contoh 1
// setTimeout adalah higher order function
// function() adalah callback
setTimeout(function(){
    console.log('ihat');
},5000)

// // contoh 2
// const tombol = document.querySelector('.submit')
// tombol.addEventListener('click',function(){
//     console.log('sapi')
// })
// jadi tombol.addEventListener adalah higher order function
// function() adalah callback

// contoh 3
function ucapan(waktu){
    return function(nama){
        console.log(`halo ${nama} selamat ${waktu}`)
    }
}
let selamatmalam = ucapan('malam')
selamatmalam('ihat')

// kenapa?harus menggunakn ini
// "semakin besar sebuah program semakin tinggi kopleksitipitasnya, semakin membingukana program nya"
// "menurut ku agar membuaat membuat program menjandi simple  sepeti function di dalam function atau code yang tidak berfunction di jadi kan function agar memudah kan pengubahan komponen di dalam code"
// "ada dua cara merangcang sebuah sofware: cara pertama adalah untuk memebuat program se sederhana mungkin sehoingga jelas jelas tidak ada kekurangan nya, dan cara lain adalah untuk mrmbuat pogram sekompelk mungkin shinga tidak ada kuranga yang jelas."
// contoh 
let total = 0, count = 1;
while(count <= 10){
    total += count;
    count += 1;
}
console.log(total)
// jangan mengunakan seperti diatas karena ini tidak episint saat kita mau misal kita ngga mau 10 100 misal jadi kita perlu edit code nya lagi kan kalo pake function kita tinggal kita ganti argument nya saja

        // VS

//  kalo ini sangat mudah apa bila kita mau ganti nilai dari function ini tinggal ganti argument nya saja jadi ini lah yang dimaksud ketika ada code sistem yang tidak pake function lebih baik ditambah kan function nya saja 
function hitung(berapa){
    let count1 = 1, total1 = 0;
    while(count1 <= berapa){
        total1 += count1;
        count1 += 1
    }
    return total1
}

console.log(hitung(10))
// contoh lagi yang lebih dinamis

for(let t = 0;t<=10;t++){
    console.log(t)
}

// jadi ini lebih dinamis tidak perlu mengubah code diatas  
function penghit (nilai,aksi){
    for (let r = 0; r <= nilai;r++) {
        aksi(r)
    }
    
}

penghit(10,console.log)
penghit(1,alert)



// not ini









