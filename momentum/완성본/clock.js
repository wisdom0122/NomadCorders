const clock = document.querySelector('#clock');

function showClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `현재시각 ${hour}:${minute}:${second}`;
}

showClock();
setInterval(showClock, 1000);
