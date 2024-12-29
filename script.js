const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Add task functionality
addTodoBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn">Delete</button>
    `;

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());

    // Apply dark mode class if enabled
    if (document.body.classList.contains("dark-mode")) {
      li.classList.add("dark-mode");
    }

    todoList.appendChild(li);
    todoInput.value = "";
  } else {
    alert("Please enter a task");
  }
});

// Theme toggle functionality
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".container").classList.toggle("dark-mode");
  todoInput.classList.toggle("dark-mode");

  // Toggle all existing tasks to dark mode
  document.querySelectorAll("#todoList li").forEach((li) => {
    li.classList.toggle("dark-mode");
  });

  // Change icon
  themeToggleBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
