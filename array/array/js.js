// array adalah susunan dari objek-objek yang serupa atau array adalah tipe data yang diganakan untuk medeskripsiskan kumpulan elemen (nilai atau variable) yang tiap tipa elemen memiliki index atau menurut saya adalah variable list kalau di pytho
//contoh
var hari = ['senin','selasa','rabu'];
// kenapa array?
// mempermudaha pengelola nilai/value/dAta
//  penelusuran dan pencarian 
// manejemen memori
//array
// .variible jamak yang mempunyai banyak element dan dilalaui dengan nama yang sama
// .kumpulan panjang key dana nilai/key and value pair
// key adalah index pada array dengan tipe intger yanag dimulai dari 0
// .array pada javascript bertipe objek
// .array pada javascript memiliki fungsi/method length untuk menghitung jumlah element didalamnya 
// .elemen pada array boleh memiliki  tipe data yang berbeda 

// key and value pair-mengakses elemen pada array
var binatang = ['sapi','sapu','sama','kayu'];
// atau 
var binatang1 = [];
binatang1 = ['sapi','sapu','sama','kayu'];
//             0       1     2      3     indexnya   
// untuk mengunakan array
console.log(binatang[1]);
console.log(binatang1[0]);
console.log(binatang1.length); // total elemen

// elemen pada array boleh beda tipe data
// dan bisa meletakan array di dalam array
function func(){
    console.log('hello world');
};
func()
var array =['text',2,true,func(),[1,2,3]]
console.log(array[4][2]);
console.log(array[2]);
