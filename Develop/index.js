// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Name your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the purpose of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots or GIFs.",
  },
  {
    type: "input",
    name: "credits",
    message: "Provide collaborators GitHub usernames",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license for this project.",
    choices: ["MIT", "APACHE2.0", "BSD2.0", "BSD3.0"],
  },
  {
    type: "input",
    name: "creator",
    message: "Provide your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Provide your email address",
  },
  {
    type: "input",
    name: "features",
    message: "List any features your project has here.",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(filePath, data);
  console.log(`README file created at ${filePath}`);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Assuming generateMarkdown is a function that generates the markdown content based on the answers

      const fileName = "README.md"; // Specify the desired file name

      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error("Error occurred while initializing the app:", error);
    });
}

// Function call to initialize app
init();
