console.log('weather app online');

// please use this key for weather API
const API_KEY = "bbaf86cac3c0e62ef035b4a051fdf664"
// const US = "1";
//country code is 1

// WRITE A PROGRAM TO SEARCH FOR AND RETURN THE LOCAL WEATHER BY ZIPCODE
// • ask the user for a zipcode - the zipcode should be a valid 5 digit code (for the US)
// • use async/await and fetch to get JSON data from the OpenWeather API
//   --> https://openweathermap.org/current
// • display the humidity, temperature and conditions ('rainy', 'snowy', etc..)
//   --> .weather-info and .weather-desc will help you format

const getWeather = async event => {
    // to use later
    let zip = document.querySelector("input").value;
    console.log(zip);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zip}&appid=${API_KEY}`);
    console.log(response.ok);

    const data = await response.json();
    console.log(data);
    
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.feels_like);
    console.log(data.weather[0].main);

    let cityName = data.name;
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    let weather = data.weather[0].main;
    
    let html = '';
    
    let regex = /[0-9]{5}/g;
    if(regex.test(zip)) {
        let display = document.querySelector(".info");
        html += `<div class=weather-info>City: ${cityName}, <br> Temperature: ${temperature} <br> Feels Like: ${feelsLike} <br> Weather: ${weather}</div>`;
        display.textContent = '';
        display.insertAdjacentHTML("beforeend", html);
    }
    else {
        document.querySelector(".error").textContent="Invalid Zip!"
    }
}
let searchBar = document.querySelector("button");
searchBar.addEventListener('click', getWeather);

// getWeather();
// getWeather('11111');

//Need city, temperature, weather
