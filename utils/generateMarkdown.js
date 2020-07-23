// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
[![License](http://img.shields.io/:license-MIT-blue.svg)](http://doge.mit-license.org)

# **${data.title}**

## Description

${data.description}

## Table of contents

- [GitHub Info](#Questions)
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

## Questions

![Image of me](${githubInfo.githubImage})

If you have any question about the repo, open an issue or contact me directly at " + ${githubInfo.email} +". You can fin more of my work at "  + [jones9682](${githubInfo.profile}) + "/).

  `;
}

module.exports = generateMarkdown;
