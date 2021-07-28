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

//local storage
//list of recently searched cities
//name of the city before the date
//fix UVIndex colors

//api key = fa591f1f8cf83f15d34fef752ceddbfa;

var cityList = document.querySelector("#previous-search");
var fetchButton = document.getElementById("searchBtn");
var inputValue = document.querySelector(".cityName");
 

// var userCity = JSON.parse(localStorage.getItem("userCity")) || [];

//API function
function getApi(event) {

  console.log(`Getting data from api for ${inputValue.value}!!!`);
  var requestUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    inputValue.value +
    "&units=imperial&id=524901&appid=fa591f1f8cf83f15d34fef752ceddbfa";
  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cityName = $("#picked-date").text(`${data.name} (${new Date().toLocaleString()})`);
      // $("#picked-date").text(cityName);
      
      var latitude = data.coord.lat;
      var longtitude = data.coord.lon;
      console.log(data);

      oneCallWeatherData(latitude, longtitude);
    });
} //end of API function


function oneCallWeatherData(latitude, longitude) {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&units=imperial&id=524901&appid=fa591f1f8cf83f15d34fef752ceddbfa"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (oneCallData) {
      console.log("Once call data", oneCallData);
      //adding data to html
      
      var weatherDesc = oneCallData.current.weather[0].main;
      $("#weather").text("Weather: " + weatherDesc);
      var weatherIcon = oneCallData.current.weather[0].icon;
      $("#weatherIcon").attr(
        "src",
        "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
      );
      $("#weatherIcon").attr("alt", "Weather Icon");
      var tempValue = oneCallData.current.temp;
      $("#temp").text("Temperature: " + tempValue + "°F");
      var humidityValue = oneCallData.current.humidity;
      $("#hum").text("Humidity: " + humidityValue + "%");
      var windValue = oneCallData.current.wind_speed;
      $("#wind").text("Wind Speed: " + windValue + "mph");
      var uvIndex = oneCallData.current.uvi;
      $("#uvIndex").text("UV Index: " + uvIndex);
      var dateValue = oneCallData.current.dt;
      // var newDate = moment.unix(dateValue).format("(MM/DD/YYYY)");
      // $("#picked-date").text(newDate);
      // console.log(oneCallData);
    
//       //function for setting colors of UVI
// function uvIndexScale () {
//   if (uvIndex <= 2) {
//     uvIndex.addClass('low');
//     uvIndex.removeClass('moderate high veryHigh extreme');
//   }
//   else if (uvIndex > 2 && uvIndex <=5) {
//     uvIndex.addClass ('moderate');
//     uvIndex.removeClass ('low high veryHigh extreme');
//   }
//   else if (uvIndex > 5 && uvIndex <=7) {
//     uvIndex.addClass ('high');
//     uvIndex.removeClass ('low moderate veryHigh extreme');
//   }
//   else if (uvIndex > 7 && uvIndex <=10) {
//     uvIndex.addClass ('veryHigh');
//     uvIndex.removeClass ('low moderate high extreme');
//   }
//   else if (uvIndex > 10) { 
//     uvIndex.addClass ('extreme');
//     uvIndex.removeClass ('low moderate high veryHigh');
//   }
// }
//     uvIndexScale ();



//Displaying forecast weather 
var day1Date = new Date(oneCallData.daily[0].dt * 1000).toLocaleDateString("en-US"); 
$('#day1-date').text(day1Date);
var weatherIcon = oneCallData.daily[0].weather[0].icon;
$("#day1-img").attr(
  "src",
  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
);
var tempValue = oneCallData.daily[0].temp.max;
$("#day1-temp").text("Temperature: " + tempValue);
var humidityValue = oneCallData.daily[0].humidity;
$("#day1-hum").text("Humidity: " + humidityValue);

var day2Date = new Date(oneCallData.daily[1].dt * 1000).toLocaleDateString("en-US"); 
$('#day2-date').text(day2Date);
var weatherIcon = oneCallData.daily[1].weather[0].icon;
$("#day2-img").attr(
  "src",
  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
);
var tempValue = oneCallData.daily[1].temp.max;
$("#day2-temp").text("Temperature: " + tempValue);
var humidityValue = oneCallData.daily[1].humidity;
$("#day2-hum").text("Humidity: " + humidityValue);

var day3Date = new Date(oneCallData.daily[2].dt * 1000).toLocaleDateString("en-US"); 
$('#day3-date').text(day3Date);
var weatherIcon = oneCallData.daily[2].weather[0].icon;
$("#day3-img").attr(
  "src",
  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
);
var tempValue = oneCallData.daily[2].temp.max;
$("#day3-temp").text("Temperature: " + tempValue);
var humidityValue = oneCallData.daily[2].humidity;
$("#day3-hum").text("Humidity: " + humidityValue);

var day4Date = new Date(oneCallData.daily[3].dt * 1000).toLocaleDateString("en-US"); 
$('#day4-date').text(day4Date);
var weatherIcon = oneCallData.daily[3].weather[0].icon;
$("#day4-img").attr(
  "src",
  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
);
var tempValue = oneCallData.daily[3].temp.max;
$("#day4-temp").text("Temperature: " + tempValue);
var humidityValue = oneCallData.daily[3].humidity;
$("#day4-hum").text("Humidity: " + humidityValue);

var day5Date = new Date(oneCallData.daily[4].dt * 1000).toLocaleDateString("en-US"); 
$('#day5-date').text(day5Date);
var weatherIcon = oneCallData.daily[4].weather[0].icon;
$("#day5-img").attr(
  "src",
  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
);
var tempValue = oneCallData.daily[4].temp.max;
$("#day5-temp").text("Temperature: " + tempValue);
var humidityValue = oneCallData.daily[4].humidity;
$("#day5-hum").text("Humidity: " + humidityValue);

    });
}


// //Local Storage function
// function saveCities() {
//   userCity.push(inputValue);
//   localStorage.setItem("userCity", JSON.stringify(userCity));

// }

//local storage
$("#searchBtn").on("click", function(){
  var cityValue = $("#cityName").val();
  var cityListEl = $("<li>").text(cityValue);
  //
  cityListEl.appendTo(".list");
  getApi(cityValue);

  console.log(cityValue);

  localStorage.getItem(cityValue);
  localStorage.setItem(cityListEl, cityValue);

});



// fetchButton.addEventListener("click", getApi);






