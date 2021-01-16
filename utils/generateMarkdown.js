// allows use of filesystems in node
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
    if(!license) {
        return "";
    }
    return `![badge](https://img.shields.io/badge/License-${license}-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(questionsData) {
//   return `# ${questionsData.title}
// `;
// }

module.exports = (generateMarkdown) => {
    console.log(generateMarkdown)
    const { projectTitle, projectDescription, projectInstallation, projectUsage, projectContribution, testInstructions, license} = generateMarkdown;
    return `# ${projectTitle}
    
## Description
${projectDescription}

${renderLicenseBadge(license)}
## Table of Contents
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License Information](#license-information)

## Installation Instructions
${projectInstallation}

## Usage Information
${projectUsage}

## Contribution Guidelines
${projectContribution}

## Test Instructions
${testInstructions}

## License Information
${license}`
}

