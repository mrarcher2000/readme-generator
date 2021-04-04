// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any instructions on how to install your project. (To skip, press enter)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project. (To skip, press enter)'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Leave instructions on how to contribute to your project. (To skip, press enter)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Leave instructions on how to use any tests you have made here. (To skip, press enter)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project: ',
        choices: ['MIT License', 'GNU Affero General Public License v3.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'None || Added Your Own Later']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Leave any additional contact information here: '
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: "Would you like to include a Table Of Contents?",
        default: true
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
