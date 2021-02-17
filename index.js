const inquirer = require('inquirer');
const fs = require('fs');


 inquirer.prompt([
        {
            type: "input",
            name: "Project Title",
            message: "What is the title of your project?"
        },

        {
            type: "input",
            name: "Description",
            message: "Please provide a brief description of your project:"
        },

        {
            type: "input",
            name: "Installation",
            message: "Please provide installation instructions for your project:"
        },
        
        {
            type: "input",
            name: "Usage",
            message: "What is the intended usage of this application?"
        },

        {
           type: "input",
           name: "Contributors",
           message: "Other project contributors:"
        },

        {
            type: "input",
            name: "Testing",
            message: "Instructions for testing:"
        },

        {
            type: "list",
            name: "License(s)",
            message: "Project Licensing",
            choices: ["Apache", "BSD 3", "BSD 2", "GNU General", "GNU LIbrary", "MIT", "Mozilla"]
        }


    ])

        .then((responses) => {
            console.log(responses);
        })
