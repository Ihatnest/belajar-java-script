// search
// tombol Search
let buttonSearch = document.getElementsByClassName('tombol-cari')[0];
buttonSearch.addEventListener('click', async function () {
    try{
        let Search = document.getElementsByClassName('cari')[0];
        const getMovie = await movie(Search.value)
        updateui(getMovie)
    } catch(error){
        alert(error)
    }

})
// tombol Search (tutup)

// api search
function movie(keyWord) {
    return fetch('http://www.omdbapi.com/?apikey=c35b2aac&s=' + (keyWord))
    .then(respon => {
            if(!respon.ok){
                throw new Error(respon.statusText)
            }
            return respon.json()
        })
        .then(respon => {
            if(respon.Response === 'False'){
                throw new Error(respon.Error)
            }
            return respon.Search
        });
}
// api search (tutup)

// tag html search
function updateui(data) {
    let containerMovie = document.getElementsByClassName('container-movie')[0];
    let card = '';
    data.forEach(m => { card += mov(m) })
    containerMovie.innerHTML = card;
}
// tag html search (tutup)

// tag search
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

// tag search (tutup)
// search (tutup)


// tombol 
// tombol info
document.addEventListener('click', async function (e) {
    try{
        if (e.target.classList.contains('tombol-info')) {
            let dataId = await apiUiInfo(e.target.getAttribute('data-id'))
            uiinfo(dataId)
        }
    } catch (error) {
        alert(error)
    }
})
// tombol info (tutup)

// api info
function apiUiInfo(data) {
    return fetch('http://www.omdbapi.com/?apikey=c35b2aac&i=' + (data))
        .then(respon => {
            if(!respon.ok){
                throw new Error(respon.statusText)
            }
            return respon.json()
        })
        .then(m => m)
}
// api Info (penutup)
// pengabung text
function uiinfo(k) {
    let dataInfo = document.getElementsByClassName('data-info')[0];
    let dataInfo1 = info(k);
    dataInfo.innerHTML = dataInfo1;
}
// pengabung text (tutup)
// tag UI nya detail info
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
// tag UI nya detail info (tutup)
// tombol (penutup)

// note jadi throw new Error() itu dia akan melempar error ke catch oke 
//  jadi ini error yang di buat sendiri bukan dari browser nya 


