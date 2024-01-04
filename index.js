document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
  
    sendButton.addEventListener('click', function () {
      const messageText = messageInput.value;
      if (messageText.trim() !== '') {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const timestamp = `${hours}` + ' : ' + `${minutes}`;
  
        // Construct and append chat message to chatMessages
        const messageElement = document.createElement('div');
        messageElement.innerText = `${messageText} ` + ` ${timestamp}`
        messageElement.classList.add('sent');
        chatMessages.appendChild(messageElement);
  
        // Celebratory animation
        const celebration = document.createElement('div');
        celebration.innerText = '🎉';
        celebration.classList.add('celebration');
        chatMessages.appendChild(celebration);
  
        // Clear the input field after sending the message
        messageInput.value = '';
  
        // Remove the celebration after a short delay
        setTimeout(function() {
          chatMessages.removeChild(celebration);
        }, 1000);
      }
    });
  });