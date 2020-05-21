let todoList = document.querySelector('#todoList');
let btn = document.querySelector('#btn');
let input = document.querySelector('#addTodo');

// get all todos 
function getAllTodos() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5000', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const todos = JSON.parse(this.responseText);
            todoList.innerHTML = '';
            for(todo of todos) {
                todoList.innerHTML += 
                    `<li>
                        <div>
                            ${todo.title}
                        </div>
                        <div>
                            <i data-id="${todo.id}" class="pencil fas fa-pencil-alt"></i>
                            <i data-id="${todo.id}" class="trashcan fas fa-trash-alt"></i>
                        </div>
                    </li>`;
            }
            let pencils = document.querySelectorAll('.pencil');
            let trashcans = document.querySelectorAll('.trashcan');
            addUpdateDeleteListeners(pencils, trashcans);
        }
    };

    xhr.send();
};

// create new todo
function createTodo(title) {
    const url = `http://localhost:5000/${title}`;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.onload = function() {
        if(this.status === 200) {
            getAllTodos();
        }
    };

    xhr.send();
};

// delete todo 
function deleteTodo(id) {
    const url = `http://localhost:5000/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);

    xhr.onload = function() {
        if(this.status === 200) {
            getAllTodos();
        }
    };

    xhr.send();
};

//update todo 
function updateTodo(id, title) {
    const url = `http://localhost:5000/${id}/${title}`;
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);

    xhr.onload = function() {
        if(this.status === 200) {
            getAllTodos();
        }
    };

    xhr.send();
};

// addEventListeners
function addUpdateDeleteListeners(pencils, trashcans) {
    pencils.forEach(pencil => {
        pencil.addEventListener('click', () => {
            const id = pencil.getAttribute('data-id');
            let title = prompt('Please enter updated todo');
            if(title !== '' && title !== null) {
                updateTodo(id, title);
            }
        });
    });
    trashcans.forEach(trashcan => {
        trashcan.addEventListener('click', () => {
            const id = trashcan.getAttribute('data-id');
            deleteTodo(id);
        });
    });
};

btn.addEventListener('click', () => {
    const title = input.value;
    if(title !== '' && title !== null) {
        createTodo(title);
    } else {
        alert('You must provide a valid title!');
    }
    input.value = '';
});

input.addEventListener('focus', () => {
    input.setAttribute('placeholder', '');
});

input.addEventListener('blur', () => {
    input.setAttribute('placeholder', 'enter a new todo item');
})

window.onload = function() {
    getAllTodos();
};