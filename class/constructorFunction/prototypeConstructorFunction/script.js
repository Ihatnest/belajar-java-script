function Nama(nama,kelas) {
    this.nama = nama
    this.kelas= kelas
}
function umur(umur,nama,kelas){
    this.umur = umur
    Nama.call(this,nama,kelas)
}
umur.prototype.sayBye = function () {
    console.info(`bye ${this.nama}`)
}
const naga = new umur(1,'sapi',10)
const sapi = new umur(1,'naga')

naga.sayBye()
console.log(sapi)
