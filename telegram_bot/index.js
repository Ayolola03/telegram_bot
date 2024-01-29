const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000; // Set the port

// Set up mongoose connection
const dev_db_url =
  "mongodb+srv://Blue:gdsc1234@cluster0.yrqqhrt.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


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
        bot.sendMessage(chatId, 'Available commands:\n/lecturers - View all lecturers\n/search [query] - Search for lecturers\n/help - Display help information');
    } else if (messageText.startsWith('/lecturers')) {
        // Display all lecturers
        const allLecturers = lecturers.map(lecturer => lecturer.name).join('\n');
        bot.sendMessage(chatId, `List of all lecturers:\n${allLecturers}`);
    } else if (messageText.startsWith('/search')) {
        // Parse search query and retrieve matching lecturers
        const query = messageText.replace('/search', '').trim();
        const matchingLecturers = filterLecturers(query);
        // Display matching lecturers
        if (matchingLecturers.length > 0) {
            const matchingNames = matchingLecturers.map(lecturer => lecturer.name).join('\n');
            bot.sendMessage(chatId, `Matching lecturers for "${query}":\n${matchingNames}`);
        } else {
            bot.sendMessage(chatId, `No matching lecturers found for "${query}".`);
        }
    } else {
        // Handle unrecognized commands or messages
        bot.sendMessage(chatId, 'Sorry, I didn\'t understand that command. Type /help for assistance.');
    }
});


// End of work area--------------------------------------


// Middleware for user authentication
function authenticateUserMiddleware(msg, next) {
    // Extract user ID from incoming message
    const userId = msg.from.id;

    // Check if the user is authorized (e.g., by comparing against a whitelist of authorized user IDs)
    const isAuthorized = authorizedUserIds.includes(userId);

    if (isAuthorized) {
        // User is authorized, continue processing the message
        next();
    } else {
        // User is not authorized, send a message indicating authentication is required
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Authentication required.');
    }
}

// Apply the middleware to the message handler
bot.on('message', authenticateUserMiddleware, (msg) => {
    // Handle incoming messages
});





// In memory data for the lecturer's information
// Define the in-memory data structure for lecturers
const lecturers = [
    { id: 1, name: 'Dr. John Doe', department: 'Computer Science', course: 'Introduction to Programming', office: 'Building A, Room 101' },
    { id: 2, name: 'Prof. Jane Smith', department: 'Electrical Engineering', course: 'Digital Signal Processing', office: 'Building B, Room 201' },
    // Add more lecturer objects as needed
];

// Function to filter lecturers based on search query
function filterLecturers(query) {
    // Convert query to lowercase for case-insensitive search
    const queryLowercase = query.toLowerCase();
    // Filter lecturers based on query criteria
    const filteredLecturers = lecturers.filter((lecturer) => {
        return (
            lecturer.name.toLowerCase().includes(queryLowercase) ||
            lecturer.department.toLowerCase().includes(queryLowercase) ||
            lecturer.course.toLowerCase().includes(queryLowercase) ||
            lecturer.office.toLowerCase().includes(queryLowercase)
        );
    });
    return filteredLecturers;
}






