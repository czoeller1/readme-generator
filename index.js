// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function contribution(inc) {
  if (inc) {
    return "[Guidelines](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)";
  }
  return "Contact me for further information.";
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Enter a description for your project: ",
        name: "description",
      },
      {
        type: "input",
        message: "How can users install your project?",
        default: "npm i",
        name: "install",
      },
      {
        type: "input",
        message: "How is your project used?",
        default: "node index.js",
        name: "usage",
      },
      {
        type: "confirm",
        message: "Do you want to include contributing guidelines?",
        name: "contribution",
      },
      {
        type: "input",
        message: "How do users test your project?",
        default: "npm run test",
        name: "tests",
      },
      {
        type: "list",
        message: "What is your project's License?",
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "None"],
        name: "license",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitName",
      },
      {
        type: "input",
        message: "What is the your email address?",
        name: "email",
      },
    ])
    .then(function (response) {
      console.log(response);
      //   Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
      //  license badge  ![APM](https://img.shields.io/apm/l/vim-mode)
      let text = `# ${response.title}
## Description

${response.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#test)
[Questions](#questions)

## Installation

${response.install}

## Usage

${response.usage}

## License

This project is ${
        response.license == "None"
          ? "unlicensed"
          : `covered under the ${response.license} license`
      }

## Contributing

${contribution(response.contribution)}

## Tests

${response.tests}

## Questions

Contact me:
[Github](https://github.com/${response.gitName})

${response.email}`;
      console.log(text);
      writeToFile("README.md", text);
    });
}

// Function call to initialize app
init();
