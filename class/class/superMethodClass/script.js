class nama {
    sayBye(umur) {
        console.info(`bye nama `)
    }
}
class nama1 extends nama {
    sayBye(nama) {
        super.sayBye()
        console.info(`bye nama1`)
    }
}

const naga = new nama();
const sapi = new nama1();
sapi.sayBye()
console.log(naga)
console.log(sapi)
