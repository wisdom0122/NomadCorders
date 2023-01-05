const API_KEY = '57ad85a702b55ff1fb3349f2d44c4ee5';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('you live in', lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            weather.innerText = data.name;
            city.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert('안보여. 정보가 불러와지지가 않아ㅜ');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
