# To-Do List

This SPA project was developed with React.js in frontend and
Nest.js (Node.js Framework) in backend. 

## How to use it?

You have a file called "startApp.sh", you can run it (on Linux or MacOs),
and the project will start the set up.

## What do i need?

The backend was develped with Nest.js (my version is 8.1.6), so you need to have Node.js installed
in your computer (my version is 16.13.1), and also npm (my version is 8.3.0). 
The DataBase used is MongoDB, so you need to have it installed (my version is 5.0.5).
In addition, you need to have some dependencies, which are listed in the file "package.json" 
(in backend-app/api folder).

Frontend was coded with React.js (my version is 17.0.2). which also needs Node.js. In addition, you
need to have some dependencies, which are listed in the file "package.json" (in frontend-app folder).

## Additional info

Nest runs on port 8000 and React runs on port 3000. Please make sure you do not
have anything alse running on that ports, otherwise, this app will not work.

This app connects to MongoDB with Mongoose. So, the first time you use this app,
Mongoose will automatically generate a database and a collection for you (only
if you have MongoDB installed and running, of course).

Enjoy it !!!