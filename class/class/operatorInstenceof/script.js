class nama{

}
class nama1{

}
const naga = new nama();
const sapi = new nama1();

console.info(naga instanceof nama) // true karena naga dari class nama
console.info(naga instanceof nama1) // flase karena naga tidak dari class nama1


console.info(sapi instanceof nama) // flase karena sapi tidak dari class nama
console.info(sapi instanceof nama1) // true karena sapi dari class nama1

console.log('---------------------------------------------------------------------')

// dia juga bisa cek inheritance pewarisan
class name{

}
class name1 extends name{

}

const nago = new name();
const sapu = new name1();

console.info(nago instanceof name) // true karena nago dari class name
console.info(nago instanceof name1) // flase karena nago tidak dari class name1 dan tidak ada warisan


console.info(sapu instanceof name) // true karena ada warisan dari class name jadi apa pun isi name maka name1 juga punya
console.info(sapu instanceof name1) // true karena sapu dari class name1

