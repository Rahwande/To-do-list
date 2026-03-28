/**
 * ===============================
 * 1. UPDATE TASK STATISTICS
 * ===============================
 * Counts total tasks and completed tasks
 * then updates the numbers on the page.
 */
function updateStats() {

    const tasks = document.querySelectorAll('#task-list li');
    const completed = document.querySelectorAll('#task-list li.completed');

    const totalTasks = tasks.length;
    const completedTasks = completed.length;

    document.getElementById('total-count').textContent = totalTasks;
    document.getElementById('completed-count').textContent = completedTasks;

    console.log(`STATS UPDATED → Total: ${totalTasks}, Completed: ${completedTasks}`);
}


/**
 * ===============================
 * 2. ADD NEW TASK
 * ===============================
 * Creates a new task and adds it
 * to the task list.
 */
function addNewTask() {

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const taskValue = taskInput.value.trim();

    // Prevent empty tasks
    if (taskValue === "") {
        console.log("Validation Error: Empty task attempt.");
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <div class="task-text" onclick="toggleTask(this)">
            <i class="fa-regular fa-circle-check"></i>
            <span>${taskValue}</span>
        </div>

        <button class="delete-btn" onclick="deleteTask(this)">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    console.log(`Action: Task added → ${taskValue}`);

    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";

    updateStats();
}


/**
 * ===============================
 * 3. TOGGLE TASK STATUS
 * ===============================
 * Marks a task as completed
 * or pending.
 */
function toggleTask(taskElement) {

    const listItem = taskElement.parentElement;
    const taskName = taskElement.querySelector('span').textContent;

    listItem.classList.toggle('completed');

    const completed = listItem.classList.contains('completed');

    console.log(
        `Action: Task "${taskName}" marked as ${completed ? "Completed" : "Pending"}`
    );

    updateStats();
}


/**
 * ===============================
 * 4. DELETE TASK
 * ===============================
 * Removes a task from the list.
 */
function deleteTask(deleteButton) {

    const listItem = deleteButton.parentElement;
    const taskName = listItem.querySelector('span').textContent;

    console.log(`Action: Task deleted → ${taskName}`);

    listItem.remove();

    updateStats();
}


/**
 * ===============================
 * APP INITIALIZATION
 * ===============================
 */
console.log("Application started successfully.");

updateStats();