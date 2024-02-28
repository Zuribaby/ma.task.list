// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task to the end of the task list
function addTask(task) {
  tasks.push(task);
  console.log(`Task "${task}" added.`);
}

// Function to remove a task from the beginning of the task list
function removeTaskFromBeginning() {
  if (tasks.length === 0) {
    console.log("Task list is empty.");
} else {
    let removedTask = tasks.shift();
    console.log(`Task "${removedTask}" removed from the beginning.`);
}
}

// Function to remove a task from the end of the task list
function removeTaskFromEnd() {
  if (tasks.length === 0) {
    console.log("Task list is empty.");
  } else {
    let removedTask = tasks.pop();
    console.log(`Task "${removedTask}" removed from the end.`);
  }
}

//  Function to remove a task from a specific position in the task list
function removeTaskFromPosition(position) {
  if (position < 1 || position > tasks.length) {
      console.log("Invalid position.");
  } else {
      let removedTask = tasks.splice(position - 1, 1);
      console.log(`Task "${removedTask}" removed from position ${position}.`);
  }
}

// Function to display the current task list
function displayTasks() {
  if (tasks.length === 0) {
      console.log("Task list is empty.");
  } else {
      console.log("Current Task List:");
      tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task}`);
      });
  }
}

// Main function to interact with the user
function main() {
  while (true) {
      let choice = prompt(`Choose an operation:
      1. Add a task
      2. Remove a task from the beginning
      3. Remove a task from the end
      4. Remove a task from a specific position
      5. Display tasks
      6. Quit`);

      switch (choice) {
          case "1":
              let newTask = prompt("Enter the task to add:");
              addTask(newTask);
              break;
          case "2":
              removeTaskFromBeginning();
              break;
          case "3":
              removeTaskFromEnd();
              break;
          case "4":
              let position = parseInt(prompt("Enter the position of the task to remove:"));
              removeTaskFromPosition(position);
              break;
          case "5":
              displayTasks();
              break;
          case "6":
              console.log("Goodbye!");
              return;
          default:
              console.log("Invalid choice. Please try again.");
      }
  }
}

// Call the main function to start the program
main();