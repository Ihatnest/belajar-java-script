    //  taggged template litras

// "bentuk yang lebih kompleks dari template literal meungkinkan kita untuk membaca template literal mlalui sebuah function"-MDN

//  taggged template
const data = [
    {
        nama:'ihat',
        isiSaldo: 1100000 
    }

]

function cek (string,...values){
    // return values
    return string.reduce((result,str,i)=> `${result}${str}${values[i] || ''}`,'')
    
}
// jadi string itu mendifinisika setiap string yang ada di dalam argument yang dibawah 
// kalo ...values itu mendefinisikan semua ekperesion di dalam argument di bawah yang itu ${} jadi dia mendifinikan itu semua 
//  result mendefiisikan string awal dari let dibawah ini
// str mendefenisikan string akhir dari let dibawah ini
// values[i] itu medefinisikan semua ekpersion dibawah 
let text = cek((data.map(a => `hai ${a.nama} saldo kamu ${a.isiSaldo.toLocaleString()}Rp`)))
console.log(text)

// kasus1 filter kata kasar atau pensessor kata kasar 
function filterKata








