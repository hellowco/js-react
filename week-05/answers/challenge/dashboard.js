// week-05 answers/challenge/dashboard.js
const tabWeather = document.getElementById('tab-weather');
const tabMovies = document.getElementById('tab-movies');
const weatherDiv = document.getElementById('weather');
const moviesUl = document.getElementById('movies');

tabWeather.addEventListener('click', () => {
  weatherDiv.style.display = '';
  moviesUl.style.display = 'none';
});
tabMovies.addEventListener('click', () => {
  weatherDiv.style.display = 'none';
  moviesUl.style.display = '';
});

// API URLs (place your API keys)
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=YOUR_API_KEY';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY';

async function loadDashboard() {
  try {
    const [weatherRes, movieRes] = await Promise.all([
      fetch(WEATHER_URL).then(r => r.json()),
      fetch(MOVIE_URL).then(r => r.json())
    ]);

    const tempC = (weatherRes.main.temp - 273.15).toFixed(1);
    weatherDiv.innerHTML = `<h3>Seoul 날씨</h3><p>${weatherRes.weather[0].description}, ${tempC}°C</p>`;

    moviesUl.innerHTML = '<h3>인기 영화</h3>';
    movieRes.results.slice(0,5).forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      moviesUl.appendChild(li);
    });
  } catch (e) {
    console.error(e);
    alert('데이터 로딩 실패');
  }
}

loadDashboard();
