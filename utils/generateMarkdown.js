// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  const lincenseInfo = {
    "MIT": "http://doge.mit-license.org",
    "APACHE 2.0": "http://doge.apache 2.0-license.org",
    "GPL 3.0": "http://doge.gpl 3.0-license.org",
    "BSD 3": "http://doge.bsd 3-license.org",
    "Unlicense": "http://doge.unlicense-license.org"
  }
  return `
[![License](http://img.shields.io/:MadeBy-BJonesJr-lightgreen.svg)](https://github.com/jones9682/Good-README-Generator)

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

[![License](http://img.shields.io/:license-${data.license}-blue.svg)](${lincenseInfo[data.license]})

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
