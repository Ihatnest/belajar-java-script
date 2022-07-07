class nama {
    sayBye(nama) {
        console.info(`bye nama ${nama} ${this.nama}`)
    }
}
class nama1 extends nama {
    // sayBye(nama) {
    //     console.info(`bye nama1 ${nama} ${this.nama}`)
    // }
}

const naga = new nama('sapi');
naga.nama = 'naga'
naga.sayBye('naag')

// jadi ini ada 2 constructor pertama nama1 dan nama1 itu punya proto dan constructor=nama lalau di dalam proto nama ada constructor=object jadi sape nama aja proto yang di wariskan
const sapi = new nama1('sopo');
sapi.nama = 'sapi'
sapi.sayBye('sopi')

console.log(naga)
console.log(sapi)