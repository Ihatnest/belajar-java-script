// destructuring Function

// array

function kalkulasi (a,b){
    return [a+b,a-b,a*b];
}
const [tambah,kurang,kali,bagi='tidak ada'] = kalkulasi(2,3);
console.log(bagi)
console.log(kali)

// object

const data = {
    nama: 'ihat',
    umur: 40,
    nilai: {
        tugas:90,
        uts: 90,
        uas: 100
    }
};

function cetakData({umur,nama,nilai:{tugas,uts,uas}}){
    return `hai nama saya ${nama} saya umur ${umur} tahun, nilai uts saya ${uts}`
}
console.log(cetakData(data))





