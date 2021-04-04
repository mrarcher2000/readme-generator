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
        message: 'Please enter any instructions on how to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Leave instructions on how to contribute to your project.'
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
function writeToFile(answers) {

    // this.answers = answers;
    let fileName = './Develop/README.md';
    console.log(answers);

    fs.writeFile(fileName, generateMarkdown(answers), 'utf8', (err) => {
        if (err) throw err;
        console.log("Your README.md has been created!\nCheck the Develop directory for your README files.");
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README.md Generator!");

    inquirer
        .prompt(questions).then((answers) => {
            writeToFile(answers);
        });
};

// Function call to initialize app
init();
