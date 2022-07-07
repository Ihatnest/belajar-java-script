class nama {
    constructor(nama,umur){
        this.nama = nama
        this.umur = umur
    }
}
class nama1 extends nama {
    constructor(nama,kelas,umur){
        super(nama,umur)
        this.kelas = kelas
    }
    sayBye(nama) {
        console.info(`bye nama1 ${nama} ${this.nama}`)
    }
}

const naga = new nama('sapi');

const sapi = new nama1('sopo','sapi');


console.log(naga)
console.log(sapi)