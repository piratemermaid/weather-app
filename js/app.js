$(document).foundation()

init();

// testWeather(); // used for design

var cityName, clouds, humidity, temp, tempMax, tempMin, description, windSpeed, weatherIcon;

function weatherCallback(weatherData) {
  console.log(weatherData);

  cityName = weatherData.name;
  if(cityName.length > 9) {
    document.querySelector('.data__city').style.fontSize = '30px';
  }
  clouds = weatherData.clouds.all;
  humidity = weatherData.main.humidity;
  temp = weatherData.main.temp;
  tempMax = weatherData.main.temp_max;
  tempMin = weatherData.main.temp_min;
  description = weatherData.weather[0].description;
  windSpeed = weatherData.wind.speed;
  weatherIcon = weatherData.weather[0].icon;

  document.querySelector('.data__city').textContent = cityName;
  document.querySelector('.data__description').textContent = description;
  document.querySelector('.data__temp').textContent = Math.round(temp) + '°';
  document.querySelector('.data__tempmax').textContent = Math.round(tempMax) + '°';
  document.querySelector('.data__tempmin').textContent = Math.round(tempMin) + '°';
  document.querySelector('.data__clouds').textContent = clouds;
  document.querySelector('.data__humidity').textContent = humidity;
  document.querySelector('.data__wind').textContent = windSpeed;
  document.querySelector('.data__icon').innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherIcon + '.png" />';
}

document.querySelector('.enter-zip').addEventListener('keypress', function(e) {
  var zip, newZip, apiCall;

  if (e.keyCode === 13 || e.which === 13) {
    newZip = document.querySelector('.enter-zip').value;
    if (newZip  !== '') {
      zip = newZip;
    }
    document.querySelector('.enter-zip').blur();
    document.querySelector('.enter-zip').value = '';
    
    apiCall = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&units=imperial&APPID=8b6ee5a2e26849be1f88b30ebf28dc20';

    $.getJSON(apiCall, weatherCallback);

    // testWeather();
  }
})










function init() {
  var newHeight = Math.floor(window.innerHeight / 11);
  document.querySelector('.enter').style.height = newHeight + 'px';
  newHeight = newHeight * 3;
  newLineHeight = newHeight - 20; // 10px top & bottom padding, so -20px
  var allBox1s = document.querySelectorAll('.box1');
  for(i = 0; i < allBox1s.length; i++) {
    allBox1s[i].style.height = newHeight + 'px';
    allBox1s[i].style.lineHeight = newLineHeight + 'px';
  }

  var allBox2s = document.querySelectorAll('.box2');
  newLineHeight = newLineHeight / 2;
  for(i = 0; i < allBox2s.length; i++) {
    allBox2s[i].style.height = newHeight + 'px';
    allBox2s[i].style.lineHeight = newLineHeight + 'px';
  }
}





















function testWeather() {
  cityName = 'Boston';
  description = 'Haze';
  temp = 82.87;
  tempMax = 91.4;
  tempMin = 69.8;
  clouds = 75;
  humidity = 67;
  windSpeed = 8.05;
  weatherIcon = '50d';

  document.querySelector('.data__city').textContent = cityName;
  document.querySelector('.data__description').textContent = description;
  document.querySelector('.data__icon').innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherIcon + '.png" />';
  document.querySelector('.data__temp').textContent = Math.round(temp) + '°';
  document.querySelector('.data__tempmax').textContent = Math.round(tempMax) + '°';
  document.querySelector('.data__tempmin').textContent = Math.round(tempMin) + '°';
  document.querySelector('.data__clouds').textContent = clouds;
  document.querySelector('.data__humidity').textContent = humidity;
  document.querySelector('.data__wind').textContent = windSpeed;
}