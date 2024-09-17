//your JS code here. If required.

// Get the button and weather data div
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDataDiv = document.getElementById('weatherData');

// API URL with API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de';

// Add event listener to button
getWeatherBtn.addEventListener('click', getWeather);

// Function to get weather data
function getWeather() {
    // Use Fetch API to send GET request
    fetch(apiUrl)
        .then(response => {
            // Check if response is OK
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Failed to retrieve weather data. Status code: ${response.status}`);
            }
        })
        .then(data => {
            // Extract relevant information
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp - 273.15; // Convert Kelvin to Celsius
            const feelsLike = data.main.feels_like - 273.15; // Convert Kelvin to Celsius
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display weather data
            const weatherText = `
                Current weather in London:
                Description: ${weatherDescription}
                Temperature: ${temperature.toFixed(2)}°C
                Feels like: ${feelsLike.toFixed(2)}°C
                Humidity: ${humidity}%
                Wind Speed: ${windSpeed} m/s
            `;
            console.log(weatherText);
            weatherDataDiv.innerText = weatherText;
        })
        .catch(error => {
            console.error(error);
            weatherDataDiv.innerText = 'Failed to retrieve weather data';
        });
}