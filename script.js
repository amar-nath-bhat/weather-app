async function generateWeather(city) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c544f7a293msh7d8934a0185be35p1929f7jsn78f40798efbb",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var addCity = document.getElementById("addCity");
  addCity.addEventListener("click", (e) => {
    cityWeather(city.value);
  });
});

async function cityWeather(city) {
  var weather = await generateWeather(city);
  var body = document.getElementById("body-tr");

  // Create a new table row
  var newRow = document.createElement("tr");

  // Create table cells for each weather property
  var cities = document.createElement("td");
  cities.textContent = city;
  cities.classList.add("text-center");

  var cloud_pct = document.createElement("td");
  cloud_pct.textContent = weather.cloud_pct;
  cloud_pct.classList.add("text-center");

  var feels_like = document.createElement("td");
  feels_like.textContent = weather.feels_like;
  feels_like.classList.add("text-center");
  var humidity = document.createElement("td");
  humidity.textContent = weather.humidity;
  humidity.classList.add("text-center");
  var min_temp = document.createElement("td");
  min_temp.textContent = weather.min_temp;
  min_temp.classList.add("text-center");
  var max_temp = document.createElement("td");
  max_temp.textContent = weather.max_temp;
  max_temp.classList.add("text-center");
  var sunrise = document.createElement("td");
  sunrise.textContent = convertTimestampToTime(weather.sunrise);
  sunrise.classList.add("text-center");
  var sunset = document.createElement("td");
  sunset.textContent = convertTimestampToTime(weather.sunset);
  sunset.classList.add("text-center");
  var temp = document.createElement("td");
  temp.textContent = weather.temp;
  temp.classList.add("text-center");
  var wind_degrees = document.createElement("td");
  wind_degrees.textContent = weather.wind_degrees;
  wind_degrees.classList.add("text-center");
  var wind_speed = document.createElement("td");
  wind_speed.textContent = weather.wind_speed;
  wind_speed.classList.add("text-center");
  // Append all td elements to the new row
  newRow.appendChild(cities);
  newRow.appendChild(cloud_pct);
  newRow.appendChild(feels_like);
  newRow.appendChild(humidity);
  newRow.appendChild(min_temp);
  newRow.appendChild(max_temp);
  newRow.appendChild(sunrise);
  newRow.appendChild(sunset);
  newRow.appendChild(temp);
  newRow.appendChild(wind_degrees);
  newRow.appendChild(wind_speed);

  // Append the new row to the table body
  body.appendChild(newRow);
}

function convertTimestampToTime(timestamp) {
  // Create a new Date object with the timestamp in milliseconds
  var date = new Date(timestamp * 1000);

  // Get the hours, minutes, and seconds from the Date object
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes(); // Add leading zero if minutes < 10
  var seconds = "0" + date.getSeconds(); // Add leading zero if seconds < 10

  // Format the time as HH:MM:SS
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}
