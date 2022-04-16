getData();
console.log(new Date().getMonth());
var days = [
  "000",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
  "Sunday",
];
var todayDate = new Date().getDate();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
let month = months[d.getMonth()];

var i = new Date();
var day = days[i.getDay()];

function getData() {
  document.querySelector(".weatherInfo").innerHTML = "";

  var keyword = document.querySelector("#searchbar").value;
  if (keyword == "") {
    keyword = "mumbai";
  }

  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    keyword +
    "&appid=96481dea7f710393572613a0c1ceefbd&units=metric";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var weatherInfo = document.querySelector(".weatherInfo");
      weatherInfo.insertAdjacentHTML(
        "beforeend",
        `<div class="date_day">
        <span class="day">${day}</span>
        <span class="date">${todayDate} ${month}</span>
      </div>
      <div class="city">
        <p>${data.name} - ${data.sys.country} </p>
      </div>
      <div class="temp">
        <h1>${data.main.temp}<span>°C</span></h1>
        <span><img id="logocloud" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="logo" /> </span>
      </div>
      <div class="humidity">
        <span><i id="humiditylogo" class="fa-solid fa-umbrella"></i>  ${data.main.humidity}% | ${data.weather[0].main} | P =${data.main.pressure} pascal</span>
      </div>`
      );
    })
    .catch((error) => {
      document
        .querySelector(".weatherInfo")
        .insertAdjacentHTML(
          "beforeend",
          `<h1 id="color">Enter city name correctly</h1>`
        );
    });

  document.querySelector("#searchbar").value = "";
}
