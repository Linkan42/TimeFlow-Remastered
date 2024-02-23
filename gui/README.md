![](public/00007-3319839290.png "big thanks to ivo's jetengine wannabe for this one")

# TimeFlow
[![build_eslint](https://github.com/Linkan42/TimeFlow/actions/workflows/Build_ESLint.yml/badge.svg)](https://github.com/Linkan42/TimeFlow/actions/workflows/Build_ESLint.yml)


TimeFlow, the superior version of EditTime, designed for you to securely manage all of your meeting needs with a visually stunning and responsive interface.

:)

## The Group 

Linkan42      - Linus

ivonilsson    - Ivo

OskarSundberg - Oskar 

Lukasydkvist  - Lukas

## Stack MERN

The MERN stack (MongoDB, Express.js, React, and Node.js) provides a robust and scalable foundation for building full-stack web applications. We also incorporate Material-UI (MUI) into our web application, to enhance the frontend user interface with beautifully designed Material Design components, ensuring a modern and intuitive user experience.

### MongoDB

MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It's known for its scalability and flexibility, making it suitable for handling large amounts of unstructured or semi-structured data. We use MongoDB to store our users, meetings and more.

### ExpressJS

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It acts as a backend framework for TimeFlow, handling HTTP requests, routes, and middleware to communicate with the MongoDB database and serves data to the frontend.

### React

React is a JavaScript library for building user interfaces. It allows us to create reusable UI components and manage the state of the application efficiently. In TimeFlow, React is used as the frontend library to build interactive and dynamic user interfaces.

### NodeJS

Node.js is a JavaScript runtime environment that allows us to run JavaScript on the server-side. It provides an event-driven, non-blocking I/O model, making it efficient and lightweight. In TimeFlow, Node.js serves as the backend runtime, handling server-side logic and communicating with the database via ExpressJS.

## How to run TimeFlow

First make sure you have [NodeJS](https://nodejs.org/en/download) installed. Then simply run `make`  in root with CLI. You should see that the server is running on port 3001. Open up [http://localhost:3001/](http://localhost:3001/) in your favorite web browser and enjoy!

In case you can't run `make`, see [Issues](#issues)

## Issues

### Can't run `make`?

If you're having trouble running the `make` command on Windows 10, try adding the following line to your `Path` variable: `<git-installation-directory>/usr/bin`. How to find the `Path` variable: Open File Explorer --> Right click on "This PC" --> Properties --> "Advanced system settings" under "Related Settings" --> Enviroment Variables --> Under "System variables", click "Path" and then "Edit" --> Click "New" and add the path `<git-installation-directory>/usr/bin`. The path may look like this: `C:\Program Files\Git\usr\bin`. Press OK to save and close all the windows. It's recommended to restart your PC to make sure the change is in effect. Please note that this possible solution is may only applicable if you have [Git](https://git-scm.com/downloads) installed.

Alternatively, you can run the commands manually and bypass `make` alltogether. See the [Makefile](Makefile) for details