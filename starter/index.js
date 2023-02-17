const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        question: "question",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        question: "question",
        message: "What is your project's name?",
      },
      {
        type: "input",
        question: "question",
        message: "What was your motivation for this project?",
      },
      {
        type: "input",
        question: "question",
        message: "Please write a short description of your project",
      },
      {
        type: "list",
        message: "What licence should your project have?",
        name: "licence",
        choices: ["MIT", "Apache", "Mozilla"],
      },
      {
        type: "input",
        question: "question",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        question: "question",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        question: "question",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        question: "question",
        message: "What does the user need to know about contributing to the repo?",
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

      fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }),
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

// license adge for MIT
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
