const API_KEY = '57ad85a702b55ff1fb3349f2d44c4ee5';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    console.log('you live in', lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector('#weather h3#name');
            const weather = document.querySelector('#weather h3#weath');
            const temp = document.querySelector('#weather h3#temp');
            const temp_actual = document.querySelector('#weather h3#temp_actual');
            const temp_min = document.querySelector('#weather h3#temp_min');
            const temp_max = document.querySelector('#weather h3#temp_max');
            const weather_title = document.querySelector('#weather h2#weather_title');

            city.innerText = `현재 위치: ${data.name}`;
            weather.innerText = `현재 날씨: ${data.weather[0].description}`;
            temp.innerText = `현재 온도: ${(data.main.temp - 273.15).toFixed(1)}`;
            temp_actual.innerText = `체감 온도: ${(data.main.feels_like - 273.15).toFixed(1)}`;
            temp_min.innerText = `최저 온도: ${(data.main.temp_min - 273.15).toFixed(1)}`;
            temp_max.innerText = `최고 온도: ${(data.main.temp_max - 273.15).toFixed(1)}`;
            weather_title.innerText = '▶   오늘의 날씨';
        });
}

function onGeoError() {
    alert('안보여. 정보가 불러와지지가 않아ㅜ');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
