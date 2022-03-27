// for
// jadi kalo menurut ihat for itu shorthand nya while
// for(     ;       ;){
    // 
// }
// Contoh
// for(var kelas = 1; kelas <= 10; kelas = kelas + 1){
//     console.log('heillo world');
// };

// pr
var totalAngkot = 10;
var totalBeroperasi = 8;
var noAngkot = 1;
while(noAngkot <= totalBeroperasi){
    console.log('Angkot No. '+noAngkot+' beroperasi dengan baik');
    noAngkot++;
};
for(noAngkot; noAngkot <= totalAngkot; noAngkot++){
    console.log('Angkot No. '+noAngkot+' yang tidak beroperasi ');
};
// done
