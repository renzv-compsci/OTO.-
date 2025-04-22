const openTasksButton = document.querySelectorAll('[data-tasks-target]')
const closeTasksButton = document.querySelectorAll('[data-close-button]')
// const addTask = document.getElementById('intTasks')
const taskList = document.getElementById('taskList')
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

// addTask.addEventListener('keypress', function(event){
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         document.getElementById('taskList').click();
//     }
// })

// // function addTasks() {
// //     if (inputBox.value === '') {
// //         alert("You must right something")
// //     }
// // }


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
