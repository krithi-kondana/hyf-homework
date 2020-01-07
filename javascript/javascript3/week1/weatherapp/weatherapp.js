
function fetchWeather() {
  let placeValue = document.getElementById('place').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeValue}&appid=84b5c59049054a6076ceb266293c7bc7`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderWeather(data);
      renderMaps(data)
    })
}

let weather = document.getElementById('btn')
weather.addEventListener('click', fetchWeather)




function renderWeather(data) {
  document.getElementById('name').innerHTML = `<li>${data.name}</li>`
  document.getElementById('weather-description').innerHTML = `${data.weather[0].description}`
  document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  document.getElementById('temperature').innerHTML = `${(data.main.temp - 273.15).toFixed(0)}°C`
  document.getElementById('list').innerHTML = `<li>Wind: ${data.wind.speed}m/s</li>
                                                 <li>Clouds: ${data.clouds.all}%</li>
                                                 <li>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</li>
                                                 <li>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</li>                                                
                                                 `
}

let map;
let marker;
function renderMaps(data) {
  let coordinates = {
    lat: data.coord.lat,
    lng: data.coord.lon
  }  //Uncaught (in promise) TypeError: Cannot read property 'coord' of undefined (I dont know how to resolve this.Please help)
  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 10
  });
  // came up with a small extra feature(adding marker)
  marker = new google.maps.Marker({ position: coordinates, map: map });

}





// my current position optional
const location1 = document.getElementById('location')
location1.addEventListener('click', myLocation);

function fetchCurrentPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=84b5c59049054a6076ceb266293c7bc7`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderWeather(data);
      renderMaps(data)
    })
}
function myLocation() {
  navigator.geolocation.getCurrentPosition(fetchCurrentPosition)
}
