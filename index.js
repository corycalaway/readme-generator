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
        }

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
