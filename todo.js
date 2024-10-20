function addTask() {
    let newTask = document.querySelector('.new-task');
    
    // Create task item
    let taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerText = newTask.value;

     // Check if the input field is empty
     if (newTask.value.trim() === '') {
        alert('Please enter  task item.');
        return; // Exit the function if the input is empty
    }

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'btn-container';

    // Create complete button
    let completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.className = 'task-btn';
    completeButton.style.marginRight = '5px';
    completeButton.onclick = function() {
        completeTask(completeButton);  // Strike through on complete
    };

    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'task-btn';
    deleteButton.onclick = function() {
        deleteTask(deleteButton);  // Delete task
    };

    // Append buttons to container
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    // Append button container to task item
    taskItem.appendChild(buttonContainer);

    // Append task item to the task list
    let taskList = document.querySelector('.task-list');
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    newTask.value = '';
}

// Function to mark a task as complete
function completeTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');  // Toggle strike-through
}

// Function to delete a task
function deleteTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove();  // Remove task from the list
}