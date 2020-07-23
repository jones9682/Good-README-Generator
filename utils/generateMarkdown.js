// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
[![License](http://img.shields.io/:license-MIT-blue.svg)](http://doge.mit-license.org)

# **${data.title}**

## Description

${data.description}

## Table of contents

- [GitHub Info](#GitHub)
- [Description](#Description)
- [License](#License)
- [Installation](#Installation)
- [Test](#Test)
- [Repository Link](#Repository)
- [Contributors](#Contributors) 

## Installation

${data.install}

## Usage

${data.usage}

## Test

${data.test}

## License

${data.license}

## Contributors

${data.contribute}

## Repository

- [Project Repo](${data.repo})

## GitHub

![Image of me](${githubInfo.githubImage})
- [GitHub Profile](${githubInfo.profile})
- ${githubInfo.name}
  
  `;
}

module.exports = generateMarkdown;
