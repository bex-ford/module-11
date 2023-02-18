const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "project",
        message: "What is your project's name?",
      },
      {
        type: "input",
        name: "contribute",
        message: "What was your motivation for this project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
      },
      {
        type: "input",
        name: "installation",
        message: "Installation for the project",
      },
      {
        type: "input",
        name: "usage",
        message: "Usage for this project",
      },
      {
        type: "list",
        message: "What licence should your project have?",
        name: "license",
        choices: ["MIT", "Apache", "Mozilla"],
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "question",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "question",
        message: "What does the user need to know about contributing to the repo?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
    ]
// function call to initialize program
    init()
    .then((data) => writeFileAsync('generatedREADME.md',
    generateMarkdown(data)))
    .then(() => console.log('Successfully wrote'))
    .catch((err) => console.log(err));


// function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program
function init() {
   return inquirer.prompt(questions)

}


