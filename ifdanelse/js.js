// pegkondisian/percabangan
// 1.if
// if(aksi){
     
// }
// ....

// pr disuruh buat revisi pr di for kata nya suruh buat pake loop for dan if else
var totalAngkot = 10;
var Beroperasi = 6;
var nomorAngkot = 1;
for(nomorAngkot;nomorAngkot <= totalAngkot;nomorAngkot = nomorAngkot+=1){
    if(nomorAngkot <= Beroperasi){
        console.log('Angkot No. '+nomorAngkot+' beroperasi dengan baik');
    }else{
        console.log('Angkot No. '+nomorAngkot+' tidak beroperasi');
    }
};

// jadi ini nomorAngkot+=1 itu di tambah satu yak
