const tasks = [
    {
        name: "Teste",
        isDone: true
    }
]

function addTask(name){
    tasks.push(
        {
            name: name,
            isDone: true
        }
    )
    listTasks();
}


function markAsCompleted(name) {
    const task = tasks.find(task => task.name === name);
    if (task) {
        task.isDone = true;
        listTasks();
    }
}

function clearTasks(){
    const ul = document.getElementById("tasks");
    ul.innerHTML = "";
}

function listTasks(){
    clearTasks();
    const ul = document.getElementById("tasks");

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.id = task.name;
        li.innerHTML = "Tarefa: " + task.name + "<br>" +
                       "Ativa: " + task.isDone +
                       "<button onClick='li.id'>Concluida</button>";
        ul.appendChild(li);
    });
}


document.addEventListener("DOMContentLoaded", listTasks);
