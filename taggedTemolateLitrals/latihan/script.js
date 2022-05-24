let inputt = document.getElementsByClassName('input')[0];
let p = (document.getElementsByTagName('p')[0]);
let kata = ['ihat','sapi']
inputt.addEventListener('input',function() {
    let a=inputt.value
    console.log(a)  
    p.innerHTML = a
    console.log(p)
    let c = p.innerText.includes('ihat')
    if(c){
        console.log('hahahahhaahahahah')
    }
})
