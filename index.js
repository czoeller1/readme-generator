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
        name: "usage",
      },
      {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contribution",
      },
      {
        type: "input",
        message: "How do users test your project?",
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
    .then(function (response) {});
}

// Function call to initialize app
init();
