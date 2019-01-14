(function () {
		'use strict';

		let body          = document.querySelector('body'),
		    closeIcon     = document.querySelector('.close-icon'),
		    characterList = document.querySelector('.js-character-list'),
		    movieTitle    = document.querySelector('.movie-title'),
		    movieDesc     = document.querySelector('.movie-description'),
		    movieEpisode  = document.querySelector('.movie-episode'),
		    movieDir      = document.querySelector('.movie-director'),
		    movieProd     = document.querySelector('.movie-producer'),
		    movieDate     = document.querySelector('.movie-date'),
		    movieImage    = document.querySelector('.movie-image'),
		    panelRight    = document.querySelector('.js-panel-right'),
		    panelLeft     = document.querySelector('.js-panel-left'),
		    jsPanel       = document.querySelectorAll('.js-panel'),
		    searchField   = document.querySelector('.search-input'),
		    searchResult  = document.querySelector('.js-search-result'),
		    episode,
		    itemLink,
		    resultContent,
		    content;

		//Call Character List
		const characters = async () => {
			const response = await fetch('https://swapi.co/api/people');
			const json     = await response.json();
			let results    = json.results;

			results.forEach(item => {
				let url_index = Math.floor(Math.random() * item.films.length);
				content       = `<li class="list-item"><a class="js-item-link" href="#" data-film="${item.films[url_index]}">${item.name}</a></li>`;
				characterList.innerHTML += content;
			});

			itemLink = document.querySelectorAll('.js-item-link');

			itemLink.forEach(item => {
				item.addEventListener('click', function () {
					itemLink.forEach(el => {
						el.classList.remove('active');
					});
					jsPanel.forEach(e => {
						e.classList.remove('is-active');
					});
					panelRight.classList.add('is-active');
					body.classList.add('is-open');
					item.classList.add('active');
					movie(item);
				});
			});
		};

		//Call Movie after Click on Character
		const movie = async (item) => {
			let url        = item.dataset.film;
			const response = await fetch(url);
			const data     = await response.json();
			console.log(data);

			let episodeNum = function (num) {
				console.log(num);
				switch (num) {
					case 1:
						episode = 'I';
						break;
					case 2:
						episode = 'II';
						break;
					case 3:
						episode = 'III';
						break;
					case 4:
						episode = 'IV';
						break;
					case 5:
						episode = 'V';
						break;
					case 6:
						episode = 'VI';
						break;
					case 7:
						episode = 'VII';
						break;
					case 8:
						episode = 'VIII';
						break;
					default:
						return null;
				}
				return episode;
			};

			movieTitle.innerHTML   = data.title;
			movieDesc.innerHTML    = data.opening_crawl;
			movieEpisode.innerHTML = `Episode ${episodeNum(data.episode_id)}`;
			movieDir.innerHTML     = `<strong>Directed By:</strong> ${data.director}`;
			movieProd.innerHTML    = `<strong>Produced By:</strong> ${data.producer}`;
			movieDate.innerHTML    = `<strong>Release Date:</strong> ${data.release_date.split('-').reverse().join('-')}`;
			movieImage.innerHTML   = `<img src="/images/movies/episode_${data.episode_id}.jpg" alt="${data.title} Movie Poster" class="movie-poster">`;
		};

		//Display Search Results
		const showResults = async (e) => {
			let srchString         = e.currentTarget.value;
			searchResult.innerHTML = '';
			searchResult.classList.add('active');
			characterList.classList.add('hidden');

			if (srchString.length === 0) {
				characterList.classList.remove('hidden');
				searchResult.classList.remove('active');
				return;
			}

			if (srchString != null) {
				srchString     = srchString.trim().toLowerCase();
				const response = await fetch('https://swapi.co/api/people');
				const json     = await response.json();
				let data       = json.results;

				let results = data.filter(function (item) {
					let name = item.name.toLowerCase();

					if (name.indexOf(srchString) !== -1) {
						return item;
					}
				});

				if (results.length === 0) {
					searchResult.innerHTML = '<div>No Characters Match your Query</div>';
				}

				results.forEach(item => {
					let url_index = Math.floor(Math.random() * item.films.length);
					content       = `<li class="list-item"><a class="js-item-link" href="#" data-film="${item.films[url_index]}">${item.name}</a></li>`;
					searchResult.innerHTML += content;
				});

				itemLink = document.querySelectorAll('.js-item-link');

				itemLink.forEach(item => {
					item.addEventListener('click', function () {
						itemLink.forEach(el => {
							el.classList.remove('active');
						});
						jsPanel.forEach(e => {
							e.classList.remove('is-active');
						});
						panelRight.classList.add('is-active');
						body.classList.add('is-open');
						item.classList.add('active');
						movie(item);
					});
				});
			}
		};

		//Close Right Panel
		closeIcon.addEventListener('click', function () {
			body.classList.remove('is-open');
			panelRight.classList.remove('is-active');
			panelLeft.classList.add('is-active');
			itemLink.forEach(el => {
				el.classList.remove('active');
			});
		});

		let closePanel = () => {
			body.classList.remove('is-open');
			panelRight.classList.remove('is-active');
			panelLeft.classList.add('is-active');
			itemLink.forEach(el => {
				el.classList.remove('active');
			});
		};

		characters();

		searchField.addEventListener('keyup', showResults, false);
		closeIcon.addEventListener('click', closePanel, false);
		//Added for Accessibility Purposes
		closeIcon.addEventListener('keyup',function(e){
			if (e.keyCode === 13) {
				closePanel();
			}
		});
	}
)();