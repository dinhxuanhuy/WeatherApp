import { getWeatherData, extractWeatherInfo, ChangeImg } from './script.js';
//import './styles.css';
let button = document.querySelector('.search-button');
let Weatherpanel = document.querySelector('.weather-info');
button.addEventListener('click', async () => {
    console.log('Button clicked, fetching weather data...');
    const weatherData = await getWeatherData();
    if (weatherData) { 
        const weatherInfo = extractWeatherInfo(weatherData);
        document.querySelector('.city-name').textContent = weatherInfo.city;
        document.querySelector('.humidity').textContent = `Humidity: ${weatherInfo.humidity}%`;
        document.querySelector('.wind-speed').textContent = `Wind Speed: ${weatherInfo.windspeed} mph`;
        document.querySelector('.weather-icon').src = weatherInfo.iconUrl;
        document.querySelector('.temperature').textContent = `Temperature: ${weatherInfo.temperature}°C`;
        document.querySelector('.description').textContent = `Description: ${weatherInfo.description}`;
        document.querySelector('.date').textContent = `Time: ${weatherInfo.date}`;
        ChangeImg(weatherInfo.icon + ' ' + weatherInfo.condition);
        Weatherpanel.classList.remove('hidden');
        console.log('Weather data retrieved successfully:', weatherInfo);
    } else {
        console.error('Failed to retrieve weather data.');
    }
});