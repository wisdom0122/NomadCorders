const quotes = [
    {
        quote: '아는 것이 힘이다',
        author: '프랜시스 베이컨',
    },
    {
        quote: '모르는 것이 약이다',
        author: '한국속담',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
