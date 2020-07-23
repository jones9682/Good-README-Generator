// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
[![License](http://img.shields.io/:license-MIT-blue.svg)](http://doge.mit-license.org)

# **${data.title}**

## Description

${data.description}

## Table of- Contents
- [GitHub Info](#GitHub)
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

``
${data.install}
``
## Usage

${data.usage}

## Demo

![Demo Tutorial](Videos/GoodREADMEGenerator(Node).gif)

## Test
To run tests, run the following command:

``
${data.test}
``
## License

${data.license}

## Contributors

${data.contribute}

## Repository

- [Project Repo](${data.repo})

## GitHub

![Image of me](${githubInfo.githubImage})
- [GitHub Profile](${githubInfo.profile})
- ${githubInfo.email}
  
  `;
}

module.exports = generateMarkdown;
