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




Previously On: 8 - 1:00:00
Phase 0 Feedback
- I like the idea, and it's good that you have also created concept designs. I think the addition of wait time is interesting, as it is one of the important factors which decides whether one eats at a place or not. Currently, Google Places still does not provide an API endpoint for the wait times of a store even though it is available in their web application. I did find this Python library though: https://github.com/m-wrzr/populartimes Since it is in Python, you would have to find a way to run it through javascript. One library I found for node.js is: https://www.npmjs.com/package/python-shell You don't need to implement this yet for the Phase 1 deliverable, but it would be good if you can experiment early, so we can see this feature in the Phase 2 and 3 submissions. Also, you can add a 'pick random store' function which seems like a fun feature. This could also answer the problem, "Where should we eat now?", in case the users still have not decided where to eat despite browsing the web application.

Phase 1 Feedback
- No interface for leaving reviews yet. How should it look like?
- no interface for user profile editing, clicking on edit should at least replace the fields with input fields (or a new form will pop up)
- post filtering also doesn't seem to be implemented as of yet
Suggestions:
- If you are not going to proceed with my suggestion from phase 0 regarding average wait time retrieval, you can perhaps also include an optional input field for users who would leave a review wherein they can indicate their average waiting time. Plus points if you can also devise an interface that allows the user to enter different waiting times for different time slots.
- Maybe some background can be added? at least for the forum pages.
- Maybe set the font color for the buildings to be white, then turn it to green onhover
- I really like how the homepage is presented, well done!

Phase 2 Feedback
- Only the models have been written, but most of the data is still hardcoded in the page. On testing, only register user has been found to be working.
- App should automatically direct the user back to home once successful (use window.location.href="/" ) or redirect from backend code.
- Clicking on a store does nothing
- no interface for making recommendations
- no interface for adding a food spot
- no login validation (users not registered are able to login)
- Login doesn't seem to actually login the user from the db either. Hence,
- edit does not work
- add a food spot does not work
- create/ edit / delete recommendation is non existent / does not work
- search not functional

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

*MongoDB must be connected and running to access the database.
*to use nodemon scripts run: PowerShell -ExecutionPolicy Bypass when starting a new terminal

Run "npm start" and open localhost:3000 on the browser to use the program.

*Clicking the user icon when already inside the user page will log you out and return the browser to the login page.

*Browser extensions may cause errors to pop up when using inspect and then checking the console. Disable them to avoid such errors. I am unsure if this issue only applies to my machine.

*If the following error is encountered, close and reopen VSCode to fix.

node:events:490
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1774:16)
    at listenInCluster (node:net:1822:12)
    at Server.listen (node:net:1910:7)
    at Function.listen (C:\Users\Ryan Nicholas Taino\Desktop\Phase 2_Version_2\node_modules\express\lib\application.js:635:24)
    at main (file:///C:/Users/Ryan%20Nicholas%20Taino/Desktop/Phase%202_Version_2/index.js:35:9)
    at file:///C:/Users/Ryan%20Nicholas%20Taino/Desktop/Phase%202_Version_2/index.js:43:1
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1801:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'EADDRINUSE',
  errno: -4091,
  syscall: 'listen',
  address: '::',
  port: 3000
}
