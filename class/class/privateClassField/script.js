class calcu {
    // jadi ini tidak bisa di ubah ubah 
    #jumlah = 0;
    tambah(){
        this.#jumlah++;
    }
    kurang(){
        this.#jumlah--
    }
}

const test = new calcu()
test.kurang()
test.kurang()
test.kurang()
test.kurang()
test.kurang()
// jadi ini yang edit nya jadi 100 dan tidak berfungsi hanya menambahkan field baru 
test.jumlah = 100
console.log(test)

