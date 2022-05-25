let inputt = document.getElementsByClassName('input')[0];
let p = (document.getElementsByTagName('p')[0]);


// inputt.addEventListener('input',function() {
//     let a=inputt.value
//     console.log(a)  
//     p.innerHTML = a
//     console.log(p)
//     let c = p.innerText.includes('ihat')
// })


let data = {
    nama: 'ihat',
    isiSaldo: 10100000
}

function inputs(str,...values){
    return str.reduce((result,str,i)=> `${result}${str}<span class="blue">${values[i] || ''}</span>`,'')
}
let text = inputs`Hai ${data.nama} kamu memiliki saldo ${data.isiSaldo.toLocaleString()}`
p.innerHTML = text
console.log(text)















