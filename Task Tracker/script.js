document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter'){
            addTask();
        }
    });

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText){
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function createTaskElement(text) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.textContent = text;
        span.classList.add('task-text');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked){
                span.classList.add('completed');
                taskList.appendChild(li);
            } else {
                span.classList.remove('completed');
                taskList.insertBefore(li, taskList.firstChild);
            }
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        return li;
    }
})