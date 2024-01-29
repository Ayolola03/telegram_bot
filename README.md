# Telegram Bot for Covenant University Lecturer Office Locator

## Introduction
This Telegram bot assists Covenant University students in finding their lecturers' offices. It provides functionalities for searching by lecturer name, department, course, or building. Additionally, admins can update lecturer information stored in a MongoDB database through the bot.

## Features
- User Authentication: Students authenticate using their Covenant University credentials.
- Search Functionality: Users can search for lecturers by name, department, course, or building.
- Interactive Map Integration: Integrate with an interactive map system for visual representation of lecturer office locations.
- Notification System: Users receive notifications about any changes in lecturer office locations or additional information relevant to their search.
- Admin Functionality: Admins can update lecturer information using the /updateinfo command.

## Technical Requirements
- Telegram Bot API: Utilize the Telegram Bot API for communication and interaction with users.
- Express Server: Use Express to handle incoming requests and integrate with the Telegram bot.
- MongoDB and Mongoose: Integrate MongoDB with Mongoose for storing and retrieving lecturer information.
- Authentication Mechanism: Implement secure authentication and authorization mechanisms for both users and admins.

## Setup Instructions
1. Clone the repository: `git clone <https://github.com/Ayolola03/telegram_bot.git>`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables: `TELEGRAM_BOT_TOKEN`, `MONGODB_URI`, `PORT`
4. Run the bot: `npm start`

## Usage
1. Start the bot: `/start`
2. Search for lecturers: `/search [query]`
3. View all lecturers: `/lecturers`
4. Help: `/help`

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
