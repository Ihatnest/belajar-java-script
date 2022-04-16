// object
// adalah kumpulana nilai yanag memiliki nama
// macam macam object
// .object literal
// .function decllaration
// .constructor function (keyword new)
// .object.create()


// .object literal
var siswa1 = {
    nama :'ihat',
    kelas : 9,
    lulus : 'tidak lulus'
};
// function declaration
function data1(nama,kelas,umur){
    var data = {};
    data.nama = nama;
    data.kellas = kelas;
    data.umur = umur;
    return data;
};
var siswa2 = data1('ihat',9,14);
// .constructor function (keyword new)
function data2(nama,kelas,umur){
    this.nama = nama;
    this.kellas = kelas;
    this.umur = umur;
};
var siswa3 = new data2('ihat',9,14);
// jadi ini beda nya dengan function declaration adalah pada var nya dana retur dan constructor function itu menguabakan this karana ibarat nya this itu adallah var dana return yanag dibuat oleh javascript itu sendirinya dan ini juga beda saat memangil nya yaitu dengana menambahkan new 
