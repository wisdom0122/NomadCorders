const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginH1 = document.querySelector('h1');

const Hidden_Classname = 'hidden';
const userName_Key = 'username';

function handleClickSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(Hidden_Classname);
    const inputName = loginInput.value;
    console.log(userName_Key);
    localStorage.setItem(userName_Key, inputName);
    paintingH1(inputName);
}

// loginForm.addEventListener('submit', handleClickSubmit);
// function handleClickButton() {
//     const userName = loginInput.value;
//     if (userName === '') {
//         alert('이름을 적어주세요');
//     } else if (userName.length > 10) {
//         alert('이름이 너무 길어요');
//     }
// }
// loginButton.addEventListener('click', handleClickButton);

function paintingH1(inputName) {
    loginH1.innerText = `hello ${inputName}`;
    loginH1.classList.remove(Hidden_Classname);
}

const savedUserName = localStorage.getItem(userName_Key);

if (savedUserName === null) {
    loginForm.classList.remove(Hidden_Classname);
    loginForm.addEventListener('submit', handleClickSubmit);
} else {
    paintingH1(savedUserName);
}
