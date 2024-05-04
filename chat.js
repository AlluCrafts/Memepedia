// Chat messages storage
let chatMessages = [];

// Function to censor inappropriate words
function censorMessage(message) {
    const inappropriateWords = ["fuck", "shit", "sex", "dick", "pussy",]; // Add your inappropriate words here
    for (let word of inappropriateWords) {
        const regex = new RegExp(word, "gi");
        message = message.replace(regex, "*".repeat(word.length));
    }
    return message;
}

// Function to render chat messages
function renderMessages() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML = ""; // Clear previous messages
    chatMessages.forEach(message => {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatContainer.appendChild(messageElement);
    });
}

// Function to handle new chat message submission
function sendMessage() {
    const inputMessage = document.getElementById("chatInput").value;
    if (inputMessage.trim() !== "") {
        const censoredMessage = censorMessage(inputMessage);
        chatMessages.push(censoredMessage);
        renderMessages();
        // Save messages to local storage
        localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
        // Clear input field
        document.getElementById("chatInput").value = "";
    }
}

// Initialize chat messages from local storage
if (localStorage.getItem("chatMessages")) {
    chatMessages = JSON.parse(localStorage.getItem("chatMessages"));
    renderMessages();
}
