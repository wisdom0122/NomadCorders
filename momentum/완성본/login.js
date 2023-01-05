const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginH1 = document.querySelector('#hello-h1');

function handleClickButton(event) {
    event.preventDefault();
    loginForm.classList.add('hidden');
    const inputName = loginInput.value;
    console.log('name');
    localStorage.setItem('name', inputName);
    showName(inputName);
}

function showName(inputName) {
    loginH1.innerText = `안녕하세요 ${inputName}님, 여기는 '위즈덤' 페이지입니다!`;
    loginH1.classList.remove('hidden');
}

const savedUserName = localStorage.getItem('name');

if (savedUserName === null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', handleClickButton);
} else {
    loginForm.classList.add('hidden');
    showName(savedUserName);
}
