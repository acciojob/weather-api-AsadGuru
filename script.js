//your JS code here. If required.

// API Key from OpenWeatherMap
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const city = 'London';
const units = 'metric'; // Use metric units for temperature

// Construct API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// Set headers
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

// Function to get weather data
function getWeather() {
    // Use Fetch API to send GET request
    fetch(apiUrl, { headers })
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
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display weather data
            const weatherText = `
                Current weather in ${city}:
                Description: ${weatherDescription}
                Temperature: ${temperature}°C
                Feels like: ${feelsLike}°C
                Humidity: ${humidity}%
                Wind Speed: ${windSpeed} m/s
            `;
            console.log(weatherText);
            document.getElementById('weatherData').innerText = weatherText;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('weatherData').innerText = 'Failed to retrieve weather data';
        });
}

// Call the function
getWeather();