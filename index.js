// allows use of nodes inquirer
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
//const createReadme = require('./utils/createFiles');
// const licenseInfoIndex = require('./utils/licenseIndex')
// const createFiles = require('./utils/createFiles')
 const { createReadme, createLicense } = require('./utils/createFiles');
// const licenseIndex = require('./utils/licenseIndex');
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
            choices: ['', 'MIT_License', 'GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_2.0', 'Boost_Software_License_1.0' , 'The_Unlicense']
          },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    // create license and seperate from other infromation
    // .then(licenseIndexData => {
    //     return licenseInfoIndex(licenseIndexData)
    // })
   
    .then(markdownData => {
        return generateMarkdown(markdownData);
    })
    .then(writeData => {
        return createReadme(writeData)
    })    
    // .then(writeLicense => {
    //     return createLicense(writeLicense)
    // })
}

init()
//createLicense('hiyou')
// Function call to initialize app
// init()
//     .then(pageReadme => {
//         return createReadme(pageReadme)
//     })


// license for github based on username and repo
// https://img.shields.io/github/license/corycalaway/readme-generator


// create a LICENSE form to input license information based upon selection of license to be used
// create a readme with information

//https://img.shields.io/badge/https://img.shields.io/badge/license-MIT-brightgreen
//https://img.shields.io/badge/License-MIT-brightgreen