fetch('http://www.omdbapi.com/?apikey=c35b2aac&s=avengers')
.then(respon => respon.json())
.then(respon => {
    let data = respon.Search;
    data.forEach(m => console.log(m.Title))
})


// jadi ini tidak perlu pake jquery lagi jadi pake javascript only