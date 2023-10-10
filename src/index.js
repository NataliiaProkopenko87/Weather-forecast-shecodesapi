//Search city
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#heading-city");
  let enterCity = document.querySelector("#enter-city");
  city.innerHTML = enterCity.value;
  searchWeather(enterCity.value);
}
document.querySelector("#search-form").addEventListener("submit", search);

//Current date
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurhday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

//Search weather
function showWeather(response) {
  console.log(response);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.daily[0].temperature.day);
  document.querySelector("#heading-city").innerHTML = response.data.city;
  document.querySelector("#description").innerHTML =
    response.data.daily[0].condition.description;
  document.querySelector("#humidity").innerHTML = response.data.daily[0].temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.daily[0].wind.speed
  );
  document.querySelector("#icon").setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`);
  document.querySelector("#icon").setAttribute("alt",response.data.daily[0].condition.description);
}

function searchWeather(city) {
  //let apiKey = "d2c2ea35d1cdabb51672d9219b227afa";
  let apiKey = "4ec6b7af82d22aa620284eof16t9aa32";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

//Current position&temperature
function currentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  //let apiKey = "d2c2ea35d1cdabb51672d9219b227afa";
  let apiKey = "4ec6b7af82d22aa620284eof16t9aa32";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showCurrentWeather);
}

function showCurrentWeather(response) {
  document.querySelector("#heading-city").innerHTML = response.data.city;

  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current);
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#humidity").innerHTML = response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

document.querySelector(".input-btn").addEventListener("click", currentPosition);
//select cities
function weatherKyiv(event) {
  event.preventDefault();
  let headingCity = document.querySelector("#heading-city"); 
  let cityKyiv = document.querySelector("#kyiv");
  headingCity.innerHTML = cityKyiv.value;
  citiesWeather(cityKyiv.value);
}
document.querySelector("#kyiv").addEventListener("click",weatherKyiv);

function weatherWroclaw(event) {
  event.preventDefault();
  let headingCity = document.querySelector("#heading-city"); 
  let cityWroclaw = document.querySelector("#wroclaw");
  headingCity.innerHTML = cityWroclaw.value;
  citiesWeather(cityWroclaw.value);
}
document.querySelector("#wroclaw").addEventListener("click",weatherWroclaw);

function weatherSanremo(event) {
  event.preventDefault();
  let headingCity = document.querySelector("#heading-city"); 
  let citySanremo = document.querySelector("#sanremo");
  headingCity.innerHTML = citySanremo.value;
  citiesWeather(citySanremo.value);
}
document.querySelector("#sanremo").addEventListener("click",weatherSanremo);

function weatherAlicante(event) {
  event.preventDefault();
  let headingCity = document.querySelector("#heading-city"); 
  let cityAlicante = document.querySelector("#alicante");
  headingCity.innerHTML = cityAlicante.value;
  citiesWeather(cityAlicante.value);
}
document.querySelector("#alicante").addEventListener("click",weatherAlicante);
//cities weather
function citiesWeather(cities) {
  let apiKey = "4ec6b7af82d22aa620284eof16t9aa32";
  //let apiKey = "d2c2ea35d1cdabb51672d9219b227afa";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cities}&key=${apiKey}&units=metric`;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
