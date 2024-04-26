const API_KEY = `3ccb30d96781bc594851cc97b74ccc15`;

const searchTemprerature = () => {
  const cityName = document.getElementById("temperature-field");
  const searchText = cityName.value;
  cityName.value = "";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (result) => {
  const cityName = document.getElementById("city-name");
  const cityTemperature = document.getElementById("city-temperature");
  const cityWeather = document.getElementById("city-weather");
  const weatherIcon = document.getElementById("weather-icon");

  cityName.innerText = result.name;
  cityTemperature.innerText = result.main.temp;
  cityWeather.innerText = result.weather[0].main;

  const iconURL = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute("src", iconURL);
};
