document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <label>${taskText}</label>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        li.querySelector('.deleteBtn').addEventListener('click', deleteTask);
    }

    function deleteTask(event) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});
