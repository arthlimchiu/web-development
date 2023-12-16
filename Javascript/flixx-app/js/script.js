const global = {
    currrentPage: window.location.pathname.replace("/Javascript/flixx-app", ""),
    search: {
        term: '',
        type: '',
        page: 1,
        totalPages: 1
    },
    api: {
        apiKey: '9fd261b4082fd36bb73e5398227bde4d',
        apiUrl: 'https://api.themoviedb.org/3/'
    }
};
const popularMoviesContainer = document.querySelector("#popular-movies");
const popularShowsContainer = document.querySelector("#popular-shows");
const movieDetails = document.querySelector("#movie-details");
const showDetails = document.querySelector('#show-details');
const searchResultsContainer = document.querySelector('#search-results');

async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');
    results.forEach((movie) => {
        const div = document.createElement("div");
        div.classList.add("card");
        const img = movie.poster_path ? `
            <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="card-img-top"
            alt="${movie.title}"/>` : `
            <img
            src="images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
            />`;
        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
            ${img}
            </a>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">
                <small class="text-muted">Release: ${movie.release_date}</small>
                </p>
            </div>
        `;
        popularMoviesContainer.appendChild(div);
    });
}

async function displayPopularShows() {
    const { results } = await fetchAPIData('tv/popular');
    results.forEach((show) => {
        const div = document.createElement("div");
        div.classList.add("card");
        const img = show.poster_path ? `
            <img
            src="https://image.tmdb.org/t/p/w500${show.poster_path}"
            class="card-img-top"
            alt="${show.name}"/>` : `
            <img
            src="images/no-image.jpg"
            class="card-img-top"
            alt="${show.name}"
            />`;
        div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
            ${img}
            </a>
            <div class="card-body">
                <h5 class="card-title">${show.name}</h5>
                <p class="card-text">
                <small class="text-muted">Air Date: ${show.first_air_date}</small>
                </p>
            </div>
        `;
        popularShowsContainer.appendChild(div);
    });
}

async function displayMovieDetails() {
    const id = window.location.search.split("=")[1];
    const movie = await fetchAPIData(`movie/${id}`);

    // Overlay for background image
    displayBackgroundImage('movie', movie.backdrop_path);

    const div = document.createElement("div");
    const img = movie.poster_path ? `
        <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="${movie.title}"
        />` : `
        <img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${movie.title}"
        />
    `;
    const genres = movie.genres.map((genre) => `<li>${genre.name}</li>`).join('');
    const productionCompanies = movie.production_companies.map((company) => company.name).join(', ');
    div.innerHTML = `
        <div class="details-top">
            <div>${img}</div>
            <div>
            <h2>${movie.title}</h2>
            <p>
                <i class="fas fa-star text-primary"></i>
                ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>${movie.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">${genres}</ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
            </div>
        </div>
        <div class="details-bottom">
            <h2>Movie Info</h2>
            <ul>
            <li><span class="text-secondary">Budget:</span> $${movie.budget.toLocaleString()}</li>
            <li><span class="text-secondary">Revenue:</span> $${movie.revenue.toLocaleString()}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
            </ul>
            <h4>Production Companies</h4>
            <div class="list-group">${productionCompanies}</div>
        </div>
    `;
    movieDetails.appendChild(div);
}

