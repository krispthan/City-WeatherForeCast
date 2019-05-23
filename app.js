"use strict";

searchBtn.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    let cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    let http = new XMLHttpRequest();
    let apiKey = 'cfef0f6285eef65c0a99672e3d0b047b';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    let method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            let data = JSON.parse(http.responseText);
            let weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}