// access elements in the DOM
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

// NEW: Target the image tag
let image = document.querySelector("img");

// write a function to get weather data
const getWeatherData = (zip) => {
  const API_KEY = "601d9745ea5b2e9a17a7fe5ab75d857a";
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let local_weather_data = data;
      
      CITY_NAME.textContent = local_weather_data.name;
      
      let weather_in_celsius = Math.round(
        local_weather_data.main.temp - 273
      );
      CITY_TEMP.textContent = weather_in_celsius + " C";

      // NEW: Grab the icon code and set the image source
       let WEATHER_ICON = local_weather_data.weather[0].icon
      image.setAttribute(
        'src', 
        `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`
      );
  });
}

form.reset();
input.focus();

const getZipcode = e => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', getZipcode);