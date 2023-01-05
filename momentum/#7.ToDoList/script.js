const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = [];
const todos_Key = 'todos';

function saveToDos() {
    localStorage.setItem(todos_Key, JSON.stringify(toDos));
}

function handleSubmit(e) {
    e.preventDefault();
    const savedInput = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: savedInput,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function clickDelete(e) {
    const deleteLi = e.target.parentElement;
    console.log(typeof parseInt(deleteLi.id));
    toDos = toDos.filter((item) => item.id != parseInt(deleteLi.id));
    deleteLi.remove();
    saveToDos();
}

function paintToDo(savedInput) {
    const li = document.createElement('li');
    li.id = savedInput.id;
    const span = document.createElement('span');
    span.innerText = savedInput.text;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', clickDelete);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener('submit', handleSubmit);

const savedToDos = localStorage.getItem(todos_Key);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
