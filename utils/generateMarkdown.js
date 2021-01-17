const fs = require('fs');
const {createReadme, createLicense} = require('./createFiles');
const spdxLicenseList = require('spdx-license-list/full');
const agplv3License = require('spdx-license-list/licenses/AGPL-3.0-or-later')
const gplv3License = require('spdx-license-list/licenses/GPL-3.0-or-later')
const lgplv3License = require('spdx-license-list/licenses/LGPL-3.0-or-later')
const mplLicense = require('spdx-license-list/licenses/MPL-2.0')
const apacheLicense = require('spdx-license-list/licenses/Apache-2.0')
const boostLicense = require('spdx-license-list/licenses/BSL-1.0')

// create license badge
renderLicenseBadge = license => {
    if(!license) {
        return "";
    }
    return `![badge](https://img.shields.io/badge/License-${license}-brightgreen)`
}

// creates license section
renderLicenseSection = license => {

    // checks license selected and creates a license with the license text.
    if(!license) {
        return "";
    } else if (license === 'MIT_License') {
        createLicense(spdxLicenseList.MIT.licenseText)

    } else if (license === 'GNU_AGPLv3') {
       createLicense(agplv3License.licenseText)

    } else if (license === 'GNU_GPLv3') {
        createLicense(gplv3License.licenseText)

    } else if (license === 'GNU_LGPLv3') {
        createLicense(lgplv3License.licenseText)

    } else if (license === 'Mozilla_Public_License_2.0') {
        createLicense(mplLicense.licenseText)

    } else if (license === 'Apache_2.0') {
        createLicense(apacheLicense.licenseText)

    } else if (license === 'Boost_Software_License_1.0') {
        createLicense(boostLicense.licenseText)

    } else {
        createLicense(spdxLicenseList.Unlicense.licenseText)
    }
}

// creates the text for the readme file
module.exports = (generateMarkdown) => {
    console.log(generateMarkdown)
   
   
    const { projectTitle, projectDescription, projectInstallation, projectUsage, projectContribution, testInstructions, license, emailData, githubData} = generateMarkdown;
    testingVariable = license

    renderLicenseSection(license)
    //${renderLicenseSection(license)}
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

Licensed under the [${license}](LICENSE)

### Questions
- For further questions please reach out through the following:
    - Email: ${emailData}
    - GitHub: https://github.com/${githubData}/${projectTitle}`
}