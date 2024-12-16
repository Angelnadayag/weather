document.addEventListener('DOMContentLoaded', async function() {
    const apiKey = 'd80cf25cabdf482baf575542242108';
    const cityName = 'Iligan';
    const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}`;
 
    try {
        const response = await fetch(apiEndpoint); // Wait for the fetch to complete
        const weatherData = await response.json(); // Wait for the response to be parsed into JSON
        console.log(weatherData);
 
        const weatherContainer = document.getElementById('weather');
        const temperatureInCelsius = weatherData.current.temp_c;
        const weatherDescription = weatherData.current.condition.text;
        const humidityLevel = weatherData.current.humidity;
 
        weatherContainer.innerHTML = `
            <h2>${cityName}</h2>
            <p><strong>Temperature:</strong> ${temperatureInCelsius}°C</p>
            <p><strong>Weather:</strong> ${weatherDescription}</p>
            <p><strong>Humidity:</strong> ${humidityLevel}%</p>
        `;
    } catch (error) {
        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `<p>Unable to retrieve weather data: ${error.message}</p>`;
    }
 });
 
 document.getElementById('fetchWeather').addEventListener('click', async function() {
    const apiKey = 'd80cf25cabdf482baf575542242108';
    const cityName = document.getElementById('cityInput').value;
    const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}`;
 
    try {
        const response = await fetch(apiEndpoint);
        const weatherData = await response.json();
        console.log(weatherData);
 
        const weatherContainer = document.getElementById('weather');
        const temperatureInCelsius = weatherData.current.temp_c;
        const weatherDescription = weatherData.current.condition.text;
        const humidityLevel = weatherData.current.humidity;
 
        weatherContainer.innerHTML = `
            <h2>${cityName}</h2>
            <p><strong>Temperature:</strong> ${temperatureInCelsius}°C</p>
            <p><strong>Weather:</strong> ${weatherDescription}</p>
            <p><strong>Humidity:</strong> ${humidityLevel}%</p>
        `;
    } catch (error) {
        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `<p>Unable to retrieve weather data: ${error.message}</p>`;
    }
 });