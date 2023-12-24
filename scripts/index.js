const API_KEY = '2f759f6';
const ERROR_INPUT_MESSAGE = "Введите название фильма";

const movieNameNode = document.getElementById("movieName");
const movieAddButtonNode = document.getElementById("movieAddButton");
const validationMessageNode = document.getElementById("validationMessage");
const moviesNode = document.getElementById("movies");

let movies = [];

const validation = (movieFromUser) => {
  let result = true;

  if (movieFromUser === "") {
    validationMessageNode.className = "validation__message";
    validationMessageNode.innerText = ERROR_INPUT_MESSAGE;
    result = false;
    return result;
  }

  validationMessageNode.className = "validation__message-hidden";

  return result;
};

const getNameMovieFromUser = () => {
  const movieName = movieNameNode.value.trim();

  clearInput();

	if (!validation(movieName)) {
    return;
  }

  return movieName;
};

// const newPostMovieHandler = () => {
//   const movieFromUser = getNameMovieFromUser();

//   if (!validation(movieFromUser)) {
//     return;
//   }
// };

//очистка инпута
const clearInput = () => (movieNameNode.value = "");

// const getMovies = () => {
// 	fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=2f759f6`)
// 	.then((response) => {
// 		if (response.ok) {
// 			return response.json();
// 		}
// 	})
// 	.then((res) )
// }


export const getMovies = async(movieName) => {
	// const response = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=2f759f6`)
	const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`)

	const movies = await response.json()

	return movies;
}


const renderMovies = (movies) => {
	console.log(movies)

		moviesNode.innerHTML = '';

		const movieWrapper = document.createElement('ul');
		movieWrapper.className = 'movies__list';

		movies.Search.forEach(e => {
			const movieEl = document.createElement('li');
			movieEl.className = 'movie';

			const moviePoster = document.createElement('div');
			moviePoster.className = 'poster';

			const imgLink = document.createElement('img');
			imgLink.setAttribute('src', `${e.Poster}`);
			// imgLink.textContent = `${e.Poster}`;

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

			movieWrapper.appendChild(movieEl);

			moviesNode.appendChild(movieWrapper);
		});
	}

	const getMoviesHandler = async() => {
		const movieName = getNameMovieFromUser();
		const movies = await getMovies(movieName);
		console.log(movies);
		renderMovies(movies);
	}

const clickToEnter = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    getNameMovieFromUser();
  }
};

movieNameNode.addEventListener('keydown', clickToEnter);
movieAddButtonNode.addEventListener("click",getMoviesHandler);


