// 1. Target the HTML input box and search button
const input = document.querySelector(".zipcode");
const btn = document.querySelector(".search-button");

// 2. The Data Machine: Fetches weather for whatever zip code is passed into it
function getWeatherData(zip) {
  const API_KEY = config.WEATHER_API_KEY;
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log("Live Weather Data:", data);
    });
}

// 3. The Event Handler: Runs when the button is clicked
function getZipCode(e) {
  e.preventDefault();        // Stops the form from reloading the page
  const zip_code = input.value; // Grabs the text typed into the box
  getWeatherData(zip_code);  // Passes that text into the data machine
}

// 4. The Listener: Attaches the handler radar to the button click
btn.addEventListener("click", getZipCode);