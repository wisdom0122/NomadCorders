const gallery = document.querySelector('#gallery');

const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '8.jpg', '9.jpg'];

const randomImg = img[Math.floor(Math.random() * img.length)];

const BGImage = document.createElement('img');

BGImage.src = `지혜의 크롬웹/${randomImg}`;
// BGImage.style.height = '400px';
// BGImage.style.width = 'auto';

gallery.appendChild(BGImage);
