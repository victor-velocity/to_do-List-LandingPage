const signupForm = document.getElementById("updateForm");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    // Get the form values
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const taskId = 1;

    if (!taskId) {
      throw new Error("Task ID is missing.");
    }

    // Construct the URL dynamically with the task ID
    const url = "https://todo-backend-nluz.onrender.com/api/tasks/{{taskId}}";

    // Make the PATCH request
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        dueDate: dueDate,
      }),
    });

    // Handle the response
    if (!response.ok) {
      throw new Error("Failed to update task.");
    }

    const data = await response.json();

    // Store the token if returned
    if (data.token) {
      localStorage.setItem("todoToken", data.token);
    }

    // Redirect to the new task page
    window.location.href = "newtask.html";
  } catch (error) {
    console.log(error);
    alert(`Error: ${error.message}`);
  }
});

const deleteForm = document.getElementById("deleteForm");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    // Get the form values
    const desDelete = document.getElementById("desDelete").value;
    const deleteDate = document.getElementById("deleteDate").value;

    // Assume you get the task ID from somewhere (e.g., localStorage, URL parameters, etc.)
    const taskId = 3; // Replace this with your actual method to get the task ID

    if (!taskId) {
      throw new Error("Task ID is missing.");
    }

    // Construct the URL dynamically with the task ID
    const url = "https://todo-backend-nluz.onrender.com/api/tasks/{{taskId}}";

    // Make the PATCH request
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        desDelete: desDelete,
        deleteDate: deleteDate,
      }),
    });

    // Handle the response
    if (!response.ok) {
      throw new Error("Failed to delete task.");
    }

    const data = await response.json();

    // Store the token if returned
    if (data.token) {
      localStorage.setItem("todoToken", data.token);
    }

    // Redirect to the new task page
    window.location.href = "newtask.html";
  } catch (error) {
    console.log(error);
    alert(`Error: ${error.message}`);
  }
});
