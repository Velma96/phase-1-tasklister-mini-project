taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const taskDescription = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority').value;
  
    if (taskDescription.trim() === '') {
      alert('Task description cannot be empty!');
      return;
    }
  
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
  
    // Set task color based on priority
    if (priority === 'high') {
      taskItem.style.color = 'red';
    } else if (priority === 'medium') {
      taskItem.style.color = 'yellow';
    } else if (priority === 'low') {
      taskItem.style.color = 'green';
    }
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });
  
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    taskForm.reset();
  });
  