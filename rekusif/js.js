// rekursif
// rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// rekursif harus berakhir dan menghasilkan nilai
// base case
// base case adalah kondisi akhir tekursif yang menghasilkan nilai
// contoh1:

// function CetakAngka(n){
//     if (n === 0){
//         return;
//     };
//     console.log(n);
//     CetakAngka(n-1);
// };
// CetakAngka(10);

// rekursif
// semua looping bisa dibuat rekursip tapi tidak sebaliknya
// faktorial
// mengunakan rekursif
function faktorial(n){
    if (n === 0) return 1;
    return n * faktorial(n-1);
}
console.log(faktorial(5));
// analogi nya jadi pertama n=5 lalu dikali dengan faktorial(5-1) nah didalam faktorial(5-1) ada n=4*faktorial(4-1) dan seterus nya jadi inti nya return n * faktorial(n-1) itu dia terus masuk terus dan angka nya berkurang 
// 1.5*faktorial(5-1)
// 2.5*(4*faktorial(4-1))
// 3.5*(4*(3*faktorial(3-1)))
// 4.5*(4*(3*(2*faktorial(2-1))))
// 4.5*(4*(3*(2*faktorial(2-1))))
// 5.5*(4*(3*(2*(1*faktorial(1-1)))))
// begini lah logika nya

// mengunakan lopping
// analogi nya jadi ketika n=5 lalu dia masuk ke i=5 lalu 5>0 dan 5 akan dikurang 1 terus menerus sampai sudah i>0/0>0 sebelum itu ada proses perhitungan nya jadi hasil = 1 itu dikali dengan i lalu hasil berubah jadi 5 dana selanjut nya i berubah jadi 4 dan 5 *=4=20 dan hasil saat itu adalah 20 lalu i kurang 1 lagi menjadi 3 lalu 20 dikali dengan 3=60 dan hasil saat itu adalah 60 dan i saat itu juga berkurang 1 menjdi 2 lalu 60 dikali 2 120 dan 2 dikurang lagi jadi 1 lalu 120 dikali 1=120 dan sampai lah waktu nya 1 menjadi 0 karena 1-1=dan akhir nya menjadi false dana di return kata nya ini dia yang dikarjakan di funcition mengatakan pada console.log TAMAT SEMOGA BISA MENGERTI DILL AY
function faktorial1(n){
    var hasil = 1;
    for(var i = n;i>0;i--){
        hasil *= i
    }
    return hasil;
}
console.log(faktorial1(5));
