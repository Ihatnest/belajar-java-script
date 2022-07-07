class about{
    static nama = 'sapi'
    static umur = 10
    static kelas = 1
}
// jadi kita tidak bisa mengunakan ini lagi kita harus launsung memmangil nya saja jadi ibarat nya ini adalah field global
const naga = new about()
console.log(naga.nama)

// cara akses nya langsung kita tulis nama class lalu nama field nya aja langsung
about.nama = 'sapu'
console.log(about.nama)
console.log(about.umur)
console.log(about.kelas)