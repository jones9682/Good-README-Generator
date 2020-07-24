// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
[![License](http://img.shields.io/:license-MIT-blue.svg)](http://doge.mit-license.org)

# **${data.title}**

## Description

${data.description}

## Table of- Contents
- [Questions](#Questions)
- [Description](#Description)
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)
- [Demo](#Demo)
- [Test](#Test)
- [Repository Link](#Repository)
- [Contributors](#Contributors) 

## Installation
To install necessary dependencies, run the following command:

${data.install}

## Usage

${data.usage}

## Demo

- [Demo Link](https://drive.google.com/file/d/1ZkojMXOgiVnqjRKKZKCkikNNTI5uxXHT/view)

![Demo Tutorial](Video/GoodREADMEGenerator(Node).gif)

## Test
To run tests, run the following command:

${data.test}

## License

${data.license}

## Contributors

${data.contribute}

## Repository

- [Project Repo](${data.repo})

## Questions

![Image of me](${githubInfo.githubImage})


If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at my [GitHub Profile](${githubInfo.profile}).
  
  `;
}

module.exports = generateMarkdown;
