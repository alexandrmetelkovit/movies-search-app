const movieCardNode = document.getElementById('movieCard');
const backBtnNode = document.getElementById('backBtn');

let movie = []

const params = new URLSearchParams(location.search);
const movieId = params.get('i');

console.log(movieId);

fetch(`https://www.omdbapi.com/?apikey=2f759f6&i=${movieId}`)

	.then((response) => {
		if (!response.ok) {
			return;
		} 
		return response.json();
	})

  .then((data) => {
    renderMovieNewPage(data)
		console.log(data)
  });

const renderMovieNewPage = (movie) => {

	movieCardNode.innerHTML = '';

	const movieWrapCard = document.createElement('div')
	movieWrapCard.className = 'movie__card-wrap';

	const movieWrap = document.createElement('div');
	movieWrap.className = ('movie__wrap');

	const movieImg = document.createElement('img');
	movieImg.className = 'movie__img';
	movieImg.setAttribute('src', `${movie.Poster}`);

	const movieWrapText = document.createElement('div');
	movieWrapText.className = 'movie__wrap-text';

	const movieDesc = document.createElement('ul');
	movieDesc.className = 'movie__desc';

	const movieTitle = document.createElement('li');
	movieTitle.className = 'movie__title';
	movieTitle.innerText = `${movie.Title}`;

	const movieYear = document.createElement('li');
	movieYear.className = 'movie__year';
	movieYear.innerText = 'Year: ' ;

	const spanYear = document.createElement('span');
	spanYear.className = 'span__year';
	spanYear.innerText = `${movie.Year}`;

	movieYear.appendChild(spanYear);

	const movieRated = document.createElement('li');
	movieRated.className = 'movie__rated';
	movieRated.innerText = 'Rated: ';

	const spanRated = document.createElement('span');
	spanRated.className = 'span__rated';
	spanRated.innerText = `${movie.Rated}`;

	movieRated.appendChild(spanRated);
	
	const movieRelease = document.createElement('li');
	movieRelease.className = 'movie__release';
	movieRelease.innerText = 'Released: ';

	const spanRelease = document.createElement('span');
	spanRelease.className = 'span__release';
	spanRelease.innerText = `${movie.Released}`;

	movieRelease.appendChild(spanRelease);

	const movieRunTime = document.createElement('li');
	movieRunTime.className = 'movie__runtime';
	movieRunTime.innerText = 'Runtime: ';

	const spanRunTime = document.createElement('span');
	spanRunTime.className = 'span__runtime';
	spanRunTime.innerText = `${movie.Runtime}`;

	movieRunTime.appendChild(spanRunTime);

	const movieGenre = document.createElement('li');
	movieGenre.className = 'movie__genre';
	movieGenre.innerText = 'Genre: '

	const spanGenre = document.createElement('span');
	spanGenre.className = 'span__genre';
	spanGenre.innerText = `${movie.Genre}`;

	movieGenre.appendChild(spanGenre);

	const movieDirector = document.createElement('li');
	movieDirector.className = 'movie__director';
	movieDirector.innerText = 'Director: ';

	const spanDirector = document.createElement('span');
	spanDirector.className = 'span__director';
	spanDirector.innerText = `${movie.Director}`;

	movieDirector.appendChild(spanDirector);

	const movieScenario = document.createElement('li');
	movieScenario.className = 'movie__scenario';
	movieScenario.innerText = 'Scenario: ';

	const spanScenario = document.createElement('span');
	spanScenario.className = 'span__scenario';
	spanScenario.innerText = `${movie.Writer}`;

	movieScenario.appendChild(spanScenario);

	const movieActors = document.createElement('li');
	movieActors.className = 'movie__actors';
	movieActors.innerText = 'Actors: ';

	const spanActors = document.createElement('span');
	spanActors.className = 'span__actors';
	spanActors.innerText = `${movie.Actors}`;

	movieActors.appendChild(spanActors);

	const moviePlot = document.createElement('p');
	moviePlot.className = 'movie__plot';
	moviePlot.innerText = `${movie.Plot}`;

	movieWrapCard.appendChild(movieWrap);
	movieWrap.appendChild(movieImg);
	movieWrap.appendChild(movieWrapText);
	movieWrapText.appendChild(movieDesc);
	movieDesc.appendChild(movieTitle);
	movieDesc.appendChild(movieYear);
	movieDesc.appendChild(movieRated);
	movieDesc.appendChild(movieRelease);
	movieDesc.appendChild(movieRunTime);
	movieDesc.appendChild(movieGenre);
	movieDesc.appendChild(movieDirector);
	movieDesc.appendChild(movieScenario);
	movieDesc.appendChild(movieActors);
	movieWrapCard.appendChild(moviePlot);

	movieCardNode.appendChild(movieWrapCard);
}

const backBtn = () => {
  history.back();
}

backBtnNode.addEventListener('click', 
backBtn);