class tambah{
    static sum(...nomor){
        console.log(...nomor)
        let total = 0;
        for(let no of nomor) {
            total += no
        }
        return total
    }
}

const test = tambah.sum(1,1,1,1,1,1,1,1,1,1)
console.info(test)