async function displayShowDetails() {
    const id = window.location.search.split("=")[1];
    const show = await fetchAPIData(`tv/${id}`);

    // Overlay for background image
    displayBackgroundImage('tv', show.backdrop_path);

    const img = show.poster_path ? `
        <img
        src="https://image.tmdb.org/t/p/w500${show.poster_path}"
        class="card-img-top"
        alt="Show Name"
        /> ` : `
        <img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${show.title}"
        />
    `;
    const genres = show.genres.map((genre) => `<li>${genre.name}</li>`).join('');
    const productionCompanies = show.production_companies.map((company) => company.name).join(', ');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="details-top">
            <div>${img}</div>
            <div>
            <h2>${show.title}</h2>
            <p>
                <i class="fas fa-star text-primary"></i>
                ${show.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
            <p>${show.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">${genres}</ul>
            <a href="${show.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
            </div>
        </div>
        <div class="details-bottom">
            <h2>Show Info</h2>
            <ul>
            <li><span class="text-secondary">Number Of Episodes:</span> ${show.number_of_episodes}</li>
            <li>
                <span class="text-secondary">Last Episode To Air:</span> ${show.last_episode_to_air.name}
            </li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
            </ul>
            <h4>Production Companies</h4>
            <div class="list-group">${productionCompanies}</div>
        </div>
    `;
    showDetails.appendChild(div);
}

// Display backdrop on details pages
function displayBackgroundImage(type, backgroundPath) {
    const overlayDiv = document.createElement('div');
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.1';

    if (type === 'movie') {
        document.querySelector('#movie-details').appendChild(overlayDiv);
    } else {
        document.querySelector('#show-details').appendChild(overlayDiv);
    }
}

// Search Movies/Shows
async function search() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    global.search.type = urlParams.get('type');
    global.search.term = urlParams.get('search-term');

    if (global.search.term !== '' && global.search.term !== null) {
        const { results, total_pages, page } = await searchAPIData();

        if (results.length === 0) {
            showAlert('No results found');
            return;
        }

        displaySearchResults(results);
    } else {
        showAlert('Please enter a search term');
    }
}

function displaySearchResults(results) {
    results.forEach((result) => {
        const div = document.createElement("div");
        div.classList.add("card");
        const img = result.poster_path ? `
            <img
            src="https://image.tmdb.org/t/p/w500${result.poster_path}"
            class="card-img-top"
            alt="${global.search.type === 'movie' ? result.title : result.name}"/>` : `
            <img
            src="images/no-image.jpg"
            class="card-img-top"
            alt="${global.search.type === 'movie' ? result.title : result.name}"
            />`;
        div.innerHTML = `
            <a href="${global.search.type}-details.html?id=${result.id}">
            ${img}
            </a>
            <div class="card-body">
                <h5 class="card-title">${global.search.type === 'movie' ? result.title : result.name}</h5>
                <p class="card-text">
                <small class="text-muted">Release: ${global.search.type === 'movie' ? result.release_date : result.first_air_date}</small>
                </p>
            </div>
        `;
        searchResultsContainer.appendChild(div);
    });
}

// Display slider movies
async function displaySlider() {
    const { results } = await fetchAPIData('movie/now_playing');

    results.forEach((movie) => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            </a>
            <h4 class="swiper-rating">
                <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(1)} / 10
            </h4>
        `;
        document.querySelector('.swiper-wrapper').appendChild(div);
    });
    initSwiper();
}

function initSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: {
            500: {
                slidesPerView: 2
            },
            700: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiUrl;

    showSpinner();
    
    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    
    const data = await response.json();

    hideSpinner();

    return data
}

// Make a search request for movies
async function searchAPIData() {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiUrl;

    showSpinner();
    
    const response = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}`);
    
    const data = await response.json();

    hideSpinner();

    return data
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

// Show Alert
function showAlert(message, className = 'alert-error') {
    const alertEl = document.createElement('div');
    alertEl.classList.add('alert', className);
    alertEl.appendChild(document.createTextNode(message));
    document.querySelector('#alert').appendChild(alertEl);

    setTimeout(() => {
        alertEl.remove();
    }, 3000);
}

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
        if (link.getAttribute("href") === global.currrentPage) {
            link.classList.add("active");
        }
    });
}

// Init App
function init() {
    switch (global.currrentPage) {
        case "/":
        case "/index.html":
            displaySlider();
            displayPopularMovies();
            break;
        case "/shows.html":
            displayPopularShows();
            break;
        case "/movie-details.html":
            displayMovieDetails();
            break;
        case "/tv-details.html":
            displayShowDetails();
            break;
        case "/search.html":
            search();
            break;
    }
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);