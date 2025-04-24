const openTasksButton = document.querySelectorAll('[data-tasks-target]')
const closeTasksButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')



openTasksButton.forEach(button => {
    button.addEventListener('click', () => {
        const tasks = document.querySelector(button.dataset.tasksTarget)
        openTasks(tasks)
    })
})

closeTasksButton.forEach(button =>{
    button.addEventListener('click', () => {
        const tasks = button.closest('.tasks')
        closeTasks(tasks)
    })
})

function openTasks(tasks) {
    if (tasks == null) return
    tasks.classList.add('active')
    overlay.classList.add('active')
}

function closeTasks(tasks) {
    if (tasks == null) return
    tasks.classList.remove('active')
    overlay.classList.remove('active')
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        const activeTasks = document.querySelector('.tasks.active');
        if (!activeTasks) return;

        const addTaskInput = activeTasks.querySelector('.intTasks');
        const taskList = activeTasks.querySelector('.taskList');

        const inputTask = addTaskInput.value.trim();

        if (inputTask !== "") {
            let li = document.createElement('li');
            li.innerHTML = inputTask;
            taskList.appendChild(li);

            let span = document.createElement('span'); 
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            addTaskInput.value = "";
        } else {
            alert("Write something");
        }

        event.preventDefault();
    }
});


document.addEventListener('click', function(e) {
    const activeTasks = document.querySelector('.tasks.active');
    if (!activeTasks) return;

    const taskList = activeTasks.querySelector('.taskList');

    if (!taskList.contains(e.target)) return;

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
});