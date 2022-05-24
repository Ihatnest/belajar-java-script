// template literal/template String

// "template literal adalah String literal yang memungkinkan adanya expresson di dalamnya"-MDN

// String literal
let nama = 'ihat';
let kelas = "10";
let email = `ihat@null.net`; //>  back tick


// template literal
// menggunkan ``back tick
// multi-line String
// embedded expression
// Html fragments
// expression interpolation

// // template literal
// `string text`

// `string text1
// string text1    
// string text1`
// // multi-line String

// `string text ${expression} string`
// // embedded expression

// tag`string text ${expression} string text`
// // tagged template


// multi-line string

console.log('string1\nstring2')
console.log(`string1
string2`)

// multi-line string (html fragament)

const msh = {
    nama : 'ihat',
    umur : '80',
    email : 'ihats@null.net'
};

let el = 
`<div class="msh">
    <h2>${msh.nama}</h2>
    <span class="umur">${msh.umur}</span>
</div>`;
console.log(el)

// expression intereolation
let a = 10;
let b = 15;
console.log(`${2*a+b}`)






