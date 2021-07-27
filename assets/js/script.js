// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var cityList = document.querySelector('#previous-search');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://openweathermap.org/api.openweathermap.org/data/2.5/weather?q=London&appid=fa591f1f8cf83f15d34fef752ceddbfa';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   for (var i = 0; i < data.length; i++) { 
    //   var listItem = document.createElement('li');
    //   listItem.textContent = data[i].weather[0].icon
        console.log(data);
    });
    
fetchButton.addEventListener('click', getApi);

// // jQuery API
// $.ajax({
//     url: 'https://openweathermap.org/api.openweathermap.org/data/2.5/weather?q=Baxter&appid=fa591f1f8cf83f15d34fef752ceddbfa'
//     method: "GET"
// }).then (function (response) {
//     console.log (response)

// })
