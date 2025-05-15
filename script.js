function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value.trim();

    if (userMessage === '') return; // Não envia mensagem em branco

    // Exibe a mensagem do usuário
    const chatBox = document.getElementById('chatBox');
    const userMsgElement = document.createElement('div');
    userMsgElement.classList.add('message', 'user-message');
    userMsgElement.textContent = userMessage;
    chatBox.appendChild(userMsgElement);

    // Limpa o campo de input
    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight; // Desce para a última mensagem

    // Exibe "carregando..." antes da resposta do bot
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('message', 'bot-message', 'loader');
    loadingMessage.textContent = 'Carregando...';
    chatBox.appendChild(loadingMessage);

    // Simula a resposta do "bot" com um pequeno atraso
    setTimeout(() => {
        // Remove a mensagem de "carregando..."
        chatBox.removeChild(loadingMessage);

        // Resposta do "bot de IA"
        const botResponse = getBotResponse(userMessage);
        const botMsgElement = document.createElement('div');
        botMsgElement.classList.add('message', 'bot-message');
        botMsgElement.textContent = botResponse;
        chatBox.appendChild(botMsgElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Desce para a última mensagem
    }, 1500);
}

function getBotResponse(userMessage) {
    // Respostas predefinidas (pode ser substituído por uma API real, como OpenAI GPT)
    if (userMessage.toLowerCase().includes('olá')) {
        return 'Oi! Como posso te ajudar?';
    } else if (userMessage.toLowerCase().includes('tchau')) {
        return 'Até logo! Tenha um ótimo dia!';
    } else if (userMessage.toLowerCase().includes('como você está')) {
        return 'Estou ótimo, obrigado por perguntar! E você?';
    } else if (userMessage.toLowerCase().includes('nome')) {
        return 'Eu sou o ChatBot! E você?';
    } else {
        return 'Desculpe, não entendi. Pode tentar novamente?';
    }
}
