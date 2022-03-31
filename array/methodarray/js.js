// method array
// .length
// .join
// .push,pop,shift,unshift
// .slice dan splice
// .forEach dan map
// .sort
// .filter dan find
var arr = ['sapi','sapu','sama'];
// .lenght
// untuh mengetahui berapa elemen di array yang kita buat
console.log(arr.length);
// .join
// untuk mengubah elemen di array menjadi string
console.log(arr.join());
console.log(arr.join(' - '));
// .push,pop
// untuk menemabah dan menghapus elemen di akhir pada array
//.push
// untuh menambah elemen pada array di bagian akhir
var arr1 = ['sapi','sapu','sama'];
arr1.push('ihat','suhat');
console.log(arr1.join(' - '));
// .pop
// untuk memghapus elemen pada array di bagian akhir 
var arr2 = ['sapi', 'sapu', 'sama'];
arr2.pop();
console.log(arr2.join(' - '));
// unshift dan shift
// untuk menemabah dan menghapus elemen di Awal pada array
//.unshift
// untuh menambah elemen pada array di bagian akhir
var arr1 = ['sapi','sapu','sama'];
arr1.unshift('ihat','suhat');
console.log(arr1.join(' - '));
// .shift
// untuk memghapus elemen pada array di bagian akhir 
var arr2 = ['sapi', 'sapu', 'sama'];
arr2.shift();
console.log(arr2.join(' - '));
// .splice dan slice
// ,splice
// dugunakan untuk menambal,menhapus,meyambung elemen array 
// rumus 
// splice(indexawal/dia mau jadi apa,maudihapus berapa,eleme1,elemen2,...)
var arr3 = ['sapi', 'sapu', 'sama', 'kayu'];
arr3.splice(2,1,'ihat','rabu'); // jadi dia akan menjadiakan ihat jadi index ke2 dan menghapus 1 elemen dari setelah index 2 ke kanan dan menemabah kana ihat dan rabu
console.log(arr3.join(' - '));
// .slice
// untuk mengambil elemen dari array sebelum nya menjadi array baru 
// rumus
// slice(dari elemen berapa yang akan diambil,nomor index dari sesudah elemen yang mau diambil)
var arr6 = ['sapi', 'sapu', 'sama', 'kayu'];
var arr7 = arr6.slice(1,3); // jadi ini ambil elemen index 1 sampay sebelum elemen index 3 jadi index 3 tidak di ambil
console.log(arr7.join('-'));
// .forEach dana map
// untuk melakukan looping pada array
// .forEach
// untuk melakukan looping pada array tapii ini tidaka bisa amngembalikan nilai/return
var arr12 = [1,2,3,4,5,6,]
arr12.forEach(function(e){
    console.log(e);
});
// bisa juga ke gini
// note e=elemen i=index bukan cok kaya nya dari tata letak nya kalo paremeter 1 dia elemen kalo parameter ke 2 dia nomor index nya 
var arr12 = ['ihat','sapi','kayu']
arr12.forEach(function(e,r){
    console.log('juara ' + (r+1) + ' atas nama ' + e);
});
// .map
// jadi ini sama saja konsep nya seperti forEnch tapi ini bisa mengembalikan nilai/return menjadi array baru
var arr14 = [1,2,3,4,5,6]
var nili =arr14.map(function(e){
    return e * 2;
});
console.log(arr14.join('-'))
console.log(nili.join('-'))
// .sort
// untuk mengurutka isi array nya
var arr14 = [1,5,3,2,6,4]
arr14.sort();
console.log(arr14.join('-'))
// tapi tidak bisa gini 
var arr14 = [1,5,10,3,2,20,6,4]
arr14.sort();
console.log(arr14.join('-'))
// solusi
var arr14 = [1,5,10,3,2,20,6,4]
arr14.sort(function(t,b){
    return t-b;
});
console.log(arr14.join('-'))
// gua ngga tau apa arti dari ab itu yaka mungkin itu rumus buat nysusu angka yang benar dibuat oleh javascript 

// .filter dana find
// .filter
// dia bisa mengembalikan nilai/return
var arr = [1,2,10,20,4,3,5];
var arr2 = arr.filter(function(c){
    return c > 5;
});
console.log(arr2.join('-'));
// .find
// dia sama saja seperti filter tapi dia tidaka bisa mengembalikan nilai
var arr = [1,2,10,20,4,3,5];
var arr2 = arr.find(function(c){
    return c > 5;
});
console.log(arr2);
// kenapa dihapus join nya karena dia hanya satu saja jadi kalo dimasukan join nya maka akan error
