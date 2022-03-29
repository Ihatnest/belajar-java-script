// refactoring
// refactoring adalah sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya
// contoh
// sebelum refactoring
function MenghitungVolum(a,b){
    var volum1 = a*a*a;
    var volum2 = b*b*b;
    var total = volum1 + volum2;
    volum1 = a*a*a;
    volum2 = b*b*b;
    total = volum1 + volum2;
    return total;
}
console.log(MenghitungVolum(5,2));

// sesudah refactoring
function MenghitungVolum1(a, b) {
    return a * a * a + b * b * b;
}
console.log(MenghitungVolum1(4, 3));
// fungsi nya sama saja tapi bayak variabael serta sangat simple nya beda disitu lah seni nya
