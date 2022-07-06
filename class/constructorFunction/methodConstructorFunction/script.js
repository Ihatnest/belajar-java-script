function Nama() {
    this.nama = ''
    this.kelas= ''
    this.say = function (nama){
        console.log(`hai nama saya ${this.nama} ${nama}`)
    }
}
const naga = new Nama()
naga.nama = 'sapu'
naga.kelas = 10
naga.say('naga')

const sapi = new Nama()
sapi.nama = 'sapi'
sapi.kelas = 10

console.log(naga)
console.log(sapi)

