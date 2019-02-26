# TicTacToeAssignment
A webapp that allows two people to play tictactoe locally and saves the game in a mysql database

# Prerequisites
- Node.js installed
- Yarn installed
- MySQL server installed (alternatively, have e.g. XAMPP installed, which has a build-in MySQL server)

# Installation guides

## Node.js
1. Download the appropiate installer at Nodejs.org
2. Run the installer
3. Follow the prompt
4. Restart the Computer

## Yarn
1. Make sure that node.js is installed
2. Download the appropiate installer at yarnpkg.com
3. Run the installer
4. Follow the prompt

## MySQL
1. Download the appropiate installer at mysql.com
2. Run the installer
3. Follow the prompt

# Startup 
## Setup MySQL DataBase
To allow the tictactoe data to be send to your MySQL server, you need to fill in several parameters in ./src/dbSender/sendDBServer.js:
1. Open the file with your favorite text editor
2. Fill in the 4 fields right below "//To be filled in"

## Open the Application
To open up the web application, 2 steps need to be taken:
1. Navigate to src/dbSender, open the CMD and do "node sendDBServer". This starts up the server to send data to your MySQL DataBase
2. Navigate back to my-app, open the CMD and do "yarn start". the application will now run

# Other tools used
- React: for creating the UI
- JSX: for more intuitive language within React

# Design philosophy
For the tictactoefield, the decision was made to use React.js for the User Interface. Not only does it allow to make a flexible UI, but it also allows components to be updated when the state is updated.

To send data to the SQL server, a node.js server was used, mainly because of its simplicity to set up a server and since npm (The package manager included in node.js) has a mysql module.

The UI consists of two main components: Field and Grid
## Field
The Field keeps track of the state. The state contains whose turn it is, the current values of the grid (X, O or NULL) and the field history. When a specific grid is clicked, the state of this field will change. As a result, the UI will update automatically.
Furthermore, the Field generates the whole field when a free grid is clicked. The field consists of 3 row with 3 grids and a row to display the status (whose turn it and whether there is a winner). Note that the onclick listener of the grid is defined in Field, since a click should change the field status.

## Grid
The Grid is a button with the text received from its props. With the use of css classes, the X and O have a different colors.

# Testing
Due to the small size of the project and the unfamiliarity with unit testing in js of the developer (Only used Jasmine once), unit tests have been omitted and only an Acceptance Test has been performed by the developer.

# Disclaimer
Due to the fact that the turorial for React.js is about making a tictactoe game as well, certain components may be inspired from this tutorial. In no way has any code been directly copy-pasted from this tutorial.