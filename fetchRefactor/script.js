// tombol Search
let buttonSearch = document.getElementsByClassName('tombol-cari')[0];
buttonSearch.addEventListener('click', function () {
    let Search = document.getElementsByClassName('cari')[0];
    const getMovie = (Search.value)
    movie(getMovie)
})
// tombol Search (tutup)

// UI Movie dari tombol Search
function movie(keyWord) {
    let containerMovie = document.getElementsByClassName('container-movie')[0];
    return fetch('http://www.omdbapi.com/?apikey=c35b2aac&s=' + (keyWord))
        .then(respon => respon.json())
        .then(respon => {
            let data = respon.Search;
            let card = '';
            data.forEach(m => { card += mov(m) })
            containerMovie.innerHTML = card;
            let tombolInfo = document.querySelectorAll('.tombol-info');
            uiInfo(tombolInfo)
        });
}
// UI Movie dari tombol Search (tutup)

// UI detail info dari movie yang dihasilkan oleh tombol search
function uiInfo(tombolInfo) {
    let dataInfo = document.getElementsByClassName('data-info')[0];
    tombolInfo.forEach(m => {
        m.addEventListener('click', function () {
            fetch('http://www.omdbapi.com/?apikey=c35b2aac&i=' + (this.getAttribute('data-id')))
                .then(respon => respon.json())
                .then(m => {
                    console.log(dataInfo)
                    let dataInfo1 = info(m);
                    dataInfo.innerHTML = dataInfo1;
                })
        })
    })
}
// UI detail info dari movie yang dihasilkan oleh tombol search (tutup)

// UI nya Movie
function mov(m) {
    return `<div class="col-md-4 my-5">
    <div class="card">
    <img src="${m.Poster}" class="card-img-top">
    <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary tombol-info" data-bs-toggle="modal" data-bs-target="#tombolinfo" data-id="${m.imdbID}">Detail</a>
            </div>
            </div>
            </div>`
}
// UI nya Movie (tutup)

// UI nya detail info
function info(m) {
    return `<div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
    </div>
    <div class="col-md">
    <ul class="list-group">
    <li class="list-group-item"><strong>Title: ${m.Title}</strong></li>
            <li class="list-group-item"><em>Genre: </em>${m.Genre}</li>
            <li class="list-group-item"><em>Runtime: </em>${m.Runtime}</li>
            <li class="list-group-item"><em>Country: </em>${m.Country}</li>
            <li class="list-group-item"><em>Plot: </em>${m.Plot}</li>
        </ul>
    </div>`
}
// UI nya detail info (tutup)