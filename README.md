# CCAPDEV Machine Project - Web Application
This repository contains the files for a food forum web application called Archer's Bowl. The Lasallian community can create an account and log in to see all the nearby food spots in and around De La Salle, University. Users will be able to add new food spots, add their review and be able to see others reviews too, manage their account.

## Contents
- [Controller](https://github.com/): contains all callback functions for server responses to client requests
- [Models](https://github.com/): contains all database models and database access functions
- [Public](https://github.com/): contains static assets such as CSS, JS, image, and font files
- [Routes](https://github.com/): contains the server responses for HTTP method requests to a specific path in the server
- [Views](https://github.com/): contains all handlebars files rendered by the server
- [index.js](https://github.com/): the main file used to execute the web application

## Follow the steps below to set-up the repository locally:
1. Clone the repository or download the zipped folder.
2. Open the command prompt.
3. Navigate to the project folder.
4. Install the necessary NPM libraries by running `npm install`.
4. Make sure MongoDB is installed and running.
5. To run the application, execute `node index.js` or `npm start`.
6. Go to the browser and enter `localhost:3000` in the URL to access the web application.

## NPM Packages and Third-Party Libraries
### NPM
- 

### Third-Party
- 

The following npm commands were used when developing the program
- npm init -y
- npm i dotenv
- npm i express
- npm i mongoose
- npm i url
- npm i path
- npm i express-handlebars
- npm i nodemon (AUTO-RESTARTS SERVER WHENEVER CHANGES ARE SAVED)
- npm i ejs (NOT INSTALLED)
- npm i express-session (NOT INSTALLED)
- npm i passport passport-local (NOT INSTALLED)
- npm i passport-local-mongoose (NOT INSTALLED)
- npm i hbs (NOT INSTALLED)

*to use nodemon scripts run: PowerShell -ExecutionPolicy Bypass when starting a new terminal
*clicking the user icon when already inside the user page will log you out and return the browser to the login page.
