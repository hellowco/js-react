// Week5 Day5 - Dashboard
const weatherEl = document.getElementById('weather');
const moviesEl = document.getElementById('movies');
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=YOUR_API_KEY';
const MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY';

async function fetchDashboard() {
  try {
    const [weatherRes, movieRes] = await Promise.all([
      fetch(WEATHER_API).then(r => r.json()),
      fetch(MOVIE_API).then(r => r.json())
    ]);
    weatherEl.textContent = `Seoul: ${weatherRes.weather[0].description}, ${Math.round(weatherRes.main.temp - 273.15)}°C`;
    movieRes.results.slice(0,5).forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      moviesEl.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    alert('데이터 로딩 실패');
  }
}

fetchDashboard();
