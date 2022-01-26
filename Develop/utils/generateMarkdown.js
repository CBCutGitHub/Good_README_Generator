// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents

*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Test](#test)
*[License](#license)
*[Questions](#questions)

 [Email](#email)
 [Github](#github)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## License
This application is licensed under ${data.license}

## Questions
For any questions, send email inquiries to ${data.email} or ${data.github}



// installation instructions, usage information, contribution guidelines, and test instructions





`;
}

module.exports = generateMarkdown;
