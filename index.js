const inquirer = require("inquirer");
const fs = require(`fs`);


// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        Message: "What is your email address?",
    },
    {
        type: "input",
        name: "project",
        Message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        Message: "Please write a short description of your project?",
    },
    {
        type: "checkbox",
        name: "license",
        Message: "What kind of license should your project have",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "install",
        Message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "test",
        Message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "repo",
        Message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contribute",
        Message: "What does the user need to know about contributing to the repo?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
