// allows use of filesystems in node
const fs = require('fs');
const {mitLicenseData, agplv3LicenseData, gplv3LicenseData, lgplv3LicenseData, mozillaLicenseData, apacheLicenseData, boosLicenseData, unlicenseLicenseData} = require('./licenseIndex')
const {createReadme, createLicense} = require('./createFiles');

// const testingIndex = require('./licenseIndex')

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
renderLicenseSection = license => {
   // const [mit, agplv3, ...therest] = testingIndex
    if(!license) {
        return "";
    } else if (license === 'MIT_License') {
        createLicense(mitLicenseData())
        return mitLicenseData()
    } else if (license === 'GNU_AGPLv3') {
        createLicense(agplv3LicenseData())
        return agplv3LicenseData()
    } else if (license === 'GNU_GPLv3') {
        return gplv3LicenseData()
    } else if (license === 'GNU_LGPLv3') {
        return lgplv3LicenseData()
    } else if (license === 'Mozilla_Public_License_2.0') {
        return mozillaLicenseData()
    } else if (license === 'Apache_2.0') {
        return apacheLicenseData()
    } else if (license === 'Boost_Software_License_1.0') {
        return boosLicenseData()
    } else {
        return unlicenseLicenseData()
    }
}

// const testing = () => {
//     return `MIT License

//     Copyright (c) [year] [fullname]
    
//     Permission is hereby granted, free of charge, to any person obtaining a copy
//     of this software and associated documentation files (the "Software"), to deal
//     in the Software without restriction, including without limitation the rights
//     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//     copies of the Software, and to permit persons to whom the Software is
//     furnished to do so, subject to the following conditions:
    
//     The above copyright notice and this permission notice shall be included in all
//     copies or substantial portions of the Software.
    
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//     SOFTWARE.`
// }

// TODO: Create a function to generate markdown for README
// function generateMarkdown(questionsData) {
//   return `# ${questionsData.title}
// `;
// }
// const licenseData = (licenseChoice) => {
//    return licenseInformation(licenseChoice)
    
// }


module.exports = (generateMarkdown) => {
    console.log(generateMarkdown)
   
   
    const { projectTitle, projectDescription, projectInstallation, projectUsage, projectContribution, testInstructions, license} = generateMarkdown;
    testingVariable = license


    return `# ${projectTitle}

${renderLicenseBadge(license)}    
## Description
${projectDescription}

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
${renderLicenseSection(license)}`
}


// create license / write maybe copy
// create file to hold 

