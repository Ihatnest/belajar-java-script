// else if
// jadi ini untuk buat beberapa kondisi seperti if beda ny dia bisa banyak ya sama seperti elif di py 
// sintaks

// if(kondisi){
    // aksi
// }else if(kondisi){
    // aksi
// }else{
    // 
// }

// pr suruh reviisi yang di if dan else buat di tambah else if buat beritahu ada angkot yang sedang lembur
// pr ke 1
// var totalAngkot = 10;
// var Beroperasi = 6;
// var nomorAngkot = 1;
// for (nomorAngkot; nomorAngkot <= totalAngkot; nomorAngkot = nomorAngkot += 1) {
//     if (nomorAngkot <= Beroperasi) {
//         console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik');
//     }else if(nomorAngkot === 8 || nomorAngkot === 10){
//         console.log('Angkot No. ' + nomorAngkot + ' sedang lembur');
//     }else{
//         console.log('Angkot No. ' + nomorAngkot + ' tidak beroperasi');
//     }
// };
// jadi || itu adalah or/atau jadi analogi nya gini apakah ada nomor 8 ada maka 8 dulu yang akan datang dan seterus nah nya kalo dan/&& itu akan di jelas kan di bawah dan not/!

// pe ke 2
// revisi  lagi supaya no 5 ikut lembur juga

var totalAngkot = 10;
var Beroperasi = 6;
var nomorAngkot = 1;
for (nomorAngkot; nomorAngkot <= totalAngkot; nomorAngkot = nomorAngkot += 1) {
    if (nomorAngkot <= Beroperasi && !(nomorAngkot === 5)) {
        console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik');
    } else if (nomorAngkot === 8 || nomorAngkot === 10 || nomorAngkot === 5){
        console.log('Angkot No. ' + nomorAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + nomorAngkot + ' tidak beroperasi');
    }
};
// jadi analogi nya gini ketika nomor angkot sudah mencapai nomor 5 maka if akan mengecek if kata nya nah nyampe nomor 5 nih turus dia cek setelah && nya ternyata false maka akan jadi false, kenapa setelah && false? karena ada operator logika yanng membuat nomor 5 jad false yaitu !/not. jadi if langsung menjadi flase karna kan && itu harus true semua nya  kalo satu aja false maka akan flase false semua gitu alogi && jadi inti nya nomor 5 di skip karna false dan di eksekusi oleh else if karna ada nomor 5 di else if di situ dia besama operator or/||.

// jadi ada trik lagi yang mengubah nomor 5 jadi false yaitu dengan nomorAngkor !== 5 seperti sebernar nya ini sama saja seperti diatas tapi lebih simple contoh di bawwah 

var totalAngkot = 10;
var Beroperasi = 6;
var nomorAngkot = 1;
for (nomorAngkot; nomorAngkot <= totalAngkot; nomorAngkot = nomorAngkot += 1) {
    if (nomorAngkot <= Beroperasi && nomorAngkot !== 5) {
        console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik');
    } else if (nomorAngkot === 8 || nomorAngkot === 10 || nomorAngkot === 5) {
        console.log('Angkot No. ' + nomorAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + nomorAngkot + ' tidak beroperasi');
    }
};
// jadi analogi dari nomorAgkot !== 5 adalah gini. dari if dulu, wah nomorAngkot 5 nih lalu dia cek ke kanan setelah && kata nya nomorAngkot !== 5 apa arti nya? gini 5 !== 5 masih tidak ngerti? jadi gini nomor angkot sekarang itu 5 tapi kata !== bahwa 5 itu tidak sama dengan 5 arti nya false karna 5 sama dengan 5. maka tidak tereksekusi lah if.
