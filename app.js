document.getElementById('formTask').addEventListener("submit", saveTask );

function saveTask (e) {

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

     const task = {
         title,
         description
     };

     console.log(task);
     
    if(localStorage.getItem('task') === null) {
        let tasks = [];
        task.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    e.preventDefault();
}
