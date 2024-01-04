document.getElementById('sendMessageButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    messageInput.value = '';
    if (message.trim() !== '') {
      const chatMessages = document.getElementById('chatMessages');
      const messageElement = document.createElement('div');
      messageElement.innerText = message;
      messageElement.classList.add('sent-message');
      chatMessages.appendChild(messageElement);
      // Simulates receiving a message after a delay
      simulateReceivedMessage();
    }
  });
  
  function simulateReceivedMessage() {
    setTimeout(function() {
      const chatMessages = document.getElementById('chatMessages');
      const messageElement = document.createElement('div');
      messageElement.innerText = 'Hi there! This is a received message.';
      messageElement.classList.add('received-message');
      chatMessages.appendChild(messageElement);
    }, 1500);
  }