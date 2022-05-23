// document pemangil
const li = Array.from(document.querySelectorAll('[data-duration]'));
const totalDurasi = document.getElementsByClassName('total-durasi')[0];
const jumlahVideo = document.getElementsByClassName('jumlah-video')[0];
// document pemangil (penutup)

// pembuat waktu jam menit dan detik
let durasi = text=>{return li.filter(li => li.innerText.includes(''+ text +''))
    .map(item => item.dataset.duration)
    .map(waktu => {
        const split = waktu.split(':').map(split1 => parseFloat(split1))
        return (split[0] * 60) + split[1]

    })
    .reduce((total, nilai) => total + nilai)
};
let durasi1 = durasi('JAVASCRIPT LANJUTAN');

const jam = Math.floor((durasi1 / 60) / 60);
const menit = Math.floor((durasi1 - jam * (60 * 60)) / 60);
const detik = Math.floor(durasi1 - jam * (60 * 60) - menit * 60);
// pembuat waktu jam menit dan detik (penutup)

// pengimput text ke element
totalDurasi.innerHTML = `${jam}jam ${menit}menit ${detik}detik`;
jumlahVideo.innerHTML = `${li.filter(li => li.innerText.includes('JAVASCRIPT LANJUTAN')).length}`;
// pengimput text ke element (penutup)

















