// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // Import inquirer package
const fs = require('fs'); // Import fs package for file operations
const generateMarkdown = require('./utils/generateMarkdown'); // Import the generateMarkdown function from the utils folder



// TODO: Create an array of questions for user input
const questions = [// Array of questions for user input
    {
      type: "input", 
      name: "title",
      message: "Tile of your Project.", 
    },
    {
      type: "input",
      name: "description",
      message: "Describe the description,usage information,contribution guidelines, and test instructions.", 
    },
    {
      type: "input",
      name: "installation",
      message: "Instllation instructions",

    },
    {
      type: "input",
      name: "usage",
      message: "enter usage information",

    },
    {
      type: "input",
      name: "link",
      message: "Please provide a URL where a user can access your deployed application."
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license applicable to this project.",
      choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
 
    {
      type: "input",
      name: "username",
      message: "Input your Github username.",
    },
    {
      type: "input",
      name: "email",
      message: "Provide a valid email address.",
    },
    {
      type: "input",
      name: "contributors",
      message: "Please list any contributors. (Use GitHub usernames)",
      default: "",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any test instructions.",
        default: "",
    }
  ] 

// TODO: Create a function to write README file
function writeToFile(fileName, data) { // Write the markdown data to a README.md file. 
    fs.writeFile(fileName, data, err => { // If there's an error writing the file, log it. Otherwise, log a success message.
        if (err) throw err; // If no error, log a success message.
        console.log('README.md generated successfully.'); // Log a success message.
    });
}

// TODO: Create a function to initialize appfunction init() {
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./utils/README.md", generateMarkdown({ ...responses }));
    });
  }
// Function call to initialize app
init();

// TODO: Add comments to explain the purpose of each function and section of the code

//cources for licenses https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba