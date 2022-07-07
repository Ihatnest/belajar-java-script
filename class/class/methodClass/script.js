class nama {
    constructor (nama) {
        this.nama = nama;
        // this.sayBye = function (nama) {
            // console.info(`bye ${nama}`) // ini sangat tidak disarankan 
        // }
    }
    sayBye(nama) {
        console.info(`bye ${nama} ${this.nama}`) // sangat disaran kan
    }
}

const naga = new nama('sapi');
console.log(naga)
naga.sayBye('naag')

const sapi = new nama('sopo');
console.log(sapi)
sapi.sayBye('sopi')