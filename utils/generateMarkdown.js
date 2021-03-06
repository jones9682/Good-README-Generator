// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  const licenseInfo = {
    "MIT": "[![License](http://img.shields.io/:license-MIT-blue.svg)](http://doge.mit-license.org)",
    "APACHE 2.0": "[![License](http://img.shields.io/:license-APACHE-2.0-orange.svg)](https://www.apache.org/licenses/LICENSE-2.0)",
    "GPL 3.0": "[![License](http://img.shields.io/:license-GPL-3.0-yellowgreen.svg)](https://www.gnu.org/licenses/gpl-3.0.html)",
    "Unlicense": "[![License](http://img.shields.io/:license-Unlicense-lightgrey.svg)](https://unlicense.org/)"
  }
  return `
  [![License](http://img.shields.io/:MadeBy-BJonesJr-lightgreen?logo=gitHub)](https://github.com/jones9682/Good-README-Generator)
  [![License](https://img.shields.io/github/repo-size/jones9682/Good-README-Generator?logo=gitHub)](https://github.com/jones9682/Good-README-Generator)
  [![License](https://img.shields.io/github/languages/top/jones9682/Good-README-Generator?logo=github&logoColor=yellow)](https://github.com/jones9682/Good-README-Generator)

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

${licenseInfo[data.license]}

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
