class nama {
    // jadi ini adalah public class field 
    firstNama;
    lastNama;
    // kita juga bisa edit di constructor
    constructor(firstNama,lastNama) {
        this.firstNama = firstNama
        this.lastNama = lastNama
    }
    naga(){
        console.log('test')
    }
}
// jadi ini kalo menurut ku ini get itu mengamabil data nya dan set itu mengatur data yang sudah diambil

const naga = new nama('test','naga');
console.log(naga)
