# jiitak-demo
 
# Authenticated URL Shortener - Node.js Backend
This repository contains the backend solution for an authenticated URL shortener using Node.js. The project includes user authentication, password security, token-based authentication, and URL shortening functionality. The frontend of the project is implemented using React.js with Redux Toolkit, and the database used is MongoDB.

# Features
User Registration: Secure user registration with password hashing.
User Login: Secure login functionality with JWT-based authentication.
User Logout: Route to handle user logout and token invalidation.
URL Shortening: Authenticated users can shorten URLs and view their list of shortened URLs.
# Technologies Used
Backend: Node.js 
Frontend: React.js with Redux Toolkit
Database: MongoDB
# Installation and Setup
Clone the repository:` git clone https://github.com/vyshnav-v/jiitak-demo.git`
Navigate to the project` directory: cd jiitak-demo`
Install backend dependencies: `cd server && npm install`
Install frontend dependencies:` cd client && npm install`
# Backend
The backend is built using Node.js and provides the following routes:

**/api/register**: User registration route.
**/api/login**: User login route.
**/api/shortener**: URL shortening route for authenticated users.
**/api/url**: Route to retrieve the list of shortened URLs for authenticated users.
# Configuration
Rename `sever/.env.example` to `serve/.env `and configure your MongoDB connection and JWT secret.
# Running the Backend
Run the following command in the backend directory to start the Node.js server:`npm  start`


## concurrently
you can run both client and server at a time using the following commands in the backend directory to start the Node.js server:`npm run dev`
## Frontend
The frontend is built using React.js with Redux Toolkit and provides user interfaces for registration, login, and URL shortening.


## Running the Frontend
Run the following command in the frontend directory to start the React development server:`npm start`

## Usage
**Register a new user using the registration form.**
**Log in with the registered user credentials.**
**After logging in, you can shorten URLs and view your list of shortened URLs.**
## Extra Notes
**In the development of this project, AI-assisted tools like ChatGPT were used to enhance the code quality and speed up the development process. These tools were used to brainstorm ideas, generate code snippets, and refine the project's documentation.**

Contact
If you have any questions or need assistance, feel free to contact us at [vaishnavvenugopal706@gamil.com]