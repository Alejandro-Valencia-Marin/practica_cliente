
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector(SELECTORS.taskInput);
    const addTaskBtn = document.querySelector(SELECTORS.addTaskBtn);
    const taskList = document.querySelector(SELECTORS.taskList);

    // Funcion para agregar tarea
    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert(MESSAGES.emptyTask);
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Crear el boton de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Agregar el boton de eliminar al item
        taskItem.appendChild(deleteBtn);

        // Marcar tarea como completada
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Añadir la tarea a la lista
        taskList.appendChild(taskItem);

        // Limpiar el input
        taskInput.value = '';
    }

    // Agregar tarea al hacer clic en el boton
    addTaskBtn.addEventListener('click', addTask);

    // Agregar tarea al presionar Enter
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
