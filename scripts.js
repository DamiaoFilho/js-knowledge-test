let tasks = [
    {
        name: "Test 1",
        isDone: true
    }
]

const  addTask = (name) => {
    tasks = [...tasks, {name, isDone: true}];
    listTasks();
}


const toogleStatus = (name) => {    
    const task = tasks.find(task => task.name === name);
    if (task) {
        task.isDone = !task.isDone;
        listTasks();
    }else{
        alert("Task does not exists")
    }
}

const clearTasks = () => {
    const ul = document.getElementById("tasks");
    ul.innerHTML = "";
}

const listTasks = () => {
    clearTasks();
    const ul = document.getElementById("tasks");

    tasks.forEach(({name, isDone}) => {
        const li = document.createElement("li");
        li.id = name;
        li.innerHTML = `Task: ${name} - Status: ${isDone ? 'Active' : 'Finished'} - <button onClick="toogleStatus('${name}')">Finish</button>`;
        ul.appendChild(li);
    });
}

const filterTasksByStatus = (status) => {
    const ul = document.getElementById("tasks");
    ul.innerHTML = ""; 

    tasks.forEach(({name, isDone}) => {
        if (isDone === status) {
            const li = document.createElement("li");
            li.id = name;
            li.innerHTML = `Task: ${name} - Ativa: ${isDone ? 'Active' : 'Finished'} - <button onClick="toogleStatus('${name}')">Finish</button>`;
            ul.appendChild(li);
        }
    });
}


document.addEventListener("DOMContentLoaded", listTasks);
