const todoInput=document.getElementById('todo-input');
const todoList=document.getElementById('todo-list');

todoInput.addEventListener('keypress', function (event) {
    if(event.key === 'Enter') {
        addTodo ();
    }
});

function addTodo() {
    const task = todoInput.value.trim();
    if(task !== '') {
        const listItem = document.createElement('li');
        listItem.className='todo-item';
        listItem.innerHTML=`
       <span>${task}</span>
        <button class="edit-btn" onclick="editTodo(this)"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" onclick="deleteTodo(this)"><i class="fas fa-trash-alt"></i></button>
       `;
        todoList.appendChild(listItem);
        todoInput.value= '';
    }
}

function deleteTodo(btn){
    const listItem = btn.parentNode;
    listItem.classList.add('animate-out');
    setTimeout(() => {
        listItem.remove();
    }, 500);
}

function editTodo(btn){
    const listItem = btn.parentNode;
    const span = listItem.querySelector('span');
    const newText = prompt('Edit task:',span.innerText);
    if(newText !==null){
        span.innerText=newText;
    }
}
