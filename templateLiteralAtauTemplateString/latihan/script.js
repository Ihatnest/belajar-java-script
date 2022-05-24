// Html fargment
// let data = {
//     nama:'ihat',
//     umur:20,
    
// }
// let el = `
// <h1>Data</h1>
// <ul>
//     <li>Nama : ${data.nama}</li>
//     <li>Umur : ${data.umur}</li>
// </ul>`
// document.body.innerHTML = el;
// jadi ini you know lah

// looping
// let data = [
//     {
//     nama: 'ihat',
//     umur:20
//     },
//     {
//     nama: 'i',
//     umur:20
//     }
// ]
// let el =
// data.map(a => 
// `<ul>
//     <li>Nama : ${a.nama}</li>
//     <li>Umur : ${a.umur}</li>
// </ul>`).join('')
// document.body.innerHTML = el;
// kalo ini meluping setiap isi nya


// kondesi
// let data = [
//     {
//     nama: 'ihat',
//     umur:20
//     },
//     {
//     nama: 'dini',
//     namaBelakang: 'latansa',
//     umur:20
//     }
// ]
// let el =
// data.map(a => 
// `<ul>
//     <li>Nama : ${a.nama} ${a.namaBelakang ? `${a.namaBelakang}` : '' }</li>
//     <li>Umur : ${a.umur}</li>
// </ul>`).join('')

// document.body.innerHTML = el; 
// console.log(data)
// jadi ini adalah kondisi jika user mengunakan nama belakan dan ada yang tidak mengunakam nama belakang

// Nested 
let data =[
    {
    nama: 'ihat',
    semester: 4,
    mataKul: [`mtk`,`fisika`,`kimia`,`biologi`]
    },
    {
    nama: 'sapi',
    semester: 5,
    mataKul: [`fisika`,`kimia`,`biologi`]
    },
    {
    nama: 'sapi',
    semester: 5,
    mataKul: [`fisika`, `kimia`, `biologi`]
    },
    {
    nama: 'sapi',
    semester: 5,
    mataKul: [`fisika`, `kimia`, `biologi`]
    }
]
let el = data.map(dataAll => 
`
<div>
    <h3>${dataAll.nama}</h3>
    <h5>semester:${dataAll.semester}</h5>
    
    <ol type="1">
        ${dataAll.mataKul.map(a => `<li>${a}</li>`).join(' ')}
    </ol>    
</div>
`
).join('')
document.body.innerHTML = el;
// sebenar nya bukan sperti ini karean ini konsep ssebuah function bersarang di dalam nya tapi ini lah menurut ku yang lebih efesien
// jadi ini kondisi apa bila ada data yang memeiliki array 
