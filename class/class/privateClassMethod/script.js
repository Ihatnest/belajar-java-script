class nama {
    say(nama){
        if(nama){
            this.#test(nama)
        }else{
            this.#test1()
        }
    }
    // jadi kita hanya bisa mengakses di dalam sini saja method nya dengan pelantara if else itu tidak hanya mengunakan if else saja pake cara lain juga bisa asal tetap didalam class ini
    #test(nama){
        console.log(`hai ${nama}`)
    }
    #test1(){
        console.log(`hai`)
    }
}

const naga = new nama()
naga.say('nama')
// jadi ini dia akan menyatakan error karena itu adalah method private
// naga.#test('hai')
// kalo ini dia menyatakan bahwa tidak ada method ini
// naga.test('hai')
