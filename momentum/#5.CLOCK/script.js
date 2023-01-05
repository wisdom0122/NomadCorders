const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //12,13번코드 합치면, 실시간으로 시계보기 가능
