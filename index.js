const inquirer = require('inquirer');
const fs = require('fs');


function userPrompt () {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?"
        },

        {
            type: "input",
            name: "description",
            message: "Please enter a brief description of your project."
        },

        {
            type: "input",
            name: "installation",
            message: "Please enter installation instructions for your project."
        },
        
        {
            type: "input",
            name: "usage",
            message: "What is the intended usage of this application?"
        }

    ])
}

console.log("test");