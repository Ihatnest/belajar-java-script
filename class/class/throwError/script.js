class tambah{
    static sum(...nomor){
        if(nomor.length === 0){
            throw new Error("error tidak bisa")
        }
        let total = 0;
        for(let no of nomor) {
            total += no
        }
        return total
    }
}
// jadi di akan berhenti di error tidak jalan lagi ke selanjut nya
tambah.sum()
console.log('naga')