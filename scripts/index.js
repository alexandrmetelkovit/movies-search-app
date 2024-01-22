const ERROR_INPUT_MESSAGE = 'Movie title not entered...';
const ERROR_SEARCH_MESSAGE = 'There is no such film';

const movieNameNode = document.getElementById("movieName");
const movieAddBtnNode = document.getElementById("movieAddBtn");
const moviesListNode = document.getElementById("moviesList");

const apiKey = '2f759f6';

let movies = [];

const clearInput = () => movieNameNode.value = "";

const renderMovies = () => {
	const movieName = movieNameNode.value;
	if (!movieName.trim()) {
		const errorInputNode = document.createElement('p');
		errorInputNode.classList.add('error');
		errorInputNode.innerText = ERROR_INPUT_MESSAGE;
		moviesListNode.innerHTML = '';
		moviesListNode.appendChild(errorInputNode);
		return;
	}

	fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`)

	.then((response) => {
		if (!response.ok) {
			return;
		} 
		return response.json();
	})

	.then((data) => {

		if (!data || !data.Search) {
			const errorSearchNode = document.createElement('p');
			errorSearchNode.classList.add('error');
			errorSearchNode.innerText = ERROR_SEARCH_MESSAGE;
			moviesListNode.innerHTML = '';
			moviesListNode.appendChild(errorSearchNode);

		} else {
			
			moviesListNode.innerHTML = '';

			data.Search.forEach((e) => {

				const movieEl = document.createElement('li');
				movieEl.className = 'movie';
				movieEl.setAttribute('id', `${e.imdbID}`);
	
				const moviePoster = document.createElement('div');
				moviePoster.className = 'poster';
	
				const imgLink = document.createElement('img');
				imgLink.setAttribute('src', `${e.Poster}`);
	
				const wrapperDesc = document.createElement('div');
				wrapperDesc.className = 'wrapper__description';
	
				const wrapperName = document.createElement('p');
				wrapperName.className = 'wrapper__name';
				wrapperName.innerText = `${e.Title}`;
	
				const wrapperYear= document.createElement('p');
				wrapperYear.className = 'wrapper__year';
				wrapperYear.innerText = `${e.Year}`;
	
				const wrapperType = document.createElement('p');
				wrapperType.className = 'wrapper__type';
				wrapperType.innerText = `${e.Type}`;
	
				movieEl.appendChild(moviePoster);
				movieEl.appendChild(wrapperDesc);
				moviePoster.appendChild(imgLink);
				wrapperDesc.appendChild(wrapperName);
				wrapperDesc.appendChild(wrapperYear);
				wrapperDesc.appendChild(wrapperType);
	
				moviesListNode.appendChild(movieEl);
			})
		}

})
.catch(error => {
	console.error('Error:', error.message);
});
};

const clickToEnter = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
		renderMovies()
		clearInput();
  }
};

movieNameNode.addEventListener('keydown', clickToEnter);

movieAddBtnNode.addEventListener("click", function() {
	renderMovies();
	clearInput();
});

moviesListNode.addEventListener("click", function(event) {
  let target = event.target.closest('.movie')
  window.location.href = `movie.html?i=${target.id}`
});


