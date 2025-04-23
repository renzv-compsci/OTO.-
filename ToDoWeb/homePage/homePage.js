const openTasksButton = document.querySelectorAll('[data-tasks-target]')
const closeTasksButton = document.querySelectorAll('[data-close-button]')
const taskList = document.getElementById('taskList')
const overlay = document.getElementById('overlay')
const addTask = document.getElementById("intTasks")
const taskLists = document.getElementById("taskList")

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

addTask.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
        event.preventDefault();

        const inputTask = addTask.value.trim();

        if (inputTask !== "") {
            let li = document.createElement('li');
            li.innerHTML = inputTask;
            taskLists.appendChild(li);
            let span = document.createElement('span'); 
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            addTask.value = "";
        } else {
            alert("Write something");
        }
        
    }
})

taskLists.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})