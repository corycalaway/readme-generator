// allows use of nodes inquirer
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const { createReadme, createLicense } = require('./utils/createFiles');

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
            message: 'Please provide any installation instructions you would like to include in your readme!',
        },
        // usage information
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Provide information on how this project is used!',
        },
        // contribution guidelines
        {
            type: 'input',
            name: 'projectContribution',
            message: 'Provide information on how to contribute to this project!',
        },
        // test instructions
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Provide information on test instructions!',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application',
            choices: ['', 'MIT_License', 'GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_2.0', 'Boost_Software_License_1.0' , 'The_Unlicense']
          },
          {
            type: 'input',
            name: 'emailData',
            message: 'What is your email addresss?',
            validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
            }
        }},
        {
            type: 'input',
            name: 'githubData',
            message: 'What is your GitHub username?',
            validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!')
            }
        }}
    ])
};

// initialize app
const init = () => {
    questions()
    .then(markdownData => {
        return generateMarkdown(markdownData);
    })
    .then(writeData => {
        return createReadme(writeData)
    })    
}

init()

//if(values.find(val => val === 'installation)) {console.log('true)} else { console.log('false')}
// if (values.find( (val) => { return vall === 'installation' }))