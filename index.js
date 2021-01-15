// allows use of nodes inquirer
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
// questions to generate readme
const questions = () => {
    return inquirer.prompt([
        // project title question
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!')
                }
            }
        },
        // project description
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Provide a description of your project!',
            validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!')
            }
        }
        },
        // installation instructions
        {
            type: 'input',
            name: 'projectInstallation',
            message: 'Provide installation instructions!',
            validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!')
            }
        }
        },
        // usage information
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Provide information on how this project is used!',
            validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter information on how this project is used!')
            }
        }
        },
        // contribution guidelines
        {
            type: 'input',
            name: 'projectContribution',
            message: 'Provide information on how to contribute to this project!',
            validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter information on how to contribute to this project!')
            }
        }
        },
        // test instructions
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Provide information on test instructions!',
            validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter information on test instructions!')
            }
        }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application',
            choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0' , 'The Unlicense']
          },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions();

}

// Function call to initialize app
init();


// license for github based on username and repo
// https://img.shields.io/github/license/corycalaway/readme-generator