const images = ['car_mark_green.png', 'car_mark_red.png', 'car_mark_yellow.png'];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${randomImage}`;

document.body.appendChild(bgImage);
