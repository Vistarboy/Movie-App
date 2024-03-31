const apiLink = `https://www.omdbapi.com/?=&apikey=306dc500`;

function searchMovie(url) {
  fetch(url).then(response => response.json()).then(data => {
    if (data.Response === 'True') {

      let results = data.Search

      const movieCollection = document.querySelector('.movie-collection')
      movieCollection.innerHTML = '';

      results.forEach(movie => {

        const title = movie.Title
        const year = movie.Year
        const type = movie.Type
        const movieID = movie.imdbID
        const imageUrl = movie.Poster

        const movieContainer = document.createElement('div')
        movieContainer.setAttribute('class', 'movie-container')
        movieContainer.innerHTML =
          `<center>
                    <a href="https://www.imdb.com/title/${movieID}" target="_blank">
                      <img src="${imageUrl}" class="movie-image" alt="cover Image of ${movie.Title}">
                    </a>
                    <p id="movie-name">${title}<br>${year}</p>
                  </center>
                `

        movieCollection.appendChild(movieContainer)
      })

    } else {
      alert('Sorry, ' + data.Error + `for ${input.value}`)
    }
  })
    .catch(error => {
      console.error('Error in fetching data:', error)
    })
}


const form = document.querySelector('.form')
const input = document.getElementById('search-bar')
const SearchButton = document.getElementById('search-icon')

let searchApi = '', movieName = '';

searchApi = `https://www.omdbapi.com/?s=avatar&apikey=306dc500`;

searchMovie(searchApi);

function getSearch() {
  movieName = input.value
  searchApi = `https://www.omdbapi.com/?s=${movieName}&apikey=306dc500`;

  searchMovie(searchApi);

  input.value = '';
}
form.addEventListener('submit', () => {
  getSearch();
})
SearchButton.onclick = () => {
  getSearch();
}
