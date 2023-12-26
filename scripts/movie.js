import{getMovies} from './index.js'

const movieCardNode = document.getElementById('movieCard');

let movie = [];

const renderMovieNewPage = () => {
	movieCardNode.innerHTML = '';

movie.forEach(e => {

		const movieWrapper = document.createElement('div')
		movieWrapper.className = 'movie';

		const movieImg = document.createElement('div');
		movieImg.className = 'movie__img';
		movieImg.setAttribute('src', `${e.Poster}`);

		const movieText = document.createElement('div');
		movieText.className = 'movie__text';

		const movieTitle = document.createElement('p');
		movieTitle.innerHTML.className = 'movie__title-card';
		movieTitle.innerText = `${e.Title}`;

		const movieYear = document.createElement('p');
		movieYear.className = 'movie__year-card';
		movieTitle.innerText = `${e.Year}`;

		const movieRated = document.createElement('p');
		movieRated.className = 'movie__rated-card';
		movieRated.innerText = `${e.Rated}`;
		
		const movieRelease = document.createElement('p');
		movieRelease.className = 'movie__release-card';
		movieRelease.innerText = `${e.Released}`;

		const movieRunTime = document.createElement('p');
		movieRunTime.className = 'movie__runtime';
		movieRunTime.innerText = `${e.Runtime}`;

		const movieGenre = document.createElement('p');
		movieGenre.className = 'movie__genre-card';
		movieGenre.innerText = `${e.Genre}`;

		const movieDirector = document.createElement('p');
		movieDirector.className = 'movie__director-card';
		movieDirector.innerText = `${e.Director}`;

		const movieWriter = document.createElement('p');
		movieWriter.className = 'movie__scenario-card';
		movieWriter.innerText = `${e.Writer}`;

		const movieActors = document.createElement('p');
		movieActors.className = 'movie__actors-card';
		movieActors.innerText = `${e.Actors}`;

		const moviePlotCard = document.createElement('div');
		moviePlotCard.className = 'movie__plot-card';
		
		const moviePlot = document.createElement('p');
		moviePlot.className = 'movie__plot';

		movieWrapper.appendChild(movieImg);
		movieWrapper.appendChild(movieText);
		movieWrapper.appendChild(movieTitle);
		movieWrapper.appendChild(movieYear);
		movieWrapper.appendChild(movieRated);
		movieWrapper.appendChild(movieRelease);
		movieWrapper.appendChild(movieRunTime);
		movieWrapper.appendChild(movieGenre);
		movieWrapper.appendChild(movieDirector);
		movieWrapper.appendChild(movieWriter);
		moviePlotCard.appendChild(moviePlot);
		movieWrapper.appendChild(moviePlotCard);

		movieCardNode.appendChild(movieWrapper);


});
}