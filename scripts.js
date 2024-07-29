document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');

        // Create the new todo item
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        // Checkbox for marking todo as done
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTodo);

        // Span to hold the todo text
        const span = document.createElement('span');
        span.textContent = todoText;

        // Button to delete the todo item
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTodo);

        todoItem.appendChild(checkbox);
        todoItem.appendChild(span);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        // Clear the input field
        todoInput.value = "";
    }
}

function toggleTodo() {
    const todoItem = this.parentElement;
    if (this.checked) {
        todoItem.classList.add('checked');
        todoItem.parentElement.appendChild(todoItem); // Move to the bottom
    } else {
        todoItem.classList.remove('checked');
    }
}

function deleteTodo() {
    const todoItem = this.parentElement;
    todoItem.remove();
}
