var s = '';
for(o = 1;o <= 2;o++){
    if(o === 1){
        for(i = 1;i <= 10;i++){
            for(k = 1;k <= i;k++)
                s += '*';
                s += '\n';
        };
    }else if(o === 2){
        for(p = 10;p >= 1;p--){
           for(q = 1;q <= p;q++)
                s += '*';
                s += '\n';
        };

    };
};
console.log(s);
for(f=1;f <= 10;f++){
    console.log(f+' tahi');
}
// kalo for ane bisalah dasar nya tapi kalo suruh buat segitiga sama kaki ane ngga bisa ane butuh belajar banyak lagi kaya nye oke jadi skip dulu lah dari pada ngstak di sini
