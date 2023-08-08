const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message");
const tasksList = document.getElementById("tasks");
const taskInput = document.getElementById("task");

function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== "") {
        displayMessage("You: " + message);
        messageInput.value = "";
        // Code to send the message to other users or store it on the server
    }
}

function assignTask() {
    const task = taskInput.value;
    if (task.trim() !== "") {
        const taskElement = document.createElement("li");
        taskElement.textContent = task;
        tasksList.appendChild(taskElement);
        taskInput.value = "";
        // Code to assign the task to another user or store it on the server
    }
}
