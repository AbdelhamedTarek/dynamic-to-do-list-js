// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create the addTask Function
  const addTask = () => {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task."); // Prompt if input is empty
      return; // Exit the function if the input is empty
    }

    // Task Creation and Removal
    // Create a new li element
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set button text
    removeButton.classList.add("remove-btn"); // Assign class using classList.add

    // Assign an onclick event to the remove button
    removeButton.onclick = () => {
      taskList.removeChild(listItem); // Remove the li element from taskList
    };

    // Append the remove button to the li element
    listItem.appendChild(removeButton);

    // Append the li to taskList
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";
  };

  // Attach Event Listeners
  addButton.addEventListener("click", addTask); // Call addTask when button is clicked
  taskInput.addEventListener("keypress", (event) => {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      addTask(); // Call addTask if Enter is pressed
    }
  });
});
