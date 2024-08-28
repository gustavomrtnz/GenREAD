// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = ['What is the USER STORY?', 'What is the PROJECT NAME?', 'What is the PROJECT DESCRIPTION?', 'Who are the TEAM'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md file has been created!');
    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions) // Prompt the user with questions
       .then(answers => { // Generate markdown based on user's answers and write to README.md
            const markdown = generateMarkdown(answers); // Write the generated markdown to README.md file. 
            writeToFile('README.md', markdown); // Display success message. 
        })
       .catch(error => console.log(error));
}

// Function call to initialize app
init();

// TODO: Add comments to explain the purpose of each function and section of the code
