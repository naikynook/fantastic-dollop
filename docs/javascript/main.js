console.log("this works");

// Pull the API key from your config.js file
const API_KEY = config.WEATHER_API_KEY;

function getWeatherData() {
  
  // Fetch the weather data using the ZIP code and the API key variable
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10128,us&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log("Here is our clean weather data:", data);
    });

}

// Invoke (call) the function so it actually runs
getWeatherData();