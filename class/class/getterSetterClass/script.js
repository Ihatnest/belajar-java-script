class nama {
    constructor(firstNama,lastNama) {
        this.firstNama = firstNama
        this.lastNama = lastNama
    }
    get fullNama(){
        return `${this.firstNama} ${this.lastNama}`
    }
    set fullNama(value){
        const result = value.split('')
        this.firstNama = result(0)
        this.lastNama = result(1)
    }
}
// jadi ini kalo menurut ku ini get itu mengamabil data nya dan set itu mengatur data yang sudah diambil

const naga = new nama('naga','sapi');
console.log(naga)
console.log(naga.fullNama)

const sapi = new nama('naro','stu');
console.log(sapi)
console.log(sapi.fullNama)