function Nama(nama,kelas) {
    this.nama = nama
    this.kelas= kelas
}
function umur(umur,nama,kelas){
    this.umur = umur
    Nama.call(this,nama,kelas)
}
const naga = new umur(1,'sapi',10)
const sapi = new umur(1,'naga')

console.log(naga)
console.log(sapi)
