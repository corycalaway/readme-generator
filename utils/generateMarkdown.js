const fs = require("fs");
const { createReadme, createLicense } = require("./createFiles");
const spdxLicenseList = require("spdx-license-list/full");
const agplv3License = require("spdx-license-list/licenses/AGPL-3.0-or-later");
const gplv3License = require("spdx-license-list/licenses/GPL-3.0-or-later");
const lgplv3License = require("spdx-license-list/licenses/LGPL-3.0-or-later");
const mplLicense = require("spdx-license-list/licenses/MPL-2.0");
const apacheLicense = require("spdx-license-list/licenses/Apache-2.0");
const boostLicense = require("spdx-license-list/licenses/BSL-1.0");

// create license badge
renderLicenseBadge = (license) => {
  if (!license) {
    return "";
  }
  return `![badge](https://img.shields.io/badge/License-${license}-brightgreen)`;
};

// creates license section
renderLicenseSection = (license) => {
  // checks license selected and creates a license with the license text.
  if (!license) {
    return "";
  } else if (license === "MIT_License") {
    createLicense(spdxLicenseList.MIT.licenseText);
  } else if (license === "GNU_AGPLv3") {
    createLicense(agplv3License.licenseText);
  } else if (license === "GNU_GPLv3") {
    createLicense(gplv3License.licenseText);
  } else if (license === "GNU_LGPLv3") {
    createLicense(lgplv3License.licenseText);
  } else if (license === "Mozilla_Public_License_2.0") {
    createLicense(mplLicense.licenseText);
  } else if (license === "Apache_2.0") {
    createLicense(apacheLicense.licenseText);
  } else if (license === "Boost_Software_License_1.0") {
    createLicense(boostLicense.licenseText);
  } else {
    createLicense(spdxLicenseList.Unlicense.licenseText);
  }
};

// dynamically create table of contents
renderSelectedContentTable = (
  projectInstallation,
  projectUsage,
  projectContribution,
  testInstructions,
  license
) => {
  let projectInstallationTable = "";
  let projectUsageTable = "";
  let projectContributionTable = "";
  let testInstructionsTable = "";
  let licenseTable = "";
  let tableOfContentsValue = "";

  if (projectInstallation) {
    projectInstallationTable =`* [Installation Instructions](#installation-instructions)
`;
    tableOfContentsValue = tableOfContentsValue + projectInstallationTable;
  }

  if (projectUsage) {
    projectUsageTable = `* [Usage Information](#usage-information)
`;
    tableOfContentsValue = tableOfContentsValue + projectUsageTable;
  }

  if (projectContribution) {
    projectContributionTable = `* [Contribution Guidelines](#contribution-guidelines)
`;
    tableOfContentsValue = tableOfContentsValue + projectContributionTable;
  }

  if (testInstructions) {
    testInstructionsTable = `* [Test Instructions](#test-instructions)
`;
    tableOfContentsValue = tableOfContentsValue + testInstructionsTable;
  }

  if (license) {
    licenseTable = `* [License Information](#license-information)
`;
    tableOfContentsValue = tableOfContentsValue + licenseTable;
  }
  

  return tableOfContentsValue;
};

// dynamically create installation seciont

renderProjectSections = (projectInstallation, projectUsage, projectContribution, testInstructions, license) => {
  let projectInstallationSection = "";
  let projectUsageSection = "";
  let projectContributionSection = ""
  let testInstructionsSection = ""
  let licenseSection = "";
  let projectSections = "";


  if (projectInstallation) {
    projectInstallationSection = `## Installation Instructions
${projectInstallation}

`;

projectSections = projectSections + projectInstallationSection
  }

  if (projectUsage) {
    projectUsageSection = `## Usage Information
${projectUsage}

`;

projectSections = projectSections + projectUsageSection
  }

  if (projectContribution) {
    projectContributionSection = `## Contribution Guidelines
${projectContribution}

`;

projectSections = projectSections + projectContributionSection
  }

  if (testInstructions) {
    testInstructionsSection = `## Test Instructions
${testInstructions}

`;

projectSections = projectSections + testInstructionsSection
  }

  if (license) {
    licenseSection = `## License Information
Licensed under the [${license}](LICENSE)
`;

projectSections = projectSections + licenseSection
  }

  return projectSections;
};
//if(values.find(val => val === 'installation)) {console.log('true)} else { console.log('false')}
// if (values.find( (val) => { return vall === 'installation' }))
// creates the text for the readme file
module.exports = (generateMarkdown) => {
  console.log(generateMarkdown);

  const {
    projectTitle,
    projectDescription,
    projectInstallation,
    projectUsage,
    projectContribution,
    testInstructions,
    license,
    emailData,
    githubData,
  } = generateMarkdown;
  testingVariable = license;

  renderLicenseSection(license);
  //${renderLicenseSection(license)}
  return `# ${projectTitle}

${renderLicenseBadge(license)}    
## Description
${projectDescription}

## Table of Contents
${renderSelectedContentTable(
  projectInstallation,
  projectUsage,
  projectContribution,
  testInstructions,
  license
)}

${renderProjectSections(projectInstallation, projectUsage, projectContribution, testInstructions, license)}
### Questions
- For further questions please reach out through the following:
    - Email: ${emailData}
    - GitHub: https://github.com/${githubData}/${projectTitle}`;
};
