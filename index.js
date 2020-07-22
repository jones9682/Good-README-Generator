const fs = require(`fs`);
const axios = require("axios");
const inquirer = require("inquirer");
const generate = require(`./utils/generateMarkdown`);

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
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
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
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repository link?",
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?",
    },
];

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            const queryUrl = `https://api.github.com/users/${data.username}`;

            axios.get(queryUrl).then(function (res) {

                const githubInfo = {
                    githubImage: res.data.avatar_url,
                    profile: res.data.html_url,
                    name: res.data.name
                };

                // function to write README file
                fs.writeFile("README.md", generate(data, githubInfo), function (error) {
                    if (error) {
                        throw error;
                    };
                    console.log("New README.md file created success!");
                });
            });
        });
}

// function call to initialize program
init();
