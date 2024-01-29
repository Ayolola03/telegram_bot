const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Set the port

// Middleware
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token provided by BotFather
const token = '6445736108:AAET-eXAOiZYGYLVNF_JHmyuru1U1mjrxlI';

// Create a new instance of the Telegram bot
const bot = new TelegramBot(token, { polling: true });

// Listen for '/start' command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! Welcome to your new Telegram bot.');
});




// I have work to do here.......


// Handle incoming messages from Telegram bot
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Check for specific commands
    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the Telegram bot! You can use commands like /search to find lecturers.');
    } else if (messageText === '/help') {
        bot.sendMessage(chatId, 'Help information: ...');
    } else if (messageText.startsWith('/search')) {
        // Parse search query and retrieve results
        const query = messageText.replace('/search', '').trim();
        const results = searchLecturers(query); // Function to search for lecturers
        // Send search results back to the user
        bot.sendMessage(chatId, `Search results: ${results}`);
    } else {
        // Handle unrecognized commands or messages
        bot.sendMessage(chatId, 'Sorry, I didn\'t understand that command. Type /help for assistance.');
    }
});


// End of work area--------------------------------------


// Middleware for simple authentication
function authenticateMiddleware(msg, next) {
    const messageText = msg.text;
    const isAuthenticated = messageText.includes('/authenticate');

    if (isAuthenticated) {
        // User is authenticated, continue processing the message
        next();
    } else {
        // User is not authenticated, send a message indicating authentication is required
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Authentication required.');
    }
}

// Apply the middleware to the message handler
bot.on('message', authenticateMiddleware, (msg) => {
    // Handle incoming messages
});
