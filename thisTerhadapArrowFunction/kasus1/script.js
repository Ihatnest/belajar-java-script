const box = document.querySelector('.box')
box.addEventListener('click',function(){
    let satu = 'size'// ini cuman untuk
    let dua = 'warna'// menukar warna dan size keetika baliklagi
    if(box.classList.contains(satu)){
        [satu,dua] = [dua,satu]
    }
    console.log(this)
    this.classList.toggle('size')// kalo disini this=box
    setTimeout(()=>{
        console.log(this) // kalo disini this=box kalo pake arrow fuuction kalo pake function biasa this=window coba ja ganti jadi function biasa kalo ngga percaya
        this.classList.toggle('warna')// jadi disini fungsi arrow function terjadi jadi di ini ibarat nya this nya itu jadi box dan apa bila  mengunakan fuction biasa maka this nya itu window sebenar nya ngga pake this pun bisa cuman pake box tapi karna disini tujuan agar bisa kita megerti jadi ngga usah pake box lah jadi pake this saja
    },600)
})
