function Nama() {
    this.nama = ''
    this.kelas= '' 
}
const naga = new Nama()
naga.nama = 'sapu'
naga.kelas = 10
const sapi = new Nama()
sapi.nama = 'sapi'
sapi.kelas = 10
sapi.umur = 100

console.log(naga)
console.log(sapi)

// jadi inti nya ini variable nya itu memmiliki objek yang sama naga dan sapi memiliki objek yang sama
// kita tamabah kan juga bisa object baru tapi tapi tidak sama dengan variabel selanjut nya