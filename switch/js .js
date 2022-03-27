// switch
// jadi ini sama kaya if tapi di sisi hanya bisa kondisi yang spesifik 
// sintaks
// switch(ekspresi){
//     case 'nilai 1':
//         aksi 1
//         break;
//     case 'nilai 2':
//         aksi 2
//         break;
//     case 'nilai 3':
//         aksi 3
//         break;
//     default:
//     aksi default
//     break;
// };
// var user = prompt('masukan nomor seperti: \n 1,2,3')
// switch(user){
//     case 1:
//         alert('anda memasukan angka nomor 1');
//         break;
//     case 2:
//         alert('anda memasukan angka nomor 2');
//         break;
//     case 3:
//         alert('anda memasukan angka nomor 3');
//         break;
//     default:
//     alert('anda measukan angka yang tidak ada');
// };
// seperti ini salah karena apa bila kita masukan angka nya akan kelur nilai default karena ini sangat memperhatiak tipe data nya karna tipe data nya integer maka tidak akn terpangil mah jadi kita harus ubah case nya jadi string
// var user = prompt('masukan nomor seperti: \n 1,2,3')
// switch (user) {
//     case '1':
//         alert('anda memasukan angka nomor 1');
//         break;
//     case '2':
//         alert('anda memasukan angka nomor 2');
//         break;
//     case '3':
//         alert('anda memasukan angka nomor 3');
//         break;
//     default:
//         alert('anda measukan angka yang tidak ada');
// };
// Dan bisa tanpa break jadi analogi kalo pake break ia akan keluar dari switch dan mengakhiri program nah kalo tapa break maka dia akan menlanjudkan prokgram nya ke bawah sampai ketemu break nya seperti contoh dibawah
// var user = prompt('masukan makanan yang bisa dimakan dan tidak bisa dimakan seperti contoh dibawah: \n batu,kayu,apel,jambu')
// switch (user) {
//     case 'batu':
//     case 'kayu':
//         alert('tidak bisa  di makan');
//         break;
//     case 'apel':
//     case 'jambu':
//         alert('bisa di makan');
//         break;
//     default:
//         alert(user + ' tidak ada di list');
// };
// jadi dia akan terus turun kebawah sampai menemukan break nya.

// ingat ya hati hati dengan tipe data tipe data harus sesuai dengan apa yang mau lu esksekusi sama kaya if else itu juga harus hati hati takut nya nanti error cuman  masalah sepele malah bonkar code oke. dan selalu inga === itu dia akan ngcek sama tipe data nya mau input nya sama tapi tipe data nya beda ya ngga bisa tereksekudi input int ya yang di pangil juga harus int kalo string yan stering juga kalo ngga mau sama tipe data nya solusi dari === itu ada tiga
// masalah
// var user = prompt('masukan nomor 1');
// if( user === 1){
//     alert('betul nomor 1')
// }else{
//     alert("bukan nomor 1")
// }
// solusi 1
// var user = prompt('masukan nomor 1');
// if (user == 1) {
//     alert('betul nomor 1')
// } else {
//     alert("bukan nomor 1")
// }
// jadi kita hapus satu = agar tidak dia perhtikan tipe data nya dia hanya memehatikan sama atau tidak
// solusi 2
// var user = prompt('masukan nomor 1');
// if (user == '1') {
//     alert('betul nomor 1')
// } else {
//     alert("bukan nomor 1")
// }
// yaitu mengubah tipe data yang mau lu panggil jadi setipe dengan si pemagil jadi str
// solusi 3
var user = parseInt(prompt('masukan nomor 1'));
if (user == 1) {
    alert('betul nomor 1')
} else {
    alert("bukan nomor 1")
}
// jadi ini mengubah si pemangil menjadi setipe dengan yang dipangil jadi int