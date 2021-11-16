const API_KEY = '52ce99b8361ff2d70b59024e1d87fbf0';

function fetchData(cityName) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName +
            "&units=metric&appid=" +
            API_KEY
      )
        .then((response) => {
          if (!response.ok) {
            renderNotFound();
            return;
          }
          return response.json();
        })
        .then((data) => render(data));
}

function renderNotFound() {
    document.getElementById('city').innerText = 'No city was found';
    document.getElementById('temp').innerText = '';
    document.getElementById('humidity').innerText = '';
    document.getElementById('wind').innerText = '';
}

function render(data) {
    document.getElementById('city').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp + " °C";
    document.getElementById('humidity').innerText ="Humidity: " + data.main.humidity + "%";
    document.getElementById('wind').innerText = "Wind speed: " + data.wind.speed + " km/h";
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchedValue = document.getElementById('search-bar').value;
    fetchData(searchedValue);
});

fetchData('vancouver');