document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask(todoInput.value);
        todoInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = task + ' <button class="complete">Complete</button> <button class="delete">Delete</button>';

        li.querySelector('.complete').onclick = function () {
            li.classList.toggle('completed');
            // li.style.backgroundColor="green";
        };
        li.querySelector('.delete').onclick = function () {
            li.remove();
        };

        todoList.appendChild(li);
    }
});
