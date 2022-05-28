$.ajax({
    url: 'http://www.omdbapi.com/?apikey=c35b2aac&s=avengers',
    success: result => {
        const movies = result.Search;
        let card = '';
        movies.forEach(m => {
            card += `<div class="col-md-4 my-5">
            <div class="card">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary tombol-info" data-bs-toggle="modal" data-bs-target="#tombolinfo" data-id="${m.imdbID}">Go somewhere</a>
            </div>
            </div>
            </div>`
        });
        $('.container-movie').html(card)

        $('.tombol-info').on('click',function () {

            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=c35b2aac&i=' + $(this).data('id'),
                success: m => {
                    let dataInfo = `<div class="col-md-3">
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
                                    </div>`;
                    $('.data-info').html(dataInfo)

                },
                error: e => {
                    console.log(e.responseText);
                }
            })


        })
    },
    error: (e) => {
        console.log(e.responseText);
    }
});