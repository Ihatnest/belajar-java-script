class errorManual extends Error {
    constructor(message,field){
        super(message)
        this.field = field;
    }
}

class tambah{
    static sum(...nomor){
        if(nomor.length === 0){
            throw new errorManual("error tidak bisa","nomor")
        }
        let total = 0;
        for(let no of nomor) {
            total += no
        }
        return total
    }
}
try {
    console.log(tambah.sum())
    console.log('test1') 
} catch (error) {
    if (error instanceof errorManual) {
        console.log(`error1: ${error.message} di ${error.field}`)
    } else {
        console.log(`error1: ${error.message}`)
    }
} finally {
    console.log('sapu') 
}
console.log('sapi')